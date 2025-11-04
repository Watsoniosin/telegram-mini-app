// src/infrastructure/gateways/HttpGiftGateway.js
export class HttpGiftGateway {
  constructor() {
    // НАДІЙНИЙ CORS-ПРОКСІ
    this.proxy = 'https://corsproxy.io/?';
    this.baseUrl = 'https://api.changes.tg/original';
  }

  async loadGiftAnimation(giftId) {
    const url = `${this.baseUrl}/${giftId}.json`;
    const proxied = this.proxy + encodeURIComponent(url);
    const response = await fetch(proxied);
    if (!response.ok) throw new Error(`Gift JSON not found: ${giftId}`);
    return await response.json();
  }

  loadGiftPreview(giftId) {
    // ЯВНО ВКАЗУЄМО .png
    const url = `${this.baseUrl}/${giftId}.png`;
    return this.proxy + encodeURIComponent(url);
  }
}