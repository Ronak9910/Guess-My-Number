'use strict';
const display = function (message) {
  document.querySelector('.message').textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let prevHighScore = 0;
document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    display('⛔ No number');
  } else if (guess == secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    if (prevHighScore < highScore) {
      display('🎉 Correct number,(new High Score)');
    } else {
      display('🎉 Correct number');
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '40rem';
    prevHighScore = highScore;
  } else {
    display(guess > secretNumber ? '🥺 Too high' : '🥺 Too low');
    score--;
    document.querySelector('.score').textContent = score;
    if (score == 0) {
      display('😭 You lost the game');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  score = 20;
  document.querySelector('.score').textContent = score;
  display('Start guessing..');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
