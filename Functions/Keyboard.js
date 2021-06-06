const { Markup} = require ("telegraf")

module.exports.startKb = () => 
    Markup
        .keyboard([
        ["Сегодня Числитель", "Сегодня Знаменатель"], 
        ["Расписание Числитель", "Расписание Знаменатель"],
        ["Пощекотать Усики АМУ"]
])
    .resize()
