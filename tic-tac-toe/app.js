let boxes = document.querySelectorAll(".one");
let button = document.querySelector("#reset-btn");
let turn = true; // player turn
let winner = document.querySelector(".winner");
let New = document.querySelector(".New");
let Newgame = document.querySelector(".Newgame");

let winpatterns = [ 
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5], 
    [6 , 7 , 8],
]

boxes.forEach((one) => {
    one.addEventListener("click" ,() => {
   

        if(turn){
        one.textContent = "O"; // player 0 turn
        turn = false;
        }
        else{
            one.textContent = "X"; // player x turn
            turn = true;
        }
        one.disabled = true;
        checkwinner();
    })

    
})

const DisableBtn = () => {
   
    for(let one of boxes) {
        one.disabled = true;
        
    }
}

const enableBtn = () => {
    turn = true;
    for(let one of boxes){

        one.disabled = false;
        one.textContent = "";
    
    }
    New.classList.add("hide");
    

}

const showwinner  = (pos) => {
    winner.textContent =    `Congratulations, the winner is ${pos}`;
    New.classList.remove("hide");

    DisableBtn();

} 

const checkwinner = () => {
    for( let pattern of winpatterns) {

       let pos1 = boxes[pattern[0]].textContent;
       let pos2 = boxes[pattern[1]].textContent;
       let pos3 = boxes[pattern[2]].textContent;

     if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            showwinner(pos1);
            

        }
     }

    }
} 


button.addEventListener("click" , enableBtn);
Newgame.addEventListener("click" , enableBtn);

