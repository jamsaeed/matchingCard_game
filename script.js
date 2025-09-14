// console.log("js workin")
// let match = null

// console.log(matchingCards)
let score = 0
let firstCard = null
let secondCard = null
let gameBoard = false
let gameContainer = document.querySelector(".game-container")
let timeDisplay = document.querySelector(".counting-time")
let scoreDisplay = document.querySelector(".cards-score")
// let matchingCards = document.querySelector(".cards") we don't need another variable for cards we have all the cards inside game container

console.log("gameContainer", gameContainer)
let memoryCard = ["Flower", "Flower", "Tulip", "Tulip"]
let block

for (let i = 0; i < 4; i++) {
  block = document.createElement("div")
  block.innerHTML = memoryCard[[Math.floor(Math.random() * 4)]] //.Math.floor(Math.random() * (i + 1)) //. Math.floor(Math.random())  maybe//memoryCard[1] //i //memoryCard[0] random.math
  console.log("block", block)
  gameContainer.appendChild(block)
}

// shuffle(memoryCard)
// console.log(memoryCard)

// matchingCards.addEventListener("click", () => {

// })

// xxx doesn't work
// for (let i = 0; i < matchingCards.length; i++ )xxxx still wrong

//   score+= 10
//   scoreDisplay.innerText = score
//Math.random(memoryCard) it is not the best way to write it this way it'll give me a random number not random strings or one of my arrays
