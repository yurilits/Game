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
let isProcessingMove = false; // Flag to track move processing

// NEW CODE!!!!!!!!!!!!!!!!!!!!!!!!!

// SELECTING THE BLOCK AREA:

function updateImages1(clickedImageId) {
  if (isProcessingMove) return; // Prevent further actions during processing
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
    selectedBlock = 'HEAD'; // Record the value 'head'
  } else if (clickedImageId === 'img1-2') {
    newSources1.img11 = 'IMG/1-1.jpg';
    newSources1.img12 = 'IMG/1-2a.jpg';
    newSources1.img13 = 'IMG/1-3.jpg';
    selectedBlock = 'BODY'; // Record the value 'body'
  } else if (clickedImageId === 'img1-3') {
    newSources1.img11 = 'IMG/1-1.jpg';
    newSources1.img12 = 'IMG/1-2.jpg';
    newSources1.img13 = 'IMG/1-3a.jpg';
    selectedBlock = 'FEET'; // Record the value 'feet'
  }

  // Update all images with the new sources
  document.getElementById('img1-1').src = newSources1.img11;
  document.getElementById('img1-2').src = newSources1.img12;
  document.getElementById('img1-3').src = newSources1.img13;

  // Check if both hit and block are selected
  if (selectedHit !== '0' && selectedBlock !== '0') {
    recordSelection();
  }
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
  if (isProcessingMove) return; // Prevent further actions during processing
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
    selectedHit = 'HEAD'; // Record the value 'head'
  } else if (clickedImageId2 === 'img2-2') {
    newSources2.img21 = 'IMG/2-1.jpg';
    newSources2.img22 = 'IMG/2-2a.jpg';
    newSources2.img23 = 'IMG/2-3.jpg';
    selectedHit = 'BODY'; // Record the value 'body'
  } else if (clickedImageId2 === 'img2-3') {
    newSources2.img21 = 'IMG/2-1.jpg';
    newSources2.img22 = 'IMG/2-2.jpg';
    newSources2.img23 = 'IMG/2-3a.jpg';
    selectedHit = 'FEET'; // Record the value 'feet'
  }

  // Update all images with the new sources
  document.getElementById('img2-1').src = newSources2.img21;
  document.getElementById('img2-2').src = newSources2.img22;
  document.getElementById('img2-3').src = newSources2.img23;
  // Check if both hit and block are selected
  if (selectedHit !== '0' && selectedBlock !== '0') {
    recordSelection();
  }
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

const displayPopUp = function (message) {
  document.querySelector('.pop-up-msg').innerHTML = message;
};

//Recording gamer's hit and block + calls other functions
function recordSelection() {
  if (isProcessingMove) return; // Prevent multiple triggers
  isProcessingMove = true; // Set flag to true to indicate processing
  setTimeout(function () {
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
    isProcessingMove = false; // Reset flag after processing
  }, 1000); // 1000ms delay (1 second)
}
// Generate computer hit and block functions
function getRandomHit() {
  const RandomHits = ['HEAD', 'BODY', 'FEET'];
  const randomIndex = Math.floor(Math.random() * RandomHits.length);
  const computerHit = RandomHits[randomIndex];
  console.log('Computer Hit:', computerHit);
  return computerHit;
}

function getRandomBlock() {
  const RandomBlocks = ['HEAD', 'BODY', 'FEET'];
  const randomIndex = Math.floor(Math.random() * RandomBlocks.length);
  const computerBlock = RandomBlocks[randomIndex];
  console.log('Computer Block:', computerBlock);
  return computerBlock;
}

// Fight round function
function fightRound() {
  if (selectedHit === computerBlock) {
    displayMessage(`Your shot in the: ${selectedHit} is blocked.<br><br>`);
  } else {
    displayMessage(
      `Your shot in the: ${selectedHit} is NOT blocked. Enemy looses 💛<br><br>`
    );
    computerHealth--;
    updateHealthDisplay();
  }
  if (computerHit === selectedBlock) {
    addToMessage(`Enemies' shot in the: ${computerHit} is blocked.<br>`);
  } else {
    addToMessage(
      `Enemies' shot in the: ${computerHit} is NOT blocked. You loose ❤️<br>`
    );
    playerHealth--;
    updateHealthDisplay();
  }
  enfOfFight();
}

function updateHealthDisplay() {
  // Update player's health display
  let playerHearts = '❤️'.repeat(playerHealth);
  document.querySelector('.your-health1').textContent = playerHearts;

  // Update opponent's health display
  let opponentHearts = '💛'.repeat(computerHealth);
  document.querySelector('.opponent-health1').textContent = opponentHearts;
}

function enfOfFight() {
  if (computerHealth == 0 && playerHealth !== 0) {
    popup.style.display = 'block';
    displayPopUp(`Congratulations!<br>YOU WON!<br>👑👑👑`);
    winsInRaw++;
    document.querySelector('.score').textContent = winsInRaw;
    if (winsInRaw > highScore) {
      highScore = winsInRaw;
    }
    document.querySelector('.highscore').textContent = highScore;
  }
  if (computerHealth !== 0 && playerHealth == 0) {
    popup.style.display = 'block';
    displayPopUp(`YOU LOST<br>🤕`);
    winsInRaw = 0;
    document.querySelector('.score').textContent = winsInRaw;
  }
  if (computerHealth == 0 && playerHealth == 0) {
    popup.style.display = 'block';
    displayPopUp(`NOBODY wins<br>💔`);
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

const popup = document.getElementById('popup');
const popupBtn = document.getElementById('popupBtn');

// Function to handle the pop-up button click
popupBtn.addEventListener('click', function () {
  popup.style.display = 'none'; // Close the pop-up after clicking the button
  newFight();
});

function newFight() {
  selectedHit = '';
  selectedBlock = '';
  computerHit = '';
  computerBlock = '';
  playerHealth = 3;
  computerHealth = 3;
  updateHealthDisplay();
  displayMessage(`You're fighting with a new AI robot`);
}
