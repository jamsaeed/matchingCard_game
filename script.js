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
  "./images/image1.jpeg",
  "./images/image1.jpeg",
  "./images/image2.jpeg",
  "./images/image2.jpeg",
  "./images/image3.jpeg",
  "./images/image3.jpeg",
  "./images/image4.jpeg",
  "./images/image4.jpeg",
]

let cards = []
let flippedCards = []
for (let i = 0; i < memoryCard.length; i++) {
  const container = document.createElement("div")
  container.classList.add("cards")
  const img = document.createElement("img")
  img.setAttribute("src", `./images/backimage.jpeg`)
  // img.setAttribute("src", `${memoryCard[i]}`)
  gameContainer.appendChild(container)
  container.appendChild(img)
  cards.push(img)
  cards.sort(() => Math.random() - 0.5)
  //random .sort(() => Math.random() - 0.5)

  cards[i].addEventListener("click", () => {
    img.setAttribute("src", `${memoryCard[i]}`)
    console.log("clicked")
  })
  //if statement
  flippedCards.push(img)

  if (flippedCards.length === 2) {
    if (flippedCards[0].src === flippedCards[1].src) {
      //score += 10
    } else {
      flippedCards[0].setAttribute("src", "./images/backimage.jpeg")
      flippedCards[1].setAttribute("src", "./images/backimage.jpeg")
    }
    // reset for next turn make the array empty
  }
}

//  document.getElementById("play-button").reset()
// console.log(cards)
// console.log(gameContainer)
// console.log(cards.length)
