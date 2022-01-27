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
 const img = document.createElement("img");
 img.src = "assets/images/01_Square.png";
 document.body.appendChild(img);

 const cardDeck = [
    "01_Square.png",
    "02_Hexagon.png",
    "03_Circle.png",
    "04_triangle.png",
];



}