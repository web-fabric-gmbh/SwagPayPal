<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Swag\PayPal\Pos\Api\Authentication;

use Swag\PayPal\Pos\Api\Authentication\ApiKey\Header;
use Swag\PayPal\Pos\Api\Authentication\ApiKey\Payload;
use Swag\PayPal\Pos\Api\Common\PosStruct;

class ApiKey extends PosStruct
{
    /**
     * @deprecated tag:v4.0.0 - will be strongly typed
     *
     * @var Header
     */
    protected $header;

    /**
     * @deprecated tag:v4.0.0 - will be strongly typed
     *
     * @var Payload
     */
    protected $payload;

    /**
     * @deprecated tag:v4.0.0 - will be strongly typed
     *
     * @var string
     */
    protected $signature;

    public function getHeader(): Header
    {
        return $this->header;
    }

    public function setHeader(Header $header): void
    {
        $this->header = $header;
    }

    public function getPayload(): Payload
    {
        return $this->payload;
    }

    public function setPayload(Payload $payload): void
    {
        $this->payload = $payload;
    }

    public function getSignature(): string
    {
        return $this->signature;
    }

    public function setSignature(string $signature): void
    {
        $this->signature = $signature;
    }
}
