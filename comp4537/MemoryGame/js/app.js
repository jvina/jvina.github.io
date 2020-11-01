const deck = document.querySelector(".deck");
let ul = document.getElementById("ul");
let scoreCount = document.getElementById("score");
let tilesGuess = document.getElementById("tilesGuess");
let level = document.getElementById("level");

let score = 0;
let compareScore = 0;
let countClick = 0;

// 3X3 matrix, 4 tiles
let level1 = [
    {id: 0, img: "blue.png"},
    {id: 1, img: "blue.png"},
    {id: 2, img: "blue.png"},
    {id: 3, img: "blue.png"},
    {id: 4, img: "red.png"},
    {id: 5, img: "red.png"},
    {id: 6, img: "red.png"},
    {id: 7, img: "red.png"},
    {id: 8, img: "red.png"}
]

init();

// 4X4 matrix, 5 tiles
let level2 = [
    {id: 0, img: "blue.png"},
    {id: 1, img: "blue.png"},
    {id: 2, img: "blue.png"},
    {id: 3, img: "blue.png"},
    {id: 4, img: "blue.png"},
    {id: 5, img: "red.png"},
    {id: 6, img: "red.png"},
    {id: 7, img: "red.png"},
    {id: 8, img: "red.png"},
    {id: 9, img: "red.png"},
    {id: 10, img: "red.png"},
    {id: 11, img: "red.png"},
    {id: 12, img: "red.png"},
    {id: 13, img: "red.png"},
    {id: 14, img: "red.png"},
    {id: 15, img: "red.png"},
]
// 5X5 matrix, 6 tiles
let level3 = [
    {id: 0, img: "blue.png"},
    {id: 1, img: "blue.png"},
    {id: 2, img: "blue.png"},
    {id: 3, img: "blue.png"},
    {id: 4, img: "blue.png"},
    {id: 5, img: "blue.png"},
    {id: 6, img: "red.png"},
    {id: 7, img: "red.png"},
    {id: 8, img: "red.png"},
    {id: 9, img: "red.png"},
    {id: 10, img: "red.png"},
    {id: 11, img: "red.png"},
    {id: 12, img: "red.png"},
    {id: 13, img: "red.png"},
    {id: 14, img: "red.png"},
    {id: 15, img: "red.png"},
    {id: 16, img: "red.png"},
    {id: 17, img: "red.png"},
    {id: 18, img: "red.png"},
    {id: 19, img: "red.png"},
    {id: 20, img: "red.png"},
    {id: 21, img: "red.png"},
    {id: 22, img: "red.png"},
    {id: 23, img: "red.png"},
    {id: 24, img: "red.png"},
]
// 6X6 matrix, 7 tiles
let level4 = [
    {id: 0, img: "blue.png"},
    {id: 1, img: "blue.png"},
    {id: 2, img: "blue.png"},
    {id: 3, img: "blue.png"},
    {id: 4, img: "blue.png"},
    {id: 5, img: "blue.png"},
    {id: 6, img: "blue.png"},
    {id: 7, img: "red.png"},
    {id: 8, img: "red.png"},
    {id: 9, img: "red.png"},
    {id: 10, img: "red.png"},
    {id: 11, img: "red.png"},
    {id: 12, img: "red.png"},
    {id: 13, img: "red.png"},
    {id: 14, img: "red.png"},
    {id: 15, img: "red.png"},
    {id: 16, img: "red.png"},
    {id: 17, img: "red.png"},
    {id: 18, img: "red.png"},
    {id: 19, img: "red.png"},
    {id: 20, img: "red.png"},
    {id: 21, img: "red.png"},
    {id: 22, img: "red.png"},
    {id: 23, img: "red.png"},
    {id: 24, img: "red.png"},
    {id: 25, img: "red.png"},
    {id: 26, img: "red.png"},
    {id: 27, img: "red.png"},
    {id: 28, img: "red.png"},
    {id: 29, img: "red.png"},
    {id: 30, img: "red.png"},
    {id: 31, img: "red.png"},
    {id: 32, img: "red.png"},
    {id: 33, img: "red.png"},
    {id: 34, img: "red.png"},
    {id: 35, img: "red.png"},
]


function init() {
    document.getElementById("tilesGuess").innerHTML = "4"
    generateCards(level1);
}

function generateCards(cards) {
    let audio = new Audio('./audio/sound.mp3');
    audio.play();

    if (cards.length == 9) {
        level.innerHTML = "1/4";
        ul.classList.remove("level2");
        ul.classList.add("deck");
        ul.classList.remove("rotate");
        ul.classList.remove("rotateOther");
    }
    if (cards.length == 16) {
        level.innerHTML = "2/4";
        ul.classList.remove("level3")
        ul.classList.add("level2");
        ul.classList.remove("rotate");
        ul.classList.remove("rotateOther");
    } 
    if (cards.length == 25) {
        level.innerHTML = "3/4";
        ul.classList.remove("level4")
        ul.classList.add("level3");
        ul.classList.remove("rotate");
        ul.classList.remove("rotateOther");
    }   
    if (cards.length == 36) {
        level.innerHTML = "4/4";
        ul.classList.remove("level3")
        ul.classList.add("level4");
        ul.classList.remove("rotate");
        ul.classList.remove("rotateOther");
    }
    shuffle(cards);

    // Loop through each card and generate its HTML
    const fragment = document.createDocumentFragment();

    let number = Math.floor(Math.random() * 2) + 1;

    for (card in cards) { 
        const randomCard = document.createElement("li");
        randomCard.innerHTML = `<img src="./images/${cards[card].img}" id="${cards[card].id}">`;
        randomCard.classList.add("card");
        setTimeout(function(){ 
          randomCard.classList.toggle("hide");
          if (number == 1) {
            deck.classList.add("rotate");
          } else {
            deck.classList.add("rotateOther");
          }
        }, 2000);
        fragment.appendChild(randomCard);
      }
      deck.appendChild(fragment);
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;     

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;

    }

    return array;
  }

  function checkScore() {
    if (tilesGuess.innerHTML == "4") {
        if (countClick == 4 && countClick == compareScore) {
            setTimeout(function() {
                alert("You win. You are moving on to the next level.");
                countClick = 0;
                compareScore = 0;
                ul.innerHTML = "";
                tilesGuess.innerHTML = "5";
                generateCards(level2);
            })
        } else if (countClick == 4 && countClick != compareScore) {
            setTimeout(function() {
                alert("You lost. Sending you back to the previous level.");
                countClick = 0;
                compareScore = 0;
                ul.innerHTML = "";
                generateCards(level1);
            })
        } else {
            return
        }
    }
    if (tilesGuess.innerHTML == "5") {
        if (countClick == 5 && countClick == compareScore) {
            setTimeout(function() {
                alert("You win. You are moving on to the next level.");
                countClick = 0;
                compareScore = 0;
                ul.innerHTML = "";
                tilesGuess.innerHTML = "6";
                generateCards(level3);
            })
        } else if (countClick == 5 && countClick != compareScore) {
            setTimeout(function() {
                alert("You lost. Sending you back to the previous level.");
                countClick = 0;
                compareScore = 0;
                ul.innerHTML = "";
                tilesGuess.innerHTML = "4";
                generateCards(level1);
            })
        } else {
            return
        }
    }
    if (tilesGuess.innerHTML == "6") {
        if (countClick == 6 && countClick == compareScore) {
            setTimeout(function() {
                alert("You win. You are moving on to the next level.");
                countClick = 0;
                compareScore = 0;
                ul.innerHTML = "";
                tilesGuess.innerHTML = "7";
                generateCards(level4);
            })
        } else if (countClick == 6 && countClick != compareScore) {
            setTimeout(function() {
                alert("You lost. Sending you back to the previous level.");
                countClick = 0;
                compareScore = 0;
                ul.innerHTML = "";
                tilesGuess.innerHTML = "5";
                generateCards(level2);
            })
        } else {
            return
        }
    }
    if (tilesGuess.innerHTML == "7") {
        if (countClick == 7 && countClick == compareScore) {
            setTimeout(function() {
                alert("You win. Try this level again to score more points.");
                countClick = 0;
                compareScore = 0;
                ul.innerHTML = "";
                document.getElementById("tilesGuess").innerHTML = "7";
                generateCards(level4);
            })
        } else if (countClick == 7 && countClick != compareScore) {
            setTimeout(function() {
                alert("You lost. Sending you back to the previous level.");
                countClick = 0;
                compareScore = 0;
                ul.innerHTML = "";
                tilesGuess.innerHTML = "6";
                generateCards(level3);
            })
        } else {
            return
        }
    }
  }

  function displayCardSymbol(event) {
      const cardClicked = event.target;
      if (cardClicked.tagName === "LI") {
          if (cardClicked.tagName === "IMG") {
                return;
          }
          cardClicked.classList.add("show", "open");

          if (cardClicked.children[0].src.slice(125) == "images/blue.png") {
            cardClicked.classList.add("match");
            cardClicked.classList.remove("show", "open");
            compareScore += 1;
            countClick += 1;
            score += 1;
            scoreCount.innerHTML = score;
            
            if (score <= 0) {
                setTimeout(function() {
                    endGame();
                }, 1000)
            } else {
                checkScore();
            }
          } 
          else {
            countClick += 1;
            score -= 1;
            scoreCount.innerHTML = score;
            
            if (score <= 0) {
                setTimeout(function() {
                    endGame();
                }, 1000)
            } else {
                checkScore();
            }
          }
      }
    }
    function endGame() {
        localStorage.setItem("userScore", score);
        alert("Your score is 0 or negative. Game Over.");
        location.replace("./summary.html");
    }

    function terminateGame() {
        localStorage.setItem("userScore", score);
        location.replace("./summary.html");
    }
  
  deck.addEventListener("click", displayCardSymbol);

