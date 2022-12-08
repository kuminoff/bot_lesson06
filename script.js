"use strict"; 

const isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number) && !/\s/g.test(number);
}

const bot = function () {

  let num = Math.round(Math.random() * 100);
  console.log(num);
  let attempt = 10;
  let anotherGame;


  const assumption = function () {

    if (attempt == 0) {
      anotherGame = confirm(`Игра окончена, хотели бы сыграть еще?`);
      return anotherGame;
    }

    let ans = prompt(`Угадай число от 0 до 100`);
    console.log(ans);

    switch (true) {
      case (ans === null):
        anotherGame = confirm(`Игра окончена, хотели бы сыграть еще?`);
        return anotherGame;

      case (!isNumber(ans)):
        alert(`Введи число!`);
        break;

      case (ans < num):
        alert(`Загаданное число БОЛЬШЕ, осталось ${attempt} попыток`);
        attempt--;
        break;

      case (ans > num):
        alert(`Загаданное число МЕНЬШЕ, осталось ${attempt} попыток`);
        attempt--;
        break;

      default:
        anotherGame = confirm(`Поздравляю, Вы угадали!!! Хотели бы сыграть еще?`);
        return anotherGame;
    }
    assumption();
  };

  assumption();

  if (anotherGame === true) {
    bot();
  } else if (anotherGame === false) {
    alert(`Спасибо за участие`);
  }
};

bot();