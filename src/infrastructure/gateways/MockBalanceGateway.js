// src/infrastructure/gateways/MockBalanceGateway.js
import { BalanceGateway } from './BalanceGateway.js';

export class MockBalanceGateway extends BalanceGateway {
  constructor(mockBalance = '100.00') {
    super();
    this.mockBalance = mockBalance;
  }

  async getBalance(userId) {
    console.log(`[MOCK] Запит балансу для userId: ${userId}`);
    await new Promise(r => setTimeout(r, 300)); // імітація затримки
    return this.mockBalance;
  }
}