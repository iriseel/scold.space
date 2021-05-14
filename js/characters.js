// Get the modal
var info = document.getElementById("info");

// Get the button that opens the modal
var info_btn = document.getElementById("info_btn");

// Get the <span> element that closes the modal
var info_close = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
info_btn.onclick = function() {
  info.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
info_close.onclick = function() {
  info.style.display = "none";
}


{
var degrees=0, seconds=0, previousRotation=0;

$("#arrow").click(function(){
 previousRotation = degrees;
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