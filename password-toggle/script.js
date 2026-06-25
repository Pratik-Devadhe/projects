const clk = document.getElementById("search");
const text = document.getElementById("text");


clk.onclick = function() {

        if(text.type == "password"){
            text.type = "text";
            clk.src="view.png";
        }
        else{
            text.type = "password";
            clk.src="hide.png";
        }


}