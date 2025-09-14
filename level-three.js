let score = 0
let firstCard = null
let secondCard = null
let gameBoard = false
let gameContainer = document.querySelector(".game-container")
let timeDisplay = document.querySelector(".counting-time")
let scoreDisplay = document.querySelector(".cards-score")

console.log("gameContainer", gameContainer)
let memoryCard = [
  "Flower",
  "Flower",
  "Tulip",
  "Tulip",
  "cactus",
  "cactus",
  "lavender",
  "lavender",
  "honeysuckle",
  "honeysuckle",
]
let block

for (let i = 0; i < 10; i++) {
  block = document.createElement("div")
  block.innerHTML = memoryCard[[Math.floor(Math.random() * 10)]]
  console.log("block", block)
  gameContainer.appendChild(block)
}
