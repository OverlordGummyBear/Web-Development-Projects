$(document).ready(function(){ //safe guard in case where you put the script in the head instead of the end of the body
    //code in here will only run when the document is ready (finished loading)

    //we do this ourselves by putting the script at the bottom of the body 
})

//$("h1").css("color", "black");

$("button"); //no difference between selecting one and selecting many elements with jQuery

$("button").css("color", "black"); //two properties set the value

console.log($("button").css("color")); //one property is getting the value

//don't change the styling directly in the js document
//instead, add or remove a class that is already in the stylesheet to an element
$("h1").addClass("big-title");

$("h1").removeClass("big-title");

//add multiple classes
$("h1").addClass("big-title margin-50") //space between titles

//whether element has class
console.log($("h1").hasClass("margin-50"));


//change text
$("h1").text("Bye");

//do the same, but with innerhtml
$("button").html("<em>Hey</em>"); //jQuery makes innerHTML shorter = html



//target attributes e.g. <img> or <a>
console.log($("img").attr("src"));

//set attribute
$("a").attr("href", "https://www.youtube.com");



//add eventlisteners
$("h1").click(function(){
    $("h1").css("color", "purple");
})

//select all buttons (needed to use for loop previously)
$("button").click(function(){
    $("h1").css("color", "blue");
});


//keystrokes in input box
$("input").keypress(function(event){
    $("h1").text(event.key);
});

//more flexible way to use event listeners
$("h1").on("mouseover", function(){ //the "on" keyword
    $("h1").css("color", "black");
});

//you can use jQuery to add html 
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>"); 
$("h1").prepend("<button>New</button>"); //ads the html just before the content of the selected element
$("h1").append("<button>New</button>"); //ads the html just after the content of the selected element

//remove elements
//$("button").remove();


//website animation
$("button").on("click", function(){
    //$("h1").toggle(); //use .hide() to hide an element and .show() to make it appear again
    $("h1").animate({opacity: 0.5}); //for the animate function, you can only add elements inthe {} that has a numeric value
    $("h1").slideUp().slideDown().animate({margin: 20}); //chain animations together
});

//you can also use fadeout() or fadein() - fadetoggle
//there is also slidedown or slideup - slidetoggle

