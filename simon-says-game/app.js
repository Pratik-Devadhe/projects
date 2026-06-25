let generatedSequence = [];
let ans = [];
let colors = ["red" , "blue" , "green" , "yellow"];
let startgame = false;
let level = 0;
let h2 = document.querySelector("h3");

document.addEventListener("keypress" , function () {

if(startgame == false){
    startgame = true;
    level = 0;
  
    levelup();
    }
    
});

function blink(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    } , 250);
}

function levelup(){
    level++;
    h2.innerHTML = `level ${level}`;
    // randonbutton 
    let randidx = Math.floor(Math.random() * 4);
    let randcolor = colors[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    generatedSequence.push(randbtn.getAttribute("id"));
    blink(randbtn);
}

function checkAns(){
    let currIndex = ans.length - 1;
    
    if(generatedSequence[currIndex] != ans[currIndex]){

        h2.innerHTML = `game over! your score is ${level} press any key to start`;
        generatedSequence = [];
        ans = [];
      
         document.body.style.backgroundColor = "red";
        setTimeout(function() {
           document.body.style.backgroundColor = "white";
        } , 250);

        
          return false;
    }
    return true;
    
}



function pressbtn(){
    let btn = this;
    let userpress = btn.getAttribute("id");
    
    ans.push(userpress);
    console.log(ans);
    console.log(generatedSequence);
    if(checkAns() == true){
        levelup();
    }
  
   
    
}

let btns =  document.querySelectorAll(".btn");

for(let btn of btns){
    btn.addEventListener("click" , pressbtn);    
}