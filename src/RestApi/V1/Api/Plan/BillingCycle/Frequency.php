<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Swag\PayPal\RestApi\V1\Api\Plan\BillingCycle;

use Swag\PayPal\RestApi\PayPalApiStruct;

/**
 * @codeCoverageIgnore
 * @experimental
 *
 * This class is experimental and not officially supported.
 * It is currently not used within the plugin itself. Use with caution.
 */
class Frequency extends PayPalApiStruct
{
    /**
     * @deprecated tag:v4.0.0 - will be strongly typed
     *
     * @var string
     */
    protected $intervalUnit;

    /**
     * @deprecated tag:v4.0.0 - will be strongly typed
     *
     * @var int
     */
    protected $intervalCount;

    public function getIntervalUnit(): string
    {
        return $this->intervalUnit;
    }

    public function setIntervalUnit(string $intervalUnit): void
    {
        $this->intervalUnit = $intervalUnit;
    }

    public function getIntervalCount(): int
    {
        return $this->intervalCount;
    }

    public function setIntervalCount(int $intervalCount): void
    {
        $this->intervalCount = $intervalCount;
    }
}
