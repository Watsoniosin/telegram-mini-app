// src/domain/User.js

/**
 * @class User
 * @description Чиста сутність користувача.
 * Не залежить від Telegram, API, UI.
 */
export class User {
  /**
   * @param {number} id - Telegram user ID
   * @param {string} firstName - Ім'я
   * @param {string|null} username - @username або null
   */
  constructor(id, firstName, username = null) {
    // Валідація (бізнес-правило!)
    if (!id || typeof id !== 'number') {
      throw new Error('User ID is required and must be a number');
    }
    if (!firstName || typeof firstName !== 'string') {
      throw new Error('First name is required');
    }

    this.id = id;
    this.firstName = firstName.trim();
    this.username = username ? username.trim() : null;
  }

  /**
   * @returns {string} - Відображуване ім'я: @username або Ім'я
   */
  getDisplayName() {
    return this.username ? `@${this.username}` : this.firstName;
  }

  /**
   * @returns {boolean} - Чи є @username
   */
  hasUsername() {
    return this.username !== null;
  }
}