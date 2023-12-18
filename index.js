// // Generate a random number between 1 and 6 (inclusive)
// const randomNumber = Math.floor(Math.random() * 6) + 1;

// function imageLink(randomNumber) {
//   switch (randomNumber) {
//     case 1:
//       return "./images/dice1.png";
//     case 2:
//       return "./images/dice2.png";
//     case 3:
//       return "./images/dice3.png";
//     case 4:
//       return "./images/dice4.png";
//     case 5:
//       return "./images/dice5.png";
//     case 6:
//       return "./images/dice6.png";
//     default:
//       return "./images/dice1.png";
//   }
// }

// // Get the image element by its class name
// const imgElement = document.querySelector(".img1");

// // Set the 'src' attribute of the image element to the generated image link
// imgElement.setAttribute("src", imageLink(randomNumber));



var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
