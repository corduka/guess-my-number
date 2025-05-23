'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score-table').classList.remove('hidden');
    const li = document.createElement('li');
    document.querySelector('.highscore-list').appendChild(li);
    document.querySelector('.initials-entry').classList.remove('hidden');

    //activate the higherscore:
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is hoo high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--; //score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.check').disabled = true;
      document.querySelector('.check').style.cursor = 'not-allowed';
      document.querySelector('.check').style.backgroundColor = '#4A4A4A';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.score-table').classList.remove('hidden');
      const li = document.createElement('li');
      document.querySelector('.highscore-list').appendChild(li);
      document.querySelector('.initials-entry').classList.remove('hidden');
    }

    //When the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--; //score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.score-table').classList.remove('hidden');
      const li = document.createElement('li');
      document.querySelector('.highscore-list').appendChild(li);
      document.querySelector('.initials-entry').classList.remove('hidden');
    }
  }
});

// Activate the AGAIN button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
  document.querySelector('.check').style.cursor = 'pointer';
  document.querySelector('.check').style.backgroundColor = '#ccc';
  document.querySelector('.score-table').classList.add('hidden');
});

// listen for initials submit:
document
  .querySelector('#submit-initials')
  .addEventListener('click', function () {
    const initials = document
      .querySelector('#initials')
      .value.toUpperCase()
      .slice(0, 10);
    if (!initials) return;

    const li = document.createElement('li');
    li.textContent = `${initials} .......... ${score}`; // spacing like classic arcade style
    document.querySelector('.highscore-list').appendChild(li);

    document.querySelector('.initials-entry').classList.add('hidden');
    document.querySelector('#initials').value = '';
  });
