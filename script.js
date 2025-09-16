// console.log("js workin")
// let match = null

// console.log(matchingCards)

let score = 0
let timer = 0
let firstCard = null
let secondCard = null
let gameBoard = false
const rePlay = document.getElementById("play-button")
let gameContainer = document.querySelector(".game-container")
let timeDisplay = document.querySelector(".counting-time")
let scoreDisplay = document.querySelector(".cards-score")

//let firstCard , secondCard=
// let matchingCards = document.querySelector(".cards") we don't need another variable for cards we have all the cards inside game container

//under this works uncomment
// console.log("gameContainer", gameContainer)

// const gameCards = () => {
const memoryCard = [
  "./images/image0.jpeg",
  "./images/image0.jpeg",
  "./images/image1.jpg",
  "./images/image1.jpg",
  "./images/backimage.jpeg",
]
let cardVarr = [...memoryCard, ...memoryCard]
//   console.log(cardVarr)

let cards
for (let i = 0; i < 4; i++) {
  cards = document.createElement("div")
  const img = document.createElement("img")
  cards.innerHTML = `<img src="./images/backimage.jpeg">`
  img.setAttribute(
    "src",
    memoryCard[[Math.floor(Math.random() * memoryCard.length)]]
  )
  //hidden() like this?

  //cards.style.display ="hide()"   ???
  cards.appendChild(img)

  console.log("cards", cards)
  gameContainer.appendChild(cards)
}

cards.addEventListener("click", () => {
  cards.document.querySelector(`./images/img${i}.jpeg`) //="block"
})

//use hide() and block()

// block.addEventListener("click", () => {
//   flipCard(block)
// })
