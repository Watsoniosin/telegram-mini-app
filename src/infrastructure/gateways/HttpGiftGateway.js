// src/infrastructure/gateways/HttpGiftGateway.js
export class HttpGiftGateway {
  constructor() {
    // НАДІЙНИЙ БЕЗКОШТОВНИЙ ПРОКСІ
    this.proxy = 'https://api.allorigins.win/raw?url=';
    this.baseUrl = 'https://api.changes.tg/original';
  }

  async loadGiftAnimation(giftId) {
    const url = `${this.baseUrl}/${giftId}.json`;
    const response = await fetch(this.proxy + encodeURIComponent(url));
    if (!response.ok) throw new Error(`Gift JSON not found: ${giftId}`);
    return await response.json();
  }

  loadGiftPreview(giftId) {
    const url = `${this.baseUrl}/${giftId}.png`;
    return this.proxy + encodeURIComponent(url);
  }
}