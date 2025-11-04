// src/application/GetBalanceUseCase.js

/**
 * @class GetBalanceUseCase
 * @description Use Case: отримати баланс користувача.
 * НЕ залежить від UI, Telegram, HTTP.
 */
export class GetBalanceUseCase {
  /**
   * @param {Object} balanceGateway - Інтерфейс доступу до балансу
   */
  constructor(balanceGateway) {
    if (!balanceGateway || typeof balanceGateway.getBalance !== 'function') {
      throw new Error('balanceGateway must implement getBalance(userId)');
    }
    this.balanceGateway = balanceGateway;
  }

  /**
   * @param {number} userId
   * @returns {Promise<number>} - баланс як число
   */
  async execute(userId) {
    if (!userId || typeof userId !== 'number') {
      throw new Error('Valid userId is required');
    }

    try {
      const rawBalance = await this.balanceGateway.getBalance(userId);
      const balance = parseFloat(rawBalance);

      if (isNaN(balance)) {
        throw new Error('Invalid balance format from gateway');
      }

      return parseFloat(balance.toFixed(2));
    } catch (error) {
      console.error('GetBalanceUseCase error:', error);
      throw new Error('Failed to fetch balance');
    }
  }
}