'use strict';

console.log(document.querySelector('.message').textContent);

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

//Starting health
let selectedHit = '';
let selectedBlock = '';
let computerHit = '';
let computerBlock = '';
let playerHealth = 3;
let computerHealth = 3;
let winsInRaw = 0;
let highScore = 0;

//Recording gamer's hit and block + calls other functions
function recordSelection() {
  const hits = document.getElementsByName('hit');
  for (const hit of hits) {
    if (hit.checked) {
      selectedHit = hit.value;
      break;
    }
  }
  if (selectedHit) {
    console.log('Selected hit:', selectedHit);
  } else {
    alert('No hit selected.');
  }
  const blocks = document.getElementsByName('block');
  for (const block of blocks) {
    if (block.checked) {
      selectedBlock = block.value;
      break;
    }
  }
  if (selectedBlock) {
    console.log('Selected block:', selectedBlock);
  } else {
    alert('No block selected.');
  }
  computerHit = getRandomHit();
  computerBlock = getRandomBlock();
  fightRound();
}
// Generate computer hit and block functions
function getRandomHit() {
  const RandomHits = ['head', 'body', 'feet'];
  const randomIndex = Math.floor(Math.random() * RandomHits.length);
  const computerHit = RandomHits[randomIndex];
  console.log('Computer Hit:', computerHit);
  return computerHit;
}

function getRandomBlock() {
  const RandomBlocks = ['head', 'body', 'feet'];
  const randomIndex = Math.floor(Math.random() * RandomBlocks.length);
  const computerBlock = RandomBlocks[randomIndex];
  console.log('Computer Block:', computerBlock);
  return computerBlock;
}

// Fight round function
function fightRound() {
  if (selectedHit === computerBlock) {
    document.querySelector(
      '.message'
    ).innerHTML = `You tried to hit the opponent in the ${selectedHit}, but the opponent blocked your hit.<br>`;
  } else {
    document.querySelector(
      '.message'
    ).innerHTML = `You hit the opponent in the ${selectedHit}, and it was not blocked! The opponent looses one 💛<br>`;
    computerHealth--;
    document.querySelector('.opponent-health1').textContent = computerHealth;
  }
  if (computerHit === selectedBlock) {
    document.querySelector(
      '.message'
    ).innerHTML += `Your opponent tried to hit you in the ${computerHit}, but you blocked the hit.<br>`;
  } else {
    document.querySelector(
      '.message'
    ).innerHTML += `Your opponent hit you in the ${computerHit}, and you didn't block it! You loose one ❤️<br>`;
    playerHealth--;
    document.querySelector('.your-health1').textContent = playerHealth;
  }
  if (computerHealth == 0 && playerHealth !== 0) {
    document.querySelector(
      '.message'
    ).innerHTML += `<br>👑👑👑<br>Congratulations<br>👑👑👑<br>YOU WON THE FIGHT!`;
    document.querySelector('.number').textContent = `👍`;
    winsInRaw++;
    document.querySelector('.score').textContent = winsInRaw;
    changeButton1();
    if (winsInRaw > highScore) {
      highScore = winsInRaw;
    }
    document.querySelector('.highscore').textContent = highScore;
  }
  if (computerHealth !== 0 && playerHealth == 0) {
    document.querySelector(
      '.message'
    ).innerHTML += `<br>💔<br>YOU LOST THE FIGHT<br>🤕`;
    document.querySelector('.number').textContent = `👎`;
    winsInRaw = 0;
    document.querySelector('.score').textContent = winsInRaw;
    changeButton1();
  }
  if (computerHealth == 0 && playerHealth == 0) {
    document.querySelector(
      '.message'
    ).innerHTML += `<br>🤝🤝🤝<br>IT IS A DRAW<br>🤝🤝🤝`;
    document.querySelector('.number').textContent = `🤝`;
    changeButton1();
  }
}

//End of the game function

function changeButton1() {
  // Change the button text
  const button = document.getElementById('Check-button');
  button.textContent = 'New Fight';
  // Change the onclick action
  button.onclick = newFight;
}

function changeButton2() {
  // Change the button text
  const button = document.getElementById('Check-button');
  button.textContent = 'Check!';
  // Change the onclick action
  button.onclick = recordSelection;
}

function newFight() {
  selectedHit = '';
  selectedBlock = '';
  computerHit = '';
  computerBlock = '';
  playerHealth = 3;
  computerHealth = 3;
  document.querySelector('.your-health1').textContent = playerHealth;
  document.querySelector('.opponent-health1').textContent = computerHealth;
  document.querySelector('.number').textContent = `👊`;
  document.querySelector('.message').innerHTML = `Fight your opponent👊👊👊`;
  changeButton2();
}
