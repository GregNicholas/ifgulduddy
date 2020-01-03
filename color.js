colorGame.js
Type
Javascript
Size
4 KB (3,707 bytes)
Storage used
4 KB (3,707 bytes)
Location
Colorpicker
Owner
me
Modified
3:48 PM by me
Opened
7:59 PM by me
Created
3:48 PM with Google Drive Web
Add a description
Viewers can download
let colors = setColors(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let easyMode = document.getElementById("easyMode");
let mediumMode = document.getElementById("mediumMode");
let hardMode = document.getElementById("hardMode");



easyMode.addEventListener("click", function(){
    mode = 3;
    easyMode.classList.add("selected");
    mediumMode.classList.remove("selected");
    hardMode.classList.remove("selected");
    resetGame(mode);
});

mediumMode.addEventListener("click", function(){
    mode = 6;
    mediumMode.classList.add("selected");
    easyMode.classList.remove("selected");
    hardMode.classList.remove("selected");
    resetGame(mode);
});

    hardMode.addEventListener("click", function(){
    mode = 9;
    mediumMode.classList.remove("selected");
    easyMode.classList.remove("selected");
    hardMode.classList.add("selected");
    resetGame(mode);
});

resetButton.addEventListener("click", function(){
    resetGame(mode);
})

function resetGame(mode){
        //generate new colors
        colors = setColors(mode);
        //pick new random collor from array
        pickedColor = pickColor();
        //change colorDisplay to match picked color
        colorDisplay.textContent = pickedColor;
        //change colors of squares
        for(var i=0; i<squares.length; i++){
            //add initial colors to squares
            if(i<mode){
                squares[i].style.backgroundColor = colors[i];
            }else{
                squares[i].style.backgroundColor = "#2e2e2e";
            }
        }
        //reset H1 display
        h1.style.backgroundColor = "#2e2e2e";
        //reset button
        resetButton.textContent = "New Colors";
        //message
        messageDisplay.textContent = "Click a color"
}

//set initial colorDisplay
colorDisplay.textContent = pickedColor;
messageDisplay.textContent = "Click a color"

for(var i=0; i<squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        let clicked = this.style.backgroundColor;
        //compare color to pickedColor
        if(clicked===pickedColor){
            messageDisplay.textContent = "CORRECT!";
            changeColors(clicked);
            resetButton.textContent = "Play Again";
        }else if (this.style.backgroundColor === h1.style.backgroundColor){
            messageDisplay.textContent = "Click a color!";
        }
        else {
            this.style.backgroundColor = "#2e2e2e";
            messageDisplay.textContent = "Try again!";
        }
    });
}

function changeColors(color){
    //loop through all squares
    //change colors
    for(let i=0; i<colors.length; i++){
        squares[i].style.backgroundColor=color;
        h1.style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function setColors(num){
    //make array
    let arr = [];
    //add random colors to array
    for(let i = 0; i<num; i++){
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    // red, green, blue from 0-255
    let r = (Math.floor(Math.random()*256));
    let g = (Math.floor(Math.random()*256));
    let b = (Math.floor(Math.random()*256));
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
