var randomeNumber1 = Math.floor(Math.random() * 6) + 1;
var randomeNumber2 = Math.floor(Math.random() * 6) + 1;

//console.log(randomeNumber);

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomeNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomeNumber2 + ".png");

if(randomeNumber1 < randomeNumber2){
    document.querySelector("h1").innerText = "Player 2 wins!"
} else if(randomeNumber1 > randomeNumber2) {
    document.querySelector("h1").innerText = "Player 1 wins!"
} else{
    document.querySelector("h1").innerText = "Draw!"
}