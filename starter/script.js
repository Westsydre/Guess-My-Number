'use strict';

let score = 20;
let highScore = 0;
let playing = true;
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const init = function () {
  playing = true;
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.highScore').textContent = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222 ';
  document.querySelector('.guess').value = ' ';

  document.querySelector('.number').style.width = '15rem';
};

let check = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20) + 1;

check.addEventListener('click', function () {
  if (playing) {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      displayMessage('⛔ No number!');
    } else if (guess === secretNumber) {
      playing = false;
      displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#68b347';

      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      } else {
        displayMessage('💥 You lost the game');
        score = 0;
      }
    }
  }
});

const again = document.querySelector('.again');
again.addEventListener('click', init);
