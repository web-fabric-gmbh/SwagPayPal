<?php declare(strict_types=1);

namespace Swag\PayPal\Util\Lifecycle;

use Shopware\Core\Checkout\Cart\Rule\CartAmountRule;
use Shopware\Core\Checkout\Customer\Rule\BillingCountryRule;
use Shopware\Core\Checkout\Customer\Rule\IsCompanyRule;
use Shopware\Core\Checkout\Payment\PaymentMethodEntity;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\ContainsFilter;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Core\Framework\Plugin\Util\PluginIdProvider;
use Shopware\Core\Framework\Rule\Container\AndRule;
use Shopware\Core\Framework\Uuid\Uuid;
use Shopware\Core\System\Country\CountryEntity;
use Shopware\Core\System\Country\Exception\CountryNotFoundException;
use Swag\PayPal\Payment\PayPalPaymentHandler;
use Swag\PayPal\Payment\PayPalPuiPaymentHandler;
use Swag\PayPal\Setting\Service\SettingsService;
use Swag\PayPal\Setting\SwagPayPalSettingStruct;
use Swag\PayPal\Util\PaymentMethodUtil;

class InstallUninstall
{
    /**
     * @var EntityRepositoryInterface
     */
    private $systemConfigRepository;

    /**
     * @var EntityRepositoryInterface
     */
    private $paymentRepository;

    /**
     * @var EntityRepositoryInterface
     */
    private $salesChannelRepository;

    /**
     * @var EntityRepositoryInterface
     */
    private $ruleRepository;

    /**
     * @var EntityRepositoryInterface
     */
    private $countryRepository;

    /**
     * @var PluginIdProvider
     */
    private $pluginIdProvider;

    /**
     * @var string
     */
    private $className;

    public function __construct(
        EntityRepositoryInterface $systemConfigRepository,
        EntityRepositoryInterface $paymentRepository,
        EntityRepositoryInterface $salesChannelRepository,
        EntityRepositoryInterface $ruleRepository,
        EntityRepositoryInterface $countryRepository,
        PluginIdProvider $pluginIdProvider,
        string $className
    ) {
        $this->systemConfigRepository = $systemConfigRepository;
        $this->paymentRepository = $paymentRepository;
        $this->salesChannelRepository = $salesChannelRepository;
        $this->ruleRepository = $ruleRepository;
        $this->countryRepository = $countryRepository;
        $this->pluginIdProvider = $pluginIdProvider;
        $this->className = $className;
    }

    public function install(Context $context): void
    {
        $this->addDefaultConfiguration();
        $this->addPaymentMethods($context);
    }

    public function uninstall(Context $context, bool $keepUserData): void
    {
        $this->removeConfiguration($context);
        $this->removePuiAvailabilityRule($context);
    }

    private function addDefaultConfiguration(): void
    {
        $data = [];
        foreach ((new SwagPayPalSettingStruct())->jsonSerialize() as $key => $value) {
            if ($value === null || $value === []) {
                continue;
            }

            $key = SettingsService::SYSTEM_CONFIG_DOMAIN . $key;
            $data[] = [
                'id' => Uuid::randomHex(),
                'configurationKey' => $key,
                'configurationValue' => $value,
            ];
        }
        $this->systemConfigRepository->upsert($data, Context::createDefaultContext());
    }

    private function removeConfiguration(Context $context): void
    {
        $criteria = (new Criteria())
            ->addFilter(new ContainsFilter('configurationKey', SettingsService::SYSTEM_CONFIG_DOMAIN));
        $idSearchResult = $this->systemConfigRepository->searchIds($criteria, $context);

        $ids = array_map(static function ($id) {
            return ['id' => $id];
        }, $idSearchResult->getIds());

        $this->systemConfigRepository->delete($ids, $context);
    }

    private function addPaymentMethods(Context $context): void
    {
        $puiAvailabilityRuleId = $this->getPuiAvailabilityRuleId($context);
        $pluginId = $this->pluginIdProvider->getPluginIdByBaseClass($this->className, $context);
        $paymentMethodUtil = new PaymentMethodUtil($this->paymentRepository, $this->salesChannelRepository);

        $data = [];

        $paypalData = [
            'handlerIdentifier' => PayPalPaymentHandler::class,
            'name' => 'PayPal',
            'position' => -100,
            'pluginId' => $pluginId,
            'translations' => [
                'de-DE' => [
                    'description' => 'Bezahlung per PayPal - einfach, schnell und sicher.',
                ],
                'en-GB' => [
                    'description' => 'Payment via PayPal - easy, fast and secure.',
                ],
            ],
        ];

        $payPalPaymentMethodId = $paymentMethodUtil->getPayPalPaymentMethodId($context);
        if ($payPalPaymentMethodId === null) {
            $data[] = $paypalData;
        } else {
            $paypalData['id'] = $payPalPaymentMethodId;
            $data[] = $paypalData;
        }

        $puiData = [
            'handlerIdentifier' => PayPalPuiPaymentHandler::class,
            'position' => -99,
            'active' => false,
            'pluginId' => $pluginId,
            'availabilityRuleId' => $puiAvailabilityRuleId,
            'translations' => [
                'de-DE' => [
                    'name' => 'Rechnungskauf',
                    'description' => 'Kaufen Sie ganz bequem auf Rechnung und bezahlen Sie später.',
                ],
                'en-GB' => [
                    'name' => 'Pay upon invoice',
                    'description' => 'Buy comfortably on invoice and pay later.',
                ],
            ],
        ];

        $payPalPuiPaymentMethodId = $paymentMethodUtil->getPayPalPuiPaymentMethodId($context);
        if ($payPalPuiPaymentMethodId === null) {
            $data[] = $puiData;
        } else {
            $puiData['id'] = $payPalPuiPaymentMethodId;
            $data[] = $puiData;
        }

        $this->paymentRepository->upsert($data, $context);
    }

    private function getPuiAvailabilityRuleId(Context $context): string
    {
        $germanCountryId = $this->getGermanCountryId($context);
        $ruleId = Uuid::randomHex();
        $data = [
            'id' => $ruleId,
            'name' => 'PayPalPuiAvailabilityRule',
            'priority' => 1,
            'description' => 'Determines whether or not the PayPal - Pay upon invoice payment method is available for the given rule context.',
            'conditions' => [
                [
                    'type' => (new AndRule())->getName(),
                    'children' => [
                        [
                            'type' => (new BillingCountryRule())->getName(),
                            'operator' => BillingCountryRule::OPERATOR_EQ,
                            'value' => [
                                'countryIds' => [
                                    $germanCountryId,
                                ],
                            ],
                        ],
                        [
                            'type' => (new IsCompanyRule())->getName(),
                            'value' => [
                                'isCompany' => false,
                            ],
                        ],
                        [
                            'type' => (new CartAmountRule())->getName(),
                            'value' => [
                                'operator' => CartAmountRule::OPERATOR_GTE,
                                'amount' => 2.0,
                            ],
                        ],
                        [
                            'type' => (new CartAmountRule())->getName(),
                            'value' => [
                                'operator' => CartAmountRule::OPERATOR_LTE,
                                'amount' => 1470.0,
                            ],
                        ],
                    ],
                ],
            ],
        ];

        $this->ruleRepository->create([$data], $context);

        return $ruleId;
    }

    /**
     * @throws CountryNotFoundException
     */
    private function getGermanCountryId(Context $context): string
    {
        $germanIso3 = 'DEU';
        $criteria = new Criteria();
        $criteria->addFilter(
            new EqualsFilter('iso3', $germanIso3)
        );

        /** @var CountryEntity $germanCountry */
        $germanCountry = $this->countryRepository->search($criteria, $context)->first();

        if (!($germanCountry instanceof CountryEntity)) {
            throw new CountryNotFoundException($germanIso3);
        }

        return $germanCountry->getId();
    }

    private function removePuiAvailabilityRule(Context $context): void
    {
        $paymentMethodUtil = new PaymentMethodUtil($this->paymentRepository, $this->salesChannelRepository);
        $payPalPuiPaymentMethodId = $paymentMethodUtil->getPayPalPuiPaymentMethodId($context);
        $criteria = new Criteria([$payPalPuiPaymentMethodId]);
        $criteria->addAssociation('availabilityRuleId');

        /** @var PaymentMethodEntity $payPalPuiPaymentMethod */
        $payPalPuiPaymentMethod = $this->paymentRepository->search($criteria, $context)->get($payPalPuiPaymentMethodId);

        $payPalPuiPaymentMethodAvailabilityRuleId = $payPalPuiPaymentMethod->getAvailabilityRuleId();
        if (!$payPalPuiPaymentMethodAvailabilityRuleId) {
            return;
        }

        $this->ruleRepository->delete([
            [
                'id' => $payPalPuiPaymentMethodAvailabilityRuleId,
            ],
        ], $context);
    }
}