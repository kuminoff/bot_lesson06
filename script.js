"use strict"; 

const isNumber = function (number) {
  return !isNaN(parseFloat(number)) && isFinite(number) && !/\s/g.test(number);
};

const bot = function (min = 1, max = 100) {

  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  let attempt = 10;

  const assumption = function () {
    const ans = prompt(`Угадай число от ${min} до ${max}`);
    console.log(`Загаданное число ${ans}`);

    switch (true) {
      case (ans === null):
        return null;

      case (!isNumber(ans)):
        alert(`Введи число!`);
        break;

      case (ans < num):
        alert(`Загаданное число БОЛЬШЕ, осталось ${--attempt} попыток`);
        break;

      case (ans > num):
        alert(`Загаданное число МЕНЬШЕ, осталось ${--attempt} попыток`);
        break;

      default:
        return confirm(`Поздравляю, Вы угадали!!! Хотели бы сыграть еще?`);
    }

    return attempt ? assumption() : confirm(`У вас закончились попытки, хотели бы сыграть еще \n\n Было загадано число ${num}`);

  };

  assumption() ? bot() : alert(`Спасибо за участие`);

};

bot();