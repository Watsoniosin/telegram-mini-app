// src/domain/Transaction.js

/**
 * @class Transaction
 * @description Історія поповнень/виведень.
 * Чиста бізнес-сутність.
 */
export class Transaction {
  /**
   * @param {string} id - Унікальний ID
   * @param {number} amount - Сума (+ або -)
   * @param {'topup'|'withdraw'} type
   * @param {Date|string} timestamp
   */
  constructor(id, amount, type, timestamp) {
    this._validateId(id);
    this._validateAmount(amount);
    this._validateType(type);
    this._validateTimestamp(timestamp);

    this.id = id;
    this.amount = parseFloat(amount.toFixed(2));
    this.type = type;
    this.timestamp = new Date(timestamp);
  }

  // --- Приватні валідації (бізнес-правила) ---
  _validateId(id) {
    if (!id || typeof id !== 'string') {
      throw new Error('Transaction ID is required');
    }
  }

  _validateAmount(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) {
      throw new Error('Amount must be a valid number');
    }
  }

  _validateType(type) {
    const validTypes = ['topup', 'withdraw'];
    if (!validTypes.includes(type)) {
      throw new Error(`Type must be one of: ${validTypes.join(', ')}`);
    }
  }

  _validateTimestamp(timestamp) {
    if (!timestamp) throw new Error('Timestamp is required');
    if (isNaN(new Date(timestamp).getTime())) {
      throw new Error('Invalid timestamp');
    }
  }

  // --- Бізнес-методи ---
  isPositive() {
    return this.amount > 0;
  }

  formatAmount() {
    const sign = this.amount > 0 ? '+' : '';
    return `${sign}${this.amount.toFixed(2)}`;
  }

  getFormattedDate() {
    return this.timestamp.toLocaleString('uk-UA', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}