// src/infrastructure/gateways/HttpGiftGateway.js
export class HttpGiftGateway {
  constructor() {
    // ПРОКСІ, ЯКИЙ ПРАЦЮЄ З .tgs
    this.proxy = 'https://api.allorigins.win/raw?url=';
    this.baseUrl = 'https://api.changes.tg/original';
  }

  async loadGiftAnimation(giftId) {
    const url = `${this.baseUrl}/${giftId}.tgs`;
    const response = await fetch(this.proxy + encodeURIComponent(url));
    if (!response.ok) {
      throw new Error(`Failed to load .tgs: ${giftId} (Status: ${response.status})`);
    }
    const arrayBuffer = await response.arrayBuffer();
    // .tgs — це стиснутий JSON → розпаковуємо
    const jsonString = new TextDecoder().decode(arrayBuffer);
    return JSON.parse(jsonString);
  }
}