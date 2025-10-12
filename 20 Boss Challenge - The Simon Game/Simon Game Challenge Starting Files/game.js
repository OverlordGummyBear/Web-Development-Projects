var buttonColours = ["red", "blue", "green", "yellow"]; //color options
var gamePattern = []; //game pattern
var userClickedPattern = []; //user clicke pattern
var isStarted = false; //keep track of whether the game has started or not
var level = 0;

//Has game started?
$(document).keypress(function(){
    if(!isStarted){
        $("h1").text("Level" + level);
        nextSequence();
        isStarted = true;
    }
});

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id"); //save the id of the button that was clicked on
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    
    checkAnswer(userClickedPattern.length-1);
});

function nextSequence(){
    level++;
    $("h1").text("Level " + level);

    userClickedPattern = [];

    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber]; //random number chooses the next color
    gamePattern.push(randomChosenColour); //add the new color to the sequence

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){ //execute this method after 100 milliseconds
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else{
        $("body").addClass("game-over");

        setTimeout(function(){ //execute this method after 100 milliseconds
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    isStarted = false;
}

