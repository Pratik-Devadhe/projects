const text = document.getElementById("search");
const display = document.getElementById("displayitems");

function addelement(){

    if(text.value === ""){
        alert("Write something there in the task")
    }
    else{
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.innerText = "remove";
    
        li.innerHTML = text.value;
        li.appendChild(button);
        display.appendChild(li);
      
    }
    
    text.value = "";
    
}

display.addEventListener("click" , function(e) {

    if(e.target.tagName  === "LI"){

        e.target.classList.toggle("completed");
    }
    if(e.target.tagName === "BUTTON"){
        
        e.target.parentElement.remove();
    }
} , false)