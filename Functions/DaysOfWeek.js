module.exports.days1 = [
  "Воскресенье Знаменатель",
  "Понедельник Знаменатель",
  "Вторник Знаменатель",
  "Среда Знаменатель",
  "Четверг Знаменатель",
  "Пятница Знаменатель",
  "Суббота Знаменатель",
];

module.exports.days2 = [
  "Воскресенье Числитель",
  "Понедельник Числитель",
  "Вторник Числитель",
  "Среда Числитель",
  "Четверг Числитель",
  "Пятница Числитель",
  "Суббота Числитель",
];

module.exports.schedule1 = {
  sunday2: ["Воскресенье Знаменатель", "Выходной"],
  monday2: ["Понедельник Знаменатель", "09:00: ГПП", "10:30 Юр Логика"],
  tuesday2: [
    "Вторник Знаменатель",
    "09:00: Юр Психология",
    "10:30: Криминалистика(семинар)",
  ],
  wednesday2: ["Среда Знаменатель", "09:00: УПП", "10:30: СП(семинар)"],
  thursday2: [
    "Четверг Знаменатель",
    "09:00: --",
    "10:30: ГПП(семинар)",
    "12:10: УПП(семинар)",
  ],
  friday2: [
    "Пятница Знаменатель",
    "09:00: Юр психология(семинар)",
    "10:30: Криминалистика",
    "12:10: Юр Логика",
  ],
  saturday2: [
    "Суббота Знаменатель",
    "09:00: --",
    "10:30: МЧП",
    "12:10: МЧП(семинар)",
    "13:40: Юр Статистика(семинар)",
  ],
};

module.exports.schedule2 = {
  sunday: ["Воскресенье Числитель", "Выходной"],
  monday: ["Понедельник Числитель", "09:00: ГПП", "10:30: СП"],
  tuesday: ["Вторник Числитель", "09:00: ПСО", "10:30: Криминалистика"],
  wednesday: ["Среда Числитель", "09:00: УПП", "10:30: ПСО(семинар)"],
  thursday: [
    "Четверг Числитель",
    "09:00: --",
    "10:30: ГПП(семинар)",
    "12:10: УПП(семинар)",
  ],
  friday: ["Пятница Числитель", "09:00: УИП", "10:30: Криминалистика"],
  saturday: [
    "Суббота Числитель",
    "09:00: --",
    "10:30: Юр Статистика",
    "12:10: УИП(семинар)",
  ],
};

module.exports.findShedule2 = (days2) => {
  const filtered2 = Object.keys(this.schedule2).filter(
    (key) => this.schedule2[key][0] == days2
  );
  return filtered2[0]
    ? this.schedule2[filtered2[0]].join("\n\r")
    : "Нет такого дня, лучше сдайте деньги";
};

module.exports.findShedule1 = (day1) => {
  const filtered1 = Object.keys(this.schedule1).filter(
    (key) => this.schedule1[key][0] == day1
  );
  return filtered1[0]
    ? this.schedule1[filtered1[0]].join("\n\r")
    : "Нет такого дня, лучше сдайте деньги";
};

module.exports.allShedule1 = () => {
  return Object.values(this.schedule1)
    .map((arr) => arr.join("\n\r"))
    .join("\n\n\r");
};

module.exports.allShedule2 = () => {
  return Object.values(this.schedule2)
    .map((arr) => arr.join("\n\r"))
    .join("\n\n\r");
};