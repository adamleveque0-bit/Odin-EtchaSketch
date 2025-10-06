const pad = document.querySelector("main");
const padMax = 101;

let getPadSize = prompt(parseInt,"what size do you want your pad?");
//console.log(getPadSize);

// takes the users input to creat the appropiate amount of squares
function CreatePad(padsize){
    padsize = getPadSize;

    if(padsize >= padMax){
        alert(`your pad is too big please enter a pad size below ${padMax} `);
    }else{
        for(let i = 0; i < padsize * padsize / 2; i++){
            let newDiv = document.createElement("div");
            pad.appendChild(newDiv);
            
        }
        console.log(padsize);
    }
}

CreatePad(getPadSize);
let padDiv = document.querySelectorAll("main div");
console.log(padDiv);

for(let i = 0; i < padDiv.length; i++){
    padDiv[i].addEventListener("mouseover", ()=>{
        event.target.style.backgroundColor = "black";
    });
    
}

    

