// src/infrastructure/gateways/HttpGiftGateway.js
export class HttpGiftGateway {
  constructor() {
    // ПРОКСІ, ЯКИЙ ДОДАЄ CORS
    this.proxy = 'https://corsproxy.io/?';
    this.baseUrl = 'https://api.changes.tg/original';
  }

  async loadGiftAnimation(giftId) {
    const url = this.proxy + encodeURIComponent(`${this.baseUrl}/${giftId}.json`);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Gift not found: ${giftId}`);
    return await response.json();
  }

  loadGiftPreview(giftId) {
    return this.proxy + encodeURIComponent(`${this.baseUrl}/${giftId}.png`);
  }
}