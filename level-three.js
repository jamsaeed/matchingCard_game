let score = 0
let firstCard = null
let secondCard = null
let gameBoard = false
let gameContainer = document.querySelector(".game-container")
let timeDisplay = document.querySelector(".counting-time")
let scoreDisplay = document.querySelector(".cards-score")

console.log("gameContainer", gameContainer)

let memoryCard = [
  "./images/flower.jpeg",
  "./images/tulips.jpg",
  "./images/Lavender.jpg",
  "./images/cactus.jpeg",
  "./images/honeysuckle.jpg",
]
let cardVarr = [...memoryCard, ...memoryCard]
let block

for (let i = 0; i < 10; i++) {
  block = document.createElement("div")
  const img = document.createElement("img")
  img.setAttribute(
    "src",
    memoryCard[[Math.floor(Math.random() * memoryCard.length)]]
  )
  block.appendChild(img)

  console.log("block", block)
  gameContainer.appendChild(block)
}
// let memoryCard = [
//   "Flower",
//   "Flower",
//   "Tulip",
//   "Tulip",
//   "cactus",
//   "cactus",
//   "lavender",
//   "lavender",
//   "honeysuckle",
//   "honeysuckle",
// ]
// let block

// for (let i = 0; i < 10; i++) {
//   block = document.createElement("div")
//   block.innerHTML = memoryCard[[Math.floor(Math.random() * 10)]]
//   console.log("block", block)
//   gameContainer.appendChild(block)
// }
