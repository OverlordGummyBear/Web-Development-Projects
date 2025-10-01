var buttons = document.querySelectorAll(".drum");

buttons.forEach(button => {
    button.addEventListener('click', function(){
        
        this.style.color = "white";

    });
});


//var audio = new Audio("./sounds/tom-1.mp3");
//audio.play();