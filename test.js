// test.js
// ТЕСТ: GetBalanceUseCase + MockBalanceGateway

import { User } from './src/domain/User.js';
import { GetBalanceUseCase } from './src/application/GetBalanceUseCase.js';
import { MockBalanceGateway } from './src/infrastructure/gateways/MockBalanceGateway.js';

// === 1. Створюємо мок-користувача ===
const tgUser = {
  id: 123456789,
  first_name: "Олег",
  username: "oleg_dev"
};

const user = new User(tgUser.id, tgUser.first_name, tgUser.username);
console.log("Користувач:", user.getDisplayName());

// === 2. Створюємо мок-гейтвей (імітація сервера) ===
const mockGateway = new MockBalanceGateway('555.75');

// === 3. Створюємо Use Case ===
const getBalanceUseCase = new GetBalanceUseCase(mockGateway);

// === 4. Запускаємо логіку ===
async function runTest() {
  console.log("\nЗапит балансу...");
  try {
    const balance = await getBalanceUseCase.execute(user.id);
    console.log(`УСПІХ! Баланс: ${balance.toFixed(2)} $`);
  } catch (error) {
    console.error("ПОМИЛКА:", error.message);
  }
}

runTest();