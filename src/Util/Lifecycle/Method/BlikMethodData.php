<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Swag\PayPal\Util\Lifecycle\Method;

use Swag\PayPal\RestApi\V1\Api\MerchantIntegrations;
use Swag\PayPal\RestApi\V1\Api\MerchantIntegrations\Product;
use Swag\PayPal\Util\Availability\AvailabilityContext;

class BlikMethodData extends AbstractMethodData
{
    public function getTranslations(): array
    {
        return [
            'de-DE' => [
                'description' => '',
                'name' => 'BLIK',
            ],
            'en-GB' => [
                'description' => '',
                'name' => 'BLIK',
            ],
        ];
    }

    public function getPosition(): int
    {
        return -96;
    }

    public function getHandler(): string
    {
        return 'Swag\PayPal\Checkout\Payment\Method\BlikAPMHandler';
    }

    public function isAvailable(AvailabilityContext $availabilityContext): bool
    {
        return $availabilityContext->getTotalAmount() >= 1.0
            && $availabilityContext->getCurrencyCode() === 'PLN'
            && $availabilityContext->getBillingCountryCode() === 'PL';
    }

    public function getInitialState(): bool
    {
        return false;
    }

    public function getMediaFileName(): ?string
    {
        return 'apm_blik';
    }

    public function validateCapability(MerchantIntegrations $merchantIntegrations): string
    {
        $product = $merchantIntegrations->getSpecificProduct('PPCP_STANDARD');
        if ($product !== null && (\in_array($product->getVettingStatus(), [Product::VETTING_STATUS_APPROVED, Product::VETTING_STATUS_SUBSCRIBED], true))) {
            return self::CAPABILITY_ACTIVE;
        }

        return self::CAPABILITY_INELIGIBLE;
    }
}