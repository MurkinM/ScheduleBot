const { Telegraf } = require("telegraf");
const bot = new Telegraf("1772039316:AAEI8Gg5q3usrfuPuD4Fxzpmb7KWZxDv3AE");
const { reply, greeting } = require("./Functions/greeting");
const { answer } = require("./Functions/Answers");
const {
  days2,
  days1,
  findShedule2,
  findShedule1,
  allShedule2,
  allShedule1,
} = require("./Functions/DaysOfWeek");
const { startKb} = require("./Functions/Keyboard");

bot.start((ctx) =>
  ctx.reply(`Привет, ${ctx.message.from.first_name}`, startKb())
);
const date = new Date();
bot.hears(days1, (ctx) => ctx.reply(findShedule1(ctx.message.text)));
bot.hears(days2, (ctx) => ctx.reply(findShedule2(ctx.message.text)));
bot.hears("Сегодня Числитель", (ctx) =>
  ctx.reply(findShedule2(days2[date.getDay()]))
);
bot.hears("Сегодня Знаменатель", (ctx) =>
  ctx.reply(findShedule1(days1[date.getDay()]))
);
bot.hears("Расписание Знаменатель", (ctx) => ctx.reply(allShedule1()));
bot.hears("Расписание Числитель", (ctx) => ctx.reply(allShedule2()));
bot.hears(greeting, (ctx) => ctx.reply(reply()));
bot.hears("Пощекотать Усики АМУ", (ctx) => ctx.reply(answer()));


console.log("BOT HAS BEEN STARTED");
bot.launch();
