// $ is shorthand for jquery -> it can also be written explicitly as jQuery 
// tag name, class, or id in ("") -> can target multiple objects this way
// on click function -> .click
// function () 
// $ -> target  selector ("") -> toggle class -> specific target

$(".dark-btn").click(
    function(){
        // the toggle classes are targeting the class .dark
        $(".box").toggleClass("dark");
        $("body").toggleClass("dark");
    }
);

// glow script

$(".glow-btn").click(
    function(){
        $(".box").toggleClass("glow");
    }
);


// spin script

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }
);

// reveal script
$(".reveal-btn").click(
    function(){
        $(".character").css("opacity", "1");
        $(".reveal-btn").hide();
    }
);

// draggable script
$( function() {
    // targeting class .draggable -> can also target ids _ would be #draggable
    // the .draggable method is from jquey ui
    // the { snap: true} is for the snapping feature -> not needed for the draggbale function -> () can be left empty
    $( ".draggable" ).draggable({ snap: true });
} );
