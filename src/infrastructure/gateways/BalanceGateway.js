// src/infrastructure/gateways/BalanceGateway.js

/**
 * @interface BalanceGateway
 * @description Контракт для отримання балансу
 */
export class BalanceGateway {
  /**
   * @param {number} userId
   * @returns {Promise<string>} - баланс як рядок (наприклад, "125.50")
   */
  async getBalance(userId) {
    throw new Error('getBalance must be implemented');
  }
}