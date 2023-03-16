const monsterHealthBar = document.getElementById('monster-health');
const humanHealthBar = document.getElementById('human-health');
const monsterPercentage = document.getElementById('monster-percentage');
const humanPercentage = document.getElementById('human-percentage');
const attackButton = document.getElementById('attack-button');

const winnerText = document.querySelector('.winnermessage');
const winnerDiv = document.querySelector('#winner');
const restartBtn = document.querySelector('#restart');
const healButton = document.querySelector('#icon');


let monsterHealth = 100;
let humanHealth = 100;

function updateHealthBars() {
  monsterHealthBar.value = monsterHealth;
  humanHealthBar.value = humanHealth;
  monsterPercentage.textContent = `${monsterHealth}%`;
  humanPercentage.textContent = `${humanHealth}%`;
}


function handleAttack() {
  const monsterDamage = Math.floor(Math.random() * 10) + 1;
  const humanDamage = Math.floor(Math.random() * 10) + 1;
  monsterHealth -= monsterDamage;
  humanHealth -= humanDamage;
  
  if (monsterHealth <= 0) {
    monsterHealth = 0;
    monsterPercentage.textContent = '0%';
  
    winnerDiv.style.display = 'block';
    attackButton.style.display = 'none';
    winnerText.textContent = 'You Won The Game!';
    return;
 
  }
 
  if (humanHealth <= 0) {
    humanHealth = 0;
    humanPercentage.textContent = '0%';
    
    alert('Game over! You lost!');
    window.location.reload();
    return;
  }
  
  
  

  updateHealthBars();
}

// Function to heal the human when the heal button is clicked
function heal() {
  if (humanHealth <= 36) {
    humanHealth += humanHealth * 3; // Increase the human's lifespan by 10%
    updateHealthBars();
  }
}


attackButton.addEventListener('click', handleAttack);
healButton.addEventListener('click', heal);

setInterval(() => {
  if (humanHealth <=36) {
    healButton.style.display = 'inline';
  } else {
    healButton.style.display = 'none';
  }
},100); // Check every second if the button should be displayed or hidden

function Restart(){
 
  window.location.reload();
  winnerDiv.style.display = 'none';
  attackButton.style.display = 'block'; 
 

}
    