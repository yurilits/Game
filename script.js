'use strict';

console.log(document.querySelector('.message').textContent);

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

//Starting health
let selectedHit = '0';
let selectedBlock = '0';
let computerHit = '';
let computerBlock = '';
let playerHealth = 3;
let computerHealth = 3;
let winsInRaw = 0;
let highScore = 0;

// NEW CODE!!!!!!!!!!!!!!!!!!!!!!!!!

// SELECTING THE BLOCK AREA:

function updateImages1(clickedImageId) {
  // Define the new sources based on the clicked image
  let newSources1 = {
    img11: 'IMG/1-1.jpg',
    img12: 'IMG/1-2.jpg',
    img13: 'IMG/1-3.jpg',
  };

  if (clickedImageId === 'img1-1') {
    newSources1.img11 = 'IMG/1-1a.jpg';
    newSources1.img12 = 'IMG/1-2.jpg';
    newSources1.img13 = 'IMG/1-3.jpg';
    selectedBlock = 'head'; // Record the value 'head'
  } else if (clickedImageId === 'img1-2') {
    newSources1.img11 = 'IMG/1-1.jpg';
    newSources1.img12 = 'IMG/1-2a.jpg';
    newSources1.img13 = 'IMG/1-3.jpg';
    selectedBlock = 'body'; // Record the value 'body'
  } else if (clickedImageId === 'img1-3') {
    newSources1.img11 = 'IMG/1-1.jpg';
    newSources1.img12 = 'IMG/1-2.jpg';
    newSources1.img13 = 'IMG/1-3a.jpg';
    selectedBlock = 'feet'; // Record the value 'feet'
  }

  // Update all images with the new sources
  document.getElementById('img1-1').src = newSources1.img11;
  document.getElementById('img1-2').src = newSources1.img12;
  document.getElementById('img1-3').src = newSources1.img13;
}

// Add click event listeners to each image
document
  .getElementById('img1-1')
  .addEventListener('click', () => updateImages1('img1-1'));
document
  .getElementById('img1-2')
  .addEventListener('click', () => updateImages1('img1-2'));
document
  .getElementById('img1-3')
  .addEventListener('click', () => updateImages1('img1-3'));

// SELECTING THE SHOT AREA:

function updateImages2(clickedImageId2) {
  // Define the new sources based on the clicked image
  let newSources2 = {
    img21: 'IMG/2-1.jpg',
    img22: 'IMG/2-2.jpg',
    img23: 'IMG/2-3.jpg',
  };

  if (clickedImageId2 === 'img2-1') {
    newSources2.img21 = 'IMG/2-1a.jpg';
    newSources2.img22 = 'IMG/2-2.jpg';
    newSources2.img23 = 'IMG/2-3.jpg';
    selectedHit = 'head'; // Record the value 'head'
  } else if (clickedImageId2 === 'img2-2') {
    newSources2.img21 = 'IMG/2-1.jpg';
    newSources2.img22 = 'IMG/2-2a.jpg';
    newSources2.img23 = 'IMG/2-3.jpg';
    selectedHit = 'body'; // Record the value 'body'
  } else if (clickedImageId2 === 'img2-3') {
    newSources2.img21 = 'IMG/2-1.jpg';
    newSources2.img22 = 'IMG/2-2.jpg';
    newSources2.img23 = 'IMG/2-3a.jpg';
    selectedHit = 'feet'; // Record the value 'feet'
  }

  // Update all images with the new sources
  document.getElementById('img2-1').src = newSources2.img21;
  document.getElementById('img2-2').src = newSources2.img22;
  document.getElementById('img2-3').src = newSources2.img23;
}

// Add click event listeners to each image
document
  .getElementById('img2-1')
  .addEventListener('click', () => updateImages2('img2-1'));
document
  .getElementById('img2-2')
  .addEventListener('click', () => updateImages2('img2-2'));
document
  .getElementById('img2-3')
  .addEventListener('click', () => updateImages2('img2-3'));

// OLD CODE!!!!!!!!!!!!!!!!!!!!!!!!!
// OLD CODE!!!!!!!!!!!!!!!!!!!!!!!!!
// OLD CODE!!!!!!!!!!!!!!!!!!!!!!!!!

const displayMessage = function (message) {
  document.querySelector('.message').innerHTML = message;
};

const addToMessage = function (message) {
  document.querySelector('.message').innerHTML += message;
};

//Recording gamer's hit and block + calls other functions
function recordSelection() {
  if (selectedHit === '0' || selectedBlock === '0') {
    displayMessage(
      `You should select both areas to protect and zone to shoot<br>`
    );
  } else {
    computerHit = getRandomHit();
    computerBlock = getRandomBlock();
    fightRound();
    selectedHit = '0';
    selectedBlock = '0';
    document.getElementById('img1-1').src = 'IMG/1-1.jpg';
    document.getElementById('img1-2').src = 'IMG/1-2.jpg';
    document.getElementById('img1-3').src = 'IMG/1-3.jpg';
    document.getElementById('img2-1').src = 'IMG/2-1.jpg';
    document.getElementById('img2-2').src = 'IMG/2-2.jpg';
    document.getElementById('img2-3').src = 'IMG/2-3.jpg';
  }
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
    displayMessage(
      `You shot your opponent in the ${selectedHit}, but the shot was blocked by the energy shield.<br>`
    );
  } else {
    displayMessage(
      `You shot your opponent in the ${selectedHit}, and it was not blocked! The opponent looses one 💛<br>`
    );
    computerHealth--;
    document.querySelector('.opponent-health1').textContent = computerHealth;
  }
  if (computerHit === selectedBlock) {
    addToMessage(
      `Your opponent shot you in the ${computerHit}, but you blocked the shot with the energy shield.<br>`
    );
  } else {
    addToMessage(
      `Your opponent shot you in the ${computerHit}, and you didn't block it! You loose one ❤️<br>`
    );
    playerHealth--;
    document.querySelector('.your-health1').textContent = playerHealth;
  }
  enfOfFight();
}

function enfOfFight() {
  if (computerHealth == 0 && playerHealth !== 0) {
    addToMessage(`<br>👑👑👑<br>Congratulations<br>👑👑👑<br>YOU WON!`);
    document.querySelector('.number').textContent = `👍`;
    winsInRaw++;
    document.querySelector('.score').textContent = winsInRaw;
    changeButton1();
    document.querySelector('body').style.backgroundColor = `#018801`;
    document.querySelector('.number').style.width = `30rem`;
    if (winsInRaw > highScore) {
      highScore = winsInRaw;
    }
    document.querySelector('.highscore').textContent = highScore;
  }
  if (computerHealth !== 0 && playerHealth == 0) {
    document.querySelector('.message').innerHTML += `<br>💔<br>YOU LOST<br>🤕`;
    document.querySelector('.number').textContent = `👎`;
    winsInRaw = 0;
    document.querySelector('.score').textContent = winsInRaw;
    changeButton1();
    document.querySelector('body').style.backgroundColor = `#990404`;
    document.querySelector('.number').style.width = `30rem`;
  }
  if (computerHealth == 0 && playerHealth == 0) {
    document.querySelector(
      '.message'
    ).innerHTML += `<br>🤝🤝🤝<br>IT IS A DRAW<br>🤝🤝🤝`;
    document.querySelector('.number').textContent = `🤝`;
    changeButton1();
    document.querySelector('body').style.backgroundColor = `#695602`;
    document.querySelector('.number').style.width = `30rem`;
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
  document.querySelector('body').style.backgroundColor = `#000000`;
  document.querySelector('.number').style.width = `15rem`;
  changeButton2();
}
