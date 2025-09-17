// console.log("js workin")
// let match = null

// console.log(matchingCards)

let score = 0
let timer = 60
let firstCard = null
let secondCard = null
let gameBoard = false
let rePlay = document.querySelector(".play-button")
console.log(rePlay)

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

//making a new function for shuffling cards.

let cards = []
let flippedCards = []
const shuffleCards = memoryCard.sort(() => Math.random() - 0.5)

for (let i = 0; i < shuffleCards.length; i++) {
  const container = document.createElement("div")
  container.classList.add("cards")
  const img = document.createElement("img")
  img.setAttribute("src", `./images/backimage.jpeg`)
  gameContainer.appendChild(container)
  container.appendChild(img)
  cards.push(img)

  cards[i].addEventListener("click", () => {
    img.setAttribute("src", `${shuffleCards[i]}`)

    console.log("clicked")
    flippedCards.push(img)

    if (flippedCards.length === 2) {
      console.log(flippedCards)
      if (flippedCards[0].src === flippedCards[1].src) {
        score += 10
        scoreDisplay.innerText = score
        flippedCards = []
      } else {
        const [card0, card1] = flippedCards
        setTimeout(() => {
          card0.setAttribute("src", "./images/backimage.jpeg")
          card1.setAttribute("src", "./images/backimage.jpeg")
        }, 500)
        flippedCards = []
      }
      console.log("flippedCards after", flippedCards)
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
//

const reLoad = () => {
  let button = document.querySelector(".play-button")
  if (button) {
    document.location.reload()
  }
}

rePlay.addEventListener("click", () => {
  reSet()
  score = 0
  scoreDisplay.innerText = score
})

// const playAgain = () => {
//   rePlay.addEventListener("click", () => {
//     reSet()
//     score = 0
//     scoreDisplay.innerText = score
//   })
//   //flip the cards back
//   document.querySelector(".play-button").forEach((card)=>){
//     cards.classList.remove("flip")
//   }
// const shuffleCards = memoryCard.sort(() => Math.random() - 0.5)

// }
// playAgain()

// cards.forEach(card =>{
// card.classList.remove("flipped" , "matched")
// })
// rePlay.addEventListener("click", () => {
//   reSet()
//   score = 0
//   scoreDisplay.innerText = score
//   // call function playAgain ()
// })
