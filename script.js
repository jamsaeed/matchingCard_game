// console.log("js workin")
// let match = null

// console.log(matchingCards)

let score = 0
let timer = 60
let firstCard = null
let secondCard = null
let gameBoard = false
const rePlay = document.querySelector(".play-button")
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
  // cards.sort(() => Math.random())
  // cards.sort(() => Math.random() - 0.5)
  //random .sort(() => Math.random() - 0.5)

  cards[i].addEventListener("click", () => {
    img.setAttribute("src", `${memoryCard[i]}`)
    console.log("clicked")
    flippedCards.push(img)

    if (flippedCards.length === 2) {
      console.log(flippedCards)
      if (flippedCards[0].src === flippedCards[1].src) {
        score += 10
        scoreDisplay.innerText = score
      } else {
        setTimeout(() => {
          flippedCards[0].setAttribute("src", "./images/backimage.jpeg")
          flippedCards[1].setAttribute("src", "./images/backimage.jpeg")
        }, 100)
      }
      console.log("flippedCards after", flippedCards)
      flippedCards = []
    }
  })
}

const downCount = () => {
  if (timer === 0) {
    // console.log("!")
  } else {
    timeDisplay.innerText = timer
    timer--
  }
}
let timeDown = setInterval(downCount, 1000)

const reSet = () => {
  clearInterval(timeDown)
  setInterval(downCount, 1000)
  timer = 60
}
rePlay.addEventListener("click", reSet)
// console.log("reset")
// console.log(cards)
// console.log(gameContainer)
// console.log(cards.length)
