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
  "./images/image2.jpeg",
  "./images/image2.jpeg",
  "./images/image3.jpg",
  "./images/image3.jpg",
  "./images/image4.jpg",
  "./images/image4.jpg",
]

let cards = []
for (let i = 0; i < memoryCard.length; i++) {
  const container = document.createElement("div")
  container.classList.add("cards")
  const img = document.createElement("img")
  img.setAttribute("src", `./images/backimage.jpeg`)
  // img.setAttribute("src", `${memoryCard[i]}`)
  gameContainer.appendChild(container)
  container.appendChild(img)
  cards.push(img)

  cards[i].addEventListener("click", () => {
    img.setAttribute("src", `${memoryCard[i]}`)
    console.log("clicked")
  })

  //if statement
}
console.log(cards)
console.log(gameContainer)
console.log(cards.length)
