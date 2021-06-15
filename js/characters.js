// Get the modal
var info = document.getElementById("info");

// Get the button that opens the modal
var info_btn = document.getElementById("info_btn");

// Get the <span> element that closes the modal
var info_close = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
info_btn.onclick = function() {
  info.style.visibility = "visible";
  info.style.opacity = "1";
}

// When the user clicks on <span> (x), close the modal
info_close.onclick = function() {
  info.style.visibility = "hidden";
  info.style.opacity = "0";
}

//this var is to make it so that you can't drop more than 1 character in the dropzone_volvelle/have the arrow class at the same time
var candrop = true;

/*
{
var degrees=0;

$("#arrow").click(function(){
     degrees+= parseInt(Math.random() * 2520 + 1260);

    miliseconds =  parseInt(Math.random() * 1000 + 5000);;
    $(this).css({
        "-webkit-transform" : "rotate("+ degrees +"deg)",
        "-webkit-transition-duration" : miliseconds + "ms",
       "-moz-transform" : "rotate("+ degrees +"deg)",
        "-moz-transition-duration" : miliseconds + "ms",
      "transform" : "rotate("+ degrees +"deg)",
        "transition-duration" : miliseconds + "ms"
    });
});

}  

*/

function drag(ev) {
    //makes it so that drop(ev) only works if either the character being dragged has .arrow (meaning it's being dragged away from the volvelle) or if there is no character currently on the volvelle
    if ($(event.target).hasClass("arrow") || candrop == true) {
        ev.dataTransfer.setData("text", ev.target.id);
     }
    
    console.log(candrop);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    
    //makes it so that you can only drop characters onto their corresponding original dropzones OR onto the volvelle dropzone
   if (($(ev.currentTarget).attr('id') == "dropzone_volvelle") || ($(ev.currentTarget).attr('id') == "dropzone_sly" && $("#" + data).hasClass("sly")) || ($(ev.currentTarget).attr('id') == "dropzone_petruchio" && $("#" + data).hasClass("petruchio")) || ($(ev.currentTarget).attr('id') == "dropzone_kate" && $("#" + data).hasClass("kate"))) {
        ev.currentTarget.appendChild(document.getElementById(data));

        //remove .arrow from dragged character once it is dropped (meaning, back in its original dropzone)
        if ($("#" + data).hasClass("arrow")) {
            $("#" + data).removeClass('arrow');
            candrop = !candrop;

            //reinstate dotted border into dropzone once character is returned (must be inside this if statement so that dropzone_volvelle doesn't get a border when character is dropped in it)
            //(Instead of using "event.target" it should be "event.currentTarget" to get the real parent element (dropzone) where the event is triggered.)
            $(ev.currentTarget).css("border","1px dotted #c73e14");
            
            //make info button visible again
            info_btn.style.opacity = "1";
            
            //revert wheels' brightness to default
            $(".kate_prop, .kate_parlance, .sly_prop, .sly_parlance, .petruchio_prop, .petruchio_parlance").css({
                "filter" : "brightness(1)",
                "transition" : "0"
            });
        }

        //hide character fortunes once character is returned to original dropzone
        if ($(ev.currentTarget).attr('id') == "dropzone_kate") {
            $("#fortunes_kate .fortune_card div").css({
                "opacity" : "0",
                "transition" : ".5s"
            });
        }

        if ($(ev.currentTarget).attr('id') == "dropzone_sly") {
            $("#fortunes_sly .fortune_card div").css({
                "opacity" : "0",
                "transition" : ".5s"
            });
        }

        if ($(ev.currentTarget).attr('id') == "dropzone_petruchio") {
            $("#fortunes_petruchio .fortune_card div").css({
                "opacity" : "0",
                "transition" : ".5s"
            });
        }

        console.log(data);
        console.log($(ev.currentTarget).attr('id'));
       }
}

function arrow(ev) {
    candrop = !candrop;
    var data = ev.dataTransfer.getData("text");
    $("#" + data).addClass('arrow');
    
    //make info button and info pop-up disappear
      info_btn.style.opacity = "0";
      info.style.visibility = "hidden";
      info.style.opacity = "0";

}

//To make each spin end with one fortune vertical on top
var volvelle_spin_kate_prop = 22.5;
var volvelle_spin_kate_parlance = 22.5;
var volvelle_spin_sly_prop = 22.5;
var volvelle_spin_sly_parlance = 22.5;
var volvelle_spin_petruchio_prop = 22.5;
var volvelle_spin_petruchio_parlance = 22.5;

var volvelle_spin_character = 0;

//Spin the character needle to randomize fortunes
/* Explanation as to why the onclick function must be nested inside a parent, such as dropzone_volvelle (though $("body") would have worked as well)
    https://www.codewall.co.uk/jquery-on-click-function-not-working-after-appending-html/
    "JQuery OnClick Method is bound to an element or selector on page ready/load. Therefore if that element you want to click isn’t there at the time of page ready, the binding can’t happen. JQuery sits there and says why have you wrote this code with no HTML for me to attach to!?

    "Similarly, if the element was there on page load, it will work fine, but if you then take that element away and re-append it, you essentially delete the bound OnClick Event and it won’t re-bind.

    "The fix is easy enough, simply bind the OnClick event to the parent of the elements you want to be able to click on. That way, if the element you want to click on is removed and re-appended, the handler will still be there listening as the parent was never removed."
*/

$("#dropzone_volvelle").on("click", ".arrow", function(){
    
    //set the increments/degrees by which the circles spin (since each circle has 8 sections, that's 360/8=45)
    var volvelle_fractions = ["45", "90", "135", "180", "225", "270", "315", "360"];

    var random1 = Math.floor(Math.random() * volvelle_fractions.length);
    var random2 = Math.floor(Math.random() * volvelle_fractions.length);
    var random3 = Math.floor(Math.random() * volvelle_fractions.length);
    var random4 = Math.floor(Math.random() * volvelle_fractions.length);
    var random5 = Math.floor(Math.random() * volvelle_fractions.length);
    var random6 = Math.floor(Math.random() * volvelle_fractions.length);
    
    volvelle_spin_kate_prop += parseInt(volvelle_fractions[random1]);
    volvelle_spin_kate_parlance += parseInt(volvelle_fractions[random2]);
    volvelle_spin_sly_prop += parseInt(volvelle_fractions[random3]);
    volvelle_spin_sly_parlance += parseInt(volvelle_fractions[random4]);
    volvelle_spin_petruchio_prop += parseInt(volvelle_fractions[random5]);
    volvelle_spin_petruchio_parlance += parseInt(volvelle_fractions[random6]);
    
    
    volvelle_spin_character += 1080;

    miliseconds =  parseInt(Math.random() * 1000 + 1500);
    
    //spin the volvelle circles
    $(".kate_prop").css({
        "-webkit-transform" : "rotate("+ volvelle_spin_kate_prop +"deg)",
        "-webkit-transition-duration" : miliseconds + "ms",
       "-moz-transform" : "rotate("+ volvelle_spin_kate_prop +"deg)",
        "-moz-transition-duration" : miliseconds + "ms",
      "transform" : "rotate("+ volvelle_spin_kate_prop +"deg)",
        "transition-duration" : miliseconds + "ms"
    });
    
    $(".kate_parlance").css({
        "-webkit-transform" : "rotate("+ volvelle_spin_kate_parlance +"deg)",
        "-webkit-transition-duration" : miliseconds + "ms",
       "-moz-transform" : "rotate("+ volvelle_spin_kate_parlance +"deg)",
        "-moz-transition-duration" : miliseconds + "ms",
      "transform" : "rotate("+ volvelle_spin_kate_parlance +"deg)",
        "transition-duration" : miliseconds + "ms"
    });
    
    $(".sly_prop").css({
        "-webkit-transform" : "rotate("+ volvelle_spin_sly_prop +"deg)",
        "-webkit-transition-duration" : miliseconds + "ms",
       "-moz-transform" : "rotate("+ volvelle_spin_sly_prop +"deg)",
        "-moz-transition-duration" : miliseconds + "ms",
      "transform" : "rotate("+ volvelle_spin_sly_prop +"deg)",
        "transition-duration" : miliseconds + "ms"
    });
    
    $(".sly_parlance").css({
        "-webkit-transform" : "rotate("+ volvelle_spin_sly_parlance +"deg)",
        "-webkit-transition-duration" : miliseconds + "ms",
       "-moz-transform" : "rotate("+ volvelle_spin_sly_parlance +"deg)",
        "-moz-transition-duration" : miliseconds + "ms",
      "transform" : "rotate("+ volvelle_spin_sly_parlance +"deg)",
        "transition-duration" : miliseconds + "ms"
    });
    
    $(".petruchio_prop").css({
        "-webkit-transform" : "rotate("+ volvelle_spin_petruchio_prop +"deg)",
        "-webkit-transition-duration" : miliseconds + "ms",
       "-moz-transform" : "rotate("+ volvelle_spin_petruchio_prop +"deg)",
        "-moz-transition-duration" : miliseconds + "ms",
      "transform" : "rotate("+ volvelle_spin_petruchio_prop +"deg)",
        "transition-duration" : miliseconds + "ms"
    });
    
    $(".petruchio_parlance").css({
        "-webkit-transform" : "rotate("+ volvelle_spin_petruchio_parlance +"deg)",
        "-webkit-transition-duration" : miliseconds + "ms",
       "-moz-transform" : "rotate("+ volvelle_spin_petruchio_parlance +"deg)",
        "-moz-transition-duration" : miliseconds + "ms",
      "transform" : "rotate("+ volvelle_spin_petruchio_parlance +"deg)",
        "transition-duration" : miliseconds + "ms"
    });
    
    //spin the character needle
    $(this).css({
        "-webkit-transform" : "rotate("+ volvelle_spin_character +"deg)",
        "-webkit-transition-duration" : miliseconds + "ms",
       "-moz-transform" : "rotate("+ volvelle_spin_character +"deg)",
        "-moz-transition-duration" : miliseconds + "ms",
      "transform" : "rotate("+ volvelle_spin_character +"deg)",
        "transition-duration" : miliseconds + "ms"
    });
    
    //this is to reset/keep the degrees spun by each circle always under 360, otherwise the degrees will keep increasing with each spin ad infinitum, so that the ensuing calculations to determine which prop has been landed on will have to become much more complicated
    if (volvelle_spin_kate_prop >= 22.5 + 360) {
        volvelle_spin_kate_prop -= 360;
    }
    if (volvelle_spin_kate_parlance >= 22.5 + 360) {
        volvelle_spin_kate_parlance -= 360;
    }
    if (volvelle_spin_sly_prop >= 22.5 + 360) {
        volvelle_spin_sly_prop -= 360;
    }
    if (volvelle_spin_sly_parlance >= 22.5 + 360) {
        volvelle_spin_sly_parlance -= 360;
    }
    if (volvelle_spin_petruchio_prop >= 22.5 + 360) {
        volvelle_spin_petruchio_prop -= 360;
    }
    if (volvelle_spin_petruchio_parlance >= 22.5 + 360) {
        volvelle_spin_petruchio_parlance -= 360;
    }
    
    
    if($("#drag_kate").hasClass("arrow")){
        
        //remove dotted border from original dropzone
        $("#dropzone_kate").css("border","none");
        
        //flip the corresponding fortunes card
        $("#fortunes_kate .fortune_card").toggleClass('flipped');

        //make corresponding fortunes visible
        $("#fortunes_kate .fortune_card div").css({
            "opacity" : "1",
            "transition" : miliseconds + "ms"
        });
        
        //make relevant wheels glow, dim irrelevant wheels 
        $(".kate_prop, .kate_parlance").css({
            "filter" : "brightness(1.2)",
            "transition" : "0"
        });
        
        $(".sly_prop, .sly_parlance, .petruchio_prop, .petruchio_parlance").css({
            "filter" : "brightness(.8)",
            "transition" : "0"
        });
    
        //KATE PROP//
        if (volvelle_spin_kate_prop - 22.5 == 0 || volvelle_spin_kate_prop - 22.5 == 360){
            //if (volvelle_spin_kate_prop - 22.5) is 0 or 360; i.e. if the circle has spun by 0 or 360 degrees
            console.log("lute");
            var lute = true;
            }
        if (volvelle_spin_kate_prop - 22.5 == 45){
            console.log("stomach");
            var stomach = true;
            }
        if (volvelle_spin_kate_prop - 22.5 == 90){
            console.log("cap");
            var cap = true;
            }
        if (volvelle_spin_kate_prop - 22.5 == 135){
            console.log("household stuff");
            var household_stuff = true;
            }
        if (volvelle_spin_kate_prop - 22.5 == 180){
            console.log("whip");
            var whip = true;
            }
        if (volvelle_spin_kate_prop - 22.5 == 225){
            console.log("tongue");
            var tongue = true;
            }
        if (volvelle_spin_kate_prop - 22.5 == 270){
            console.log("boot");
            var boot = true;
            }
        if (volvelle_spin_kate_prop - 22.5 == 315){
            console.log("bed");
            var bed = true;
            }
    
        //KATE PARLANCE//
        if (volvelle_spin_kate_parlance - 22.5 == 0 || volvelle_spin_kate_parlance - 22.5 == 360){
            console.log("woman may be made a fool/If she had not a spirit to resist");
            var woman = true;
            }
        if (volvelle_spin_kate_parlance - 22.5 == 45){
            console.log("he is more shrew than [you]");
            var he = true;
            }
        if (volvelle_spin_kate_parlance - 22.5 == 90){
            console.log("clothe you as becomes you");
            var clothe = true;
            }
        if (volvelle_spin_kate_parlance - 22.5 == 135){
            console.log("feed'st [you] with the very name of meat");
            var feedst = true;
            }
        if (volvelle_spin_kate_parlance - 22.5 == 180){
            console.log("[Your] tongue will tell the anger of [your] heart");
            var your = true;
            }
        if (volvelle_spin_kate_parlance - 22.5 == 225){
            console.log("Love wrought these miracles");
            var love = true;
            }
        if (volvelle_spin_kate_parlance - 22.5 == 270){
            console.log("[Are you his] bird?");
            var are = true;
            }
        if (volvelle_spin_kate_parlance - 22.5 == 315){
            console.log("place your hands below your husband's foot");
            var place = true;
            }
        
        //LUTE FORTUNES
        if (lute == true && woman == true) {
            $("#fortunes_kate p.active").text("lute + woman may be made a fool/If she had not a spirit to resist");
        }
        if (lute == true && he == true) {
            $("#fortunes_kate p.active").text("lute + he is more shrew than [you]");
        }
        if (lute == true && clothe == true) {
            $("#fortunes_kate p.active").text("lute + clothe you as becomes you");
        }
        if (lute == true && feedst == true) {
            $("#fortunes_kate p.active").text("lute + feed'st [you] with the very name of meat");
        }
        if (lute == true && your == true) {
            $("#fortunes_kate p.active").text("lute + [Your] tongue will tell the anger of [your] heart");
        }
        if (lute == true && love == true) {
            $("#fortunes_kate p.active").text("lute + Love wrought these miracles");
        }
        if (lute == true && are == true) {
            $("#fortunes_kate p.active").text("lute + [Are you his] bird?");
        }
        if (lute == true && place == true) {
            $("#fortunes_kate p.active").text("lute + place your hands below your husband's foot");
        }
        
        //STOMACH FORTUNES
        if (stomach == true && woman == true) {
            $("#fortunes_kate p.active").text("stomach + woman may be made a fool/If she had not a spirit to resist");
        }
        if (stomach == true && he == true) {
            $("#fortunes_kate p.active").text("stomach + he is more shrew than [you]");
        }
        if (stomach == true && clothe == true) {
            $("#fortunes_kate p.active").text("stomach + clothe you as becomes you");
        }
        if (stomach == true && feedst == true) {
            $("#fortunes_kate p.active").text("stomach + feed'st [you] with the very name of meat");
        }
        if (stomach == true && your == true) {
            $("#fortunes_kate p.active").text("stomach + [Your] tongue will tell the anger of [your] heart");
        }
        if (stomach == true && love == true) {
            $("#fortunes_kate p.active").text("stomach + Love wrought these miracles");
        }
        if (stomach == true && are == true) {
            $("#fortunes_kate p.active").text("stomach + [Are you his] bird?");
        }
        if (stomach == true && place == true) {
            $("#fortunes_kate p.active").text("stomach + place your hands below your husband's foot");
        }
        
        //CAP FORTUNES
        if (cap == true && woman == true) {
            $("#fortunes_kate p.active").text("cap + woman may be made a fool/If she had not a spirit to resist");
        }
        if (cap == true && he == true) {
            $("#fortunes_kate p.active").text("cap + he is more shrew than [you]");
        }
        if (cap == true && clothe == true) {
            $("#fortunes_kate p.active").text("cap + clothe you as becomes you");
        }
        if (cap == true && feedst == true) {
            $("#fortunes_kate p.active").text("cap + feed'st [you] with the very name of meat");
        }
        if (cap == true && your == true) {
            $("#fortunes_kate p.active").text("cap + [Your] tongue will tell the anger of [your] heart");
        }
        if (cap == true && love == true) {
            $("#fortunes_kate p.active").text("cap + Love wrought these miracles");
        }
        if (cap == true && are == true) {
            $("#fortunes_kate p.active").text("cap + [Are you his] bird?");
        }
        if (cap == true && place == true) {
            $("#fortunes_kate p.active").text("cap + place your hands below your husband's foot");
        }
        
        //HOUSEHOLD_STUFF FORTUNES
        if (household_stuff == true && woman == true) {
            $("#fortunes_kate p.active").text("household_stuff + woman may be made a fool/If she had not a spirit to resist");
        }
        if (household_stuff == true && he == true) {
            $("#fortunes_kate p.active").text("household_stuff + he is more shrew than [you]");
        }
        if (household_stuff == true && clothe == true) {
            $("#fortunes_kate p.active").text("household_stuff + clothe you as becomes you");
        }
        if (household_stuff == true && feedst == true) {
            $("#fortunes_kate p.active").text("household_stuff + feed'st [you] with the very name of meat");
        }
        if (household_stuff == true && your == true) {
            $("#fortunes_kate p.active").text("household_stuff + [Your] tongue will tell the anger of [your] heart");
        }
        if (household_stuff == true && love == true) {
            $("#fortunes_kate p.active").text("household_stuff + Love wrought these miracles");
        }
        if (household_stuff == true && are == true) {
            $("#fortunes_kate p.active").text("household_stuff + [Are you his] bird?");
        }
        if (household_stuff == true && place == true) {
            $("#fortunes_kate p.active").text("household_stuff + place your hands below your husband's foot");
        }
        
        //WHIP FORTUNES
        if (whip == true && woman == true) {
            $("#fortunes_kate p.active").text("whip + woman may be made a fool/If she had not a spirit to resist");
        }
        if (whip == true && he == true) {
            $("#fortunes_kate p.active").text("whip + he is more shrew than [you]");
        }
        if (whip == true && clothe == true) {
            $("#fortunes_kate p.active").text("whip + clothe you as becomes you");
        }
        if (whip == true && feedst == true) {
            $("#fortunes_kate p.active").text("whip + feed'st [you] with the very name of meat");
        }
        if (whip == true && your == true) {
            $("#fortunes_kate p.active").text("whip + [Your] tongue will tell the anger of [your] heart");
        }
        if (whip == true && love == true) {
            $("#fortunes_kate p.active").text("whip + Love wrought these miracles");
        }
        if (whip == true && are == true) {
            $("#fortunes_kate p.active").text("whip + [Are you his] bird?");
        }
        if (whip == true && place == true) {
            $("#fortunes_kate p.active").text("whip + place your hands below your husband's foot");
        }
        
        //TONGUE FORTUNES
        if (tongue == true && woman == true) {
            $("#fortunes_kate p.active").text("tongue + woman may be made a fool/If she had not a spirit to resist");
        }
        if (tongue == true && he == true) {
            $("#fortunes_kate p.active").text("tongue + he is more shrew than [you]");
        }
        if (tongue == true && clothe == true) {
            $("#fortunes_kate p.active").text("tongue + clothe you as becomes you");
        }
        if (tongue == true && feedst == true) {
            $("#fortunes_kate p.active").text("tongue + feed'st [you] with the very name of meat");
        }
        if (tongue == true && your == true) {
            $("#fortunes_kate p.active").text("tongue + [Your] tongue will tell the anger of [your] heart");
        }
        if (tongue == true && love == true) {
            $("#fortunes_kate p.active").text("tongue + Love wrought these miracles");
        }
        if (tongue == true && are == true) {
            $("#fortunes_kate p.active").text("tongue + [Are you his] bird?");
        }
        if (tongue == true && place == true) {
            $("#fortunes_kate p.active").text("tongue + place your hands below your husband's foot");
        }
        
        //BOOT FORTUNES
        if (boot == true && woman == true) {
            $("#fortunes_kate p.active").text("boot + woman may be made a fool/If she had not a spirit to resist");
        }
        if (boot == true && he == true) {
            $("#fortunes_kate p.active").text("boot + he is more shrew than [you]");
        }
        if (boot == true && clothe == true) {
            $("#fortunes_kate p.active").text("boot + clothe you as becomes you");
        }
        if (boot == true && feedst == true) {
            $("#fortunes_kate p.active").text("boot + feed'st [you] with the very name of meat");
        }
        if (boot == true && your == true) {
            $("#fortunes_kate p.active").text("boot + [Your] tongue will tell the anger of [your] heart");
        }
        if (boot == true && love == true) {
            $("#fortunes_kate p.active").text("boot + Love wrought these miracles");
        }
        if (boot == true && are == true) {
            $("#fortunes_kate p.active").text("boot + [Are you his] bird?");
        }
        if (boot == true && place == true) {
            $("#fortunes_kate p.active").text("boot + place your hands below your husband's foot");
        }
        
        //BED FORTUNES
        if (bed == true && woman == true) {
            $("#fortunes_kate p.active").text("bed + woman may be made a fool/If she had not a spirit to resist");
        }
        if (bed == true && he == true) {
            $("#fortunes_kate p.active").text("bed + he is more shrew than [you]");
        }
        if (bed == true && clothe == true) {
            $("#fortunes_kate p.active").text("bed + clothe you as becomes you");
        }
        if (bed == true && feedst == true) {
            $("#fortunes_kate p.active").text("bed + feed'st [you] with the very name of meat");
        }
        if (bed == true && your == true) {
            $("#fortunes_kate p.active").text("bed + [Your] tongue will tell the anger of [your] heart");
        }
        if (bed == true && love == true) {
            $("#fortunes_kate p.active").text("bed + Love wrought these miracles");
        }
        if (bed == true && are == true) {
            $("#fortunes_kate p.active").text("bed + [Are you his] bird?");
        }
        if (bed == true && place == true) {
            $("#fortunes_kate p.active").text("bed + place your hands below your husband's foot");
        }
        
        //to have the fortune update only on the upcoming side, out of the card's back and front sides, with each flip, I need to switch the active class to the upcoming card at the end of each spin/flip so that before the function runs again, .active is already attached to the upcoming card side (i.e., not the one currently displaying the right fortune)
        $("#fortunes_kate .front > p").toggleClass("active");
        $("#fortunes_kate .back > p").toggleClass("active");
    }
    
    
    if($("#drag_sly").hasClass("arrow")){
        
        //remove dotted border from original dropzone
        $("#dropzone_sly").css("border","none");
        
        //flip the corresponding fortunes card
        $("#fortunes_sly .fortune_card").toggleClass('flipped');

        //make corresponding fortunes visible
        $("#fortunes_sly .fortune_card div").css({
            "opacity" : "1",
            "transition" : miliseconds + "ms"
        });

        //make relevant wheels glow, dim irrelevant wheels 
        $(".sly_prop, .sly_parlance").css({
            "filter" : "brightness(1.2)",
            "transition" : "0"
        });
        
        $(".kate_prop, .kate_parlance, .petruchio_prop, .petruchio_parlance").css({
            "filter" : "brightness(.8)",
            "transition" : "0"
        });
    
        //SLY PROP//
        if (volvelle_spin_sly_prop - 22.5 == 0 || volvelle_spin_sly_prop - 22.5 == 360){
            console.log("pig");
            }
        if (volvelle_spin_sly_prop - 22.5 == 45){
            console.log("stockings");
            }
        if (volvelle_spin_sly_prop - 22.5 == 90){
            console.log("baggage");
            }
        if (volvelle_spin_sly_prop - 22.5 == 135){
            console.log("wine");
            }
        if (volvelle_spin_sly_prop - 22.5 == 180){
            console.log("hound");
            }
        if (volvelle_spin_sly_prop - 22.5 == 225){
            console.log("stocks");
            }
        if (volvelle_spin_sly_prop - 22.5 == 270){
            console.log("bed");
            }
        if (volvelle_spin_sly_prop - 22.5 == 315){
            console.log("ale");
            }

        //SLY PARLANCE//
        if (volvelle_spin_sly_parlance - 22.5 == 0 || volvelle_spin_sly_parlance - 22.5 == 360){
            console.log("‘A will make a man mad, to make a woman of him");
            }
        if (volvelle_spin_sly_parlance - 22.5 == 45){
            console.log("‘tis the mind that makes the body rich");
            }
        if (volvelle_spin_sly_parlance - 22.5 == 90){
            console.log("to clothe you as becomes you");
            }
        if (volvelle_spin_sly_parlance - 22.5 == 135){
            console.log("You may be jogging while your boots are green.");
            }
        if (volvelle_spin_sly_parlance - 22.5 == 180){
            console.log("marry him to a puppet");
            }
        if (volvelle_spin_sly_parlance - 22.5 == 225){
            console.log("Wealth is the burden of my wooing dance");
            }
        if (volvelle_spin_sly_parlance - 22.5 == 270){
            console.log("No profit grows where no pleasure is ta’en");
            }
        if (volvelle_spin_sly_parlance - 22.5 == 315){
            console.log("nothing but a lord");
            }
        
        //WIP!!!! FORTUNES TEST
         $("#fortunes_sly p.active").text("SLY TEST!!!!!");
        
        //to have the fortune update only on the upcoming side
        $("#fortunes_sly .front > p").toggleClass("active");
        $("#fortunes_sly .back > p").toggleClass("active");
        
        }
    
    
    if($("#drag_petruchio").hasClass("arrow")){
        
        //remove dotted border from original dropzone
        $("#dropzone_petruchio").css("border","none");
        
        //flip the corresponding fortunes card
        $("#fortunes_petruchio .fortune_card").toggleClass('flipped');

        //make corresponding fortunes visible
        $("#fortunes_petruchio .fortune_card div").css({
            "opacity" : "1",
            "transition" : miliseconds + "ms"
        });
        
        //make relevant wheels glow, dim irrelevant wheels 
        $(".petruchio_prop, .petruchio_parlance").css({
            "filter" : "brightness(1.2)",
            "transition" : "0"
        });
        
        $(".kate_prop, .kate_parlance, .sly_prop, .sly_parlance").css({
            "filter" : "brightness(.8)",
            "transition" : "0"
        });
    
        //PETRUCHIO PROP//
        if (volvelle_spin_petruchio_prop - 22.5 == 0 || volvelle_spin_petruchio_prop - 22.5 == 360){
            console.log("foot");
            }
        if (volvelle_spin_petruchio_prop - 22.5 == 45){
            console.log("trencher");
            }
        if (volvelle_spin_petruchio_prop - 22.5 == 90){
            console.log("food");
            }
        if (volvelle_spin_petruchio_prop - 22.5 == 135){
            console.log("hawk");
            }
        if (volvelle_spin_petruchio_prop - 22.5 == 180){
            console.log("ear");
            }
        if (volvelle_spin_petruchio_prop - 22.5 == 225){
            console.log("bed");
            }
        if (volvelle_spin_petruchio_prop - 22.5 == 270){
            console.log("rope");
            }
        if (volvelle_spin_petruchio_prop - 22.5 == 315){
            console.log("cock");
            }

        //PETRUCHIO PARLANCE//
        if (volvelle_spin_petruchio_parlance - 22.5 == 0 || volvelle_spin_petruchio_parlance - 22.5 == 360){
            console.log("woo her, bed her, wed her, and rid the house of her");
            }
        if (volvelle_spin_petruchio_parlance - 22.5 == 45){
            console.log("wealth is the burden of [your] wooing dance");
            }
        if (volvelle_spin_petruchio_parlance - 22.5 == 90){
            console.log("you were a movable");
            }
        if (volvelle_spin_petruchio_parlance - 22.5 == 135){
            console.log("To [you] she's married, not unto [your] clothes");
            }
        if (volvelle_spin_petruchio_parlance - 22.5 == 180){
            console.log("in her chamber, [m]ak[e]...a sermon of continency to her");
            }
        if (volvelle_spin_petruchio_parlance - 22.5 == 225){
            console.log("to kill a wife with kindness");
            }
        if (volvelle_spin_petruchio_parlance - 22.5 == 270){
            console.log("go... unto the taming school");
            }
        if (volvelle_spin_petruchio_parlance - 22.5 == 315){
            console.log("[you] will be master of what is [your] own.");
            }
        
        //WIP!!!! FORTUNES TEST
         $("#fortunes_petruchio p.active").text("PETRUCHIO TEST!!!!!");
        
        //to have the fortune update only on the upcoming side
        $("#fortunes_petruchio .front > p").toggleClass("active");
        $("#fortunes_petruchio .back > p").toggleClass("active");
        
        }
    
});



/*
    this is a more complicated way of figuring out how many degrees the circle has spun using %
    //if (volvelle_spin_kate_prop - "22.5") = 315 or 360*n + 315 --> volvelle_spin_kate_prop  = 360 * n + 315 + 22.5
    var remainder_kparlance_1place = (volvelle_spin_kate_parlance - 22.5) % 315;
    var remainder_kparlance_2bird = (volvelle_spin_kate_parlance - 22.5) % (270);
    var remainder_kparlance_3love = (volvelle_spin_kate_parlance - 22.5) % (225);
    var remainder_kparlance_4heart = (volvelle_spin_kate_parlance - 22.5) % (180);
    var remainder_kparlance_5feed = (volvelle_spin_kate_parlance - 22.5) % (135);
    var remainder_kparlance_6clothe = (volvelle_spin_kate_parlance - 22.5) % (90);
    var remainder_kparlance_7shrew = (volvelle_spin_kate_parlance - 22.5) % (45);
    var remainder_kparlance_8spirit = (volvelle_spin_kate_parlance - 22.5) % (360);
    
    
    if (remainder_kparlance_8spirit == 0){
        console.log("woman may be made a fool/If she had not a spirit to resist");
        }
    else if (remainder_kparlance_1place == 0){
        //if (volvelle_spin_kate_parlance - 22.5) is a multiple of 315; i.e. if the circle has spun by 315 degrees
        console.log("place your hands below your husband's foot");
        } 
    else if (remainder_kparlance_2bird == 0){
        console.log("[Are you his] bird?");
        }
    else if (remainder_kparlance_3love == 0){
        console.log("Love wrought these miracles");
        }
    else if (remainder_kparlance_4heart == 0){
        console.log("[Your] tongue will tell the anger of [your] heart");
        }
    else if (remainder_kparlance_5feed == 0){
        console.log("feed'st [you] with the very name of meat");
        }
    else if (remainder_kparlance_6clothe == 0){
        console.log("clothe you as becomes you");
        }
    else if (remainder_kparlance_7shrew == 0){
        console.log("he is more shrew than [you]");
        }
    */
 