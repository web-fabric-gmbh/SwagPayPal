<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Swag\PayPal\RestApi\V1\Api\Disputes\Item;

use Swag\PayPal\RestApi\PayPalApiStruct;
use Swag\PayPal\RestApi\V1\Api\Disputes\Item\Evidence\Document;
use Swag\PayPal\RestApi\V1\Api\Disputes\Item\Evidence\EvidenceInfo;

class Evidence extends PayPalApiStruct
{
    /**
     * @deprecated tag:v4.0.0 - will be strongly typed
     *
     * @var string
     */
    protected $evidenceType;

    /**
     * @deprecated tag:v4.0.0 - will be strongly typed
     *
     * @var EvidenceInfo
     */
    protected $evidenceInfo;

    /**
     * @deprecated tag:v4.0.0 - will be strongly typed
     *
     * @var Document[]
     */
    protected $documents;

    /**
     * @deprecated tag:v4.0.0 - will be strongly typed
     *
     * @var string
     */
    protected $notes;

    /**
     * @deprecated tag:v4.0.0 - will be strongly typed
     *
     * @var string
     */
    protected $itemId;

    public function getEvidenceType(): string
    {
        return $this->evidenceType;
    }

    public function setEvidenceType(string $evidenceType): void
    {
        $this->evidenceType = $evidenceType;
    }

    public function getEvidenceInfo(): EvidenceInfo
    {
        return $this->evidenceInfo;
    }

    public function setEvidenceInfo(EvidenceInfo $evidenceInfo): void
    {
        $this->evidenceInfo = $evidenceInfo;
    }

    /**
     * @return Document[]
     */
    public function getDocuments(): array
    {
        return $this->documents;
    }

    /**
     * @param Document[] $documents
     */
    public function setDocuments(array $documents): void
    {
        $this->documents = $documents;
    }

    public function getNotes(): string
    {
        return $this->notes;
    }

    public function setNotes(string $notes): void
    {
        $this->notes = $notes;
    }

    public function getItemId(): string
    {
        return $this->itemId;
    }

    public function setItemId(string $itemId): void
    {
        $this->itemId = $itemId;
    }
}
