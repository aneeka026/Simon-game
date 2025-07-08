let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purple", "green"];
let started = false; 
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    //step 1--> if  any key press game start
    if(started == false){ 
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(`Random index : ${randIdx}`);
    console.log("Random Color : ",randColor);
    console.log("Random btn :",randBtn);
    
    btnFlash(randBtn);
    //random btn choose
}
