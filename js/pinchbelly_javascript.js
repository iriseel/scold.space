var audio;

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
  document.getElementById("status").innerHTML = "The good? woman is being dragged";
}

function run(Event) {
    document.getElementById("bianca").classList.add("run");
}

function dragged(event) {
  document.getElementById("status").innerHTML = "Pinch Belly is hungry!!!!";
    document.getElementById("bianca").classList.remove("run");
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
   //These two lines are what make the women disappear after feeding them to pinchbelly
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
    
    document.getElementById("pinchbelly").src = "../img/img_pinchbelly/pinch_belly_with_woman.png";

    audio = new Audio("../audio/chomp.mp3");
    audio.play();

    /*(ʘ言ʘ╬)(ʘ言ʘ╬)(ʘ言ʘ╬)
    Q: How do I make it so that this overrides the innerHTML for function dragged(event)?
    A:
    */
    document.getElementById("status").innerHTML = "Pinch belly was fed. But still hungry!";
        
}


/*(ʘ言ʘ╬)(ʘ言ʘ╬)(ʘ言ʘ╬)
Q: Why is the red border still there after the drop? I'm trying to make pinchbelly an exception to this rule; dragging onto self does not trigger red border
Q: Also how to make it not red if the woman is no longer hovered over pinchbelly?
Q: Also this effect disappears once I paste in the below draggable section of js?*/
document.addEventListener("dragenter", function(event) {
  if ( event.target.id == "pinchbelly" && document.getElementById != "pinchbelly") {
    event.target.style.border = "3px dotted red";
  }
});
