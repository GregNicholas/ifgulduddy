let colors = setColors(6);
let mode = 6;
let pickedColor = pickColor();
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let modeBtn = document.querySelectorAll(".modeBtn");

init();

function init(){
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
}


for(let i=0; i<modeBtn.length; i++){
modeBtn[i].addEventListener("click", function(){
    for(let j=0; j<modeBtn.length; j++){
        modeBtn[j].classList.remove("selected");
    }
    this.classList.add("selected");
    this.textContent === "Easy" ? mode=3 : (this.textContent === "Hard" ? mode=6 : mode=9);
    resetGame(mode);
});
}

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
        h1.style.backgroundColor = "steelblue";
        //reset button
        resetButton.textContent = "New Colors";
        //message
        messageDisplay.textContent = "Click a color"
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
