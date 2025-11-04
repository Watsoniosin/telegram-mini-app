
// bot.js — ESM версія (працює з "type": "module")
import { Telegraf } from 'telegraf';

const bot = new Telegraf('7652863433:AAEbw65E5Yx2g3cf5ZpLbbvlaFq55i0gJ0w'); // ← Заміни на токен від @BotFather

bot.start((ctx) => ctx.reply('Привіт! Натисни Menu', {
  reply_markup: {
    inline_keyboard: [[
      { text: 'Відкрити Mini App', web_app: { url: 'https://watsoniosin.github.io/telegram-mini-app/' } }
    ]]
  }
}));

bot.launch();
console.log('Бот запущено! Тепер /start працює');