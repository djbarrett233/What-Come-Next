// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    runGame("addition");

});

/**
   * Array with image source links to be retrieved and inserted into the HTML when cards are created
   */

const img = document.querySelectorAll("img"); 
img[0].src = "assets/images/01_Square.png"; // image 1
img[1].src = "assets/images/02_Hexagon.png"; // image 2
img[2].src = "assets/images/03_Circle.png"; // image 3
img[3].src = "assets/images/04_triangle.png"; // image 4
document.body.appendChild(img);

const img = document.createElement("img");
img.src = "https://picsum.photos/200/301";
document.body.appendChild(img);