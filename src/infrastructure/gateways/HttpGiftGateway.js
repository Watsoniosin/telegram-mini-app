// src/infrastructure/gateways/HttpGiftGateway.js
export class HttpGiftGateway {
  constructor() {
    this.baseUrl = 'https://api.changes.tg/original';
  }

  async loadGiftAnimation(giftId) {
    const url = `${this.baseUrl}/${giftId}.json`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Gift not found: ${giftId}`);
    return await response.json();
  }

  loadGiftPreview(giftId) {
    return `${this.baseUrl}/${giftId}.png`;
  }
}