const pad = document.querySelector("main");
const padMax = 600;

let getPadSize = prompt(parseInt,"what size do you want your pad?");
//console.log(getPadSize);

// takes the users input to creat the appropiate amount of squares
function CreatePad(padsize){
    padsize = getPadSize;

    if(padsize >= padMax){
        alert(`your pad is too big please enter a pad size below ${padMax} `);
    }else{
        for(let i = 0; i < padsize * 2; i++){
            let newDiv = document.createElement("div");
            pad.appendChild(newDiv);
            
        }
        console.log(padsize);
    }
}

CreatePad(getPadSize);
let padDiv = document.querySelectorAll("main div");

    

