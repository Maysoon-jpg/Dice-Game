
const images = {
  dice1: 'Images/dice-1.png',
  dice2: 'Images/dice-2.png',
  dice3: 'Images/dice-3.png',
  dice4: 'Images/dice-4.png',
  dice5: 'Images/dice-5.png',
  dice6: 'Images/dice-6.png'

}

function pickDice() {
  const randomNumber = Math.random()
  let chosenDiceNumber = ''
  console.log(randomNumber)
  if (randomNumber < 1 / 6) {
    console.log(1)
    document.querySelector('.dice-computer').src = images.dice1
    chosenDiceNumber = 1
  }
  else if (randomNumber < 2 / 6) {
    console.log(2)
    document.querySelector('.dice-computer').src = images.dice2
    chosenDiceNumber = 2
  }
  else if (randomNumber < 3 / 6) {
    console.log(3)
    document.querySelector('.dice-computer').src = images.dice3
    chosenDiceNumber = 3
  }
  else if (randomNumber < 4 / 6) {
    console.log(4)
    document.querySelector('.dice-computer').src = images.dice4
    chosenDiceNumber = 4
  }
  else if (randomNumber < 5 / 6) {
    console.log(5)
    document.querySelector('.dice-computer').src = images.dice5
    chosenDiceNumber = 5
  }
  else {
    console.log(6)
    document.querySelector('.dice-computer').src = images.dice6
    chosenDiceNumber = 6
  }

  return chosenDiceNumber;

}

function pickPlayerDice() {
  const randomNumber = Math.random()
  let chosenDiceNumber = ''
  console.log(randomNumber)
  if (randomNumber < 1 / 6) {
    console.log(1)
    document.querySelector('.dice-player').src = images.dice1
    playerDiceNumber = 1
  }
  else if (randomNumber < 2 / 6) {
    console.log(2)
    document.querySelector('.dice-player').src = images.dice2
    playerDiceNumber = 2
  }
  else if (randomNumber < 3 / 6) {
    console.log(3)
    document.querySelector('.dice-player').src = images.dice3
    playerDiceNumber = 3
  }
  else if (randomNumber < 4 / 6) {
    console.log(4)
    document.querySelector('.dice-player').src = images.dice4
    playerDiceNumber = 4
  }
  else if (randomNumber < 5 / 6) {
    console.log(5)
    document.querySelector('.dice-player').src = images.dice5
    playerDiceNumber = 5
  }
  else {
    console.log(6)
    document.querySelector('.dice-player').src = images.dice6
    playerDiceNumber = 6
  }

  return playerDiceNumber;

}

let scoreBoard = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

document.querySelector('.score-board-button').innerHTML = `Score = wins: ${scoreBoard.wins} losses: ${scoreBoard.losses} ties: ${scoreBoard.ties}`



function calculateWinStatus() {
  let playerMove = pickPlayerDice()
  let computerMove = pickDice()
  let status = ''
  console.log(typeof playerMove)

  const statusElement = document.querySelector('.win-status-button')

  // Remove any old color classes
  statusElement.classList.remove('button-colour-green', 'button-colour-grey', 'button-colour-red')

  if (playerMove > computerMove) {
    console.log('you won')
    status = 'you won'
    scoreBoard.wins += 1
    statusElement.classList.add('button-colour-green')
  }
  else if (playerMove === computerMove) {
    console.log('tie')
    status = 'tied'
    scoreBoard.ties += 1
    statusElement.classList.add('button-colour-grey')
  }
  else if (computerMove > playerMove) {
    console.log('you lose')
    status = 'you lose'
    scoreBoard.losses += 1
    statusElement.classList.add('button-colour-red')
  }
  else {
    console.log('there has been an error')
  }



  document.querySelector('.win-status-button').innerHTML = status

  document.querySelector('.score-board-button').innerHTML = `Score = wins: ${scoreBoard.wins} losses: ${scoreBoard.losses} ties: ${scoreBoard.ties}`




  localStorage.setItem('score', JSON.stringify(scoreBoard));
  console.log(localStorage.score)
}