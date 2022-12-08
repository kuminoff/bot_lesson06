"use strict"; 
// Используйте функции alert, confirm, prompt для общения с пользователем.

// Написать игровой бот.
// "Загадывание случайного числа от 1 до 100"

// Что должна делать программа:
// — спрашивает пользователя: "Угадай число от 1 до 100".
// — если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
// — если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
// — если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
// — если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".
// — если пользовательское число равно загаданному, то игра заканчивается и выводит сообщение "Поздравляю, Вы угадали!!!".

// Программа должна быть выполнена с помощью рекурсии, без единого цикла.
// Загаданное число должно храниться «в замыкании»

let anotherGame;

const newGame = function () {
  const startGame = bot();
  startGame();
  if (anotherGame === true) newGame();
};

const isNumber = function (number) {
  return !isNaN(parseFloat(number)) && isFinite(number) && !/\s/g.test(number);
};

const bot = function () {

  let num = Math.round(Math.random() * 100);
  console.log('Загаданное число - ' + num);
  let attempt = 10;

  return function assumption() {
    if (attempt == 0) {
      return anotherGame = confirm('Игра окончена, хотели бы сыграть еще?');
    }

    let answer = prompt('Угадай число от 1 до 100');
    console.log(answer);

    switch (true) {
      case (answer === null):
        return anotherGame = confirm('Игра окончена, хотели бы сыграть еще?');

      case (!isNumber(answer)):
        alert('Введи число!');
        break;
      
      case (answer < num):
        alert('Загаданное число БОЛЬШЕ, осталось ' + attempt + ' попыток');
        attempt--;
        break;
      
      case (answer > num):
        alert('Загаданное число МЕНЬШЕ, осталось ' + attempt + ' попыток');
        attempt--;
        break;
      
      default:
        return anotherGame = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
    }
    assumption();
  };
};

newGame();
alert('Спасибо за участие');