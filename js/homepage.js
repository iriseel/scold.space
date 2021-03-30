//step 1: set up arrays of oppurtunities 
//(ʘ言ʘ╬) FOR WHATEVER REASON THE IMAGES DISAPPEAR AFTER THE FIRST SHUFFLE IF I INDICATE THEIR LOCATIONS HERE WITH A ../ IN FRONT, SO "../vid/beating_wife.gif", IS NOT OK. GOD DAMN.

//(ʘ言ʘ╬)(ʘ言ʘ╬)(ʘ言ʘ╬) Q: I NEED TO FIGURE OUT HOW TO CHANGE IMAGE ALT TAGS WITH THIS AS WELL
var images = [
    "vid/beating_wife.gif",
    "vid/britches.gif",
    "vid/pinchbelly.gif",
    "vid/scolds_bridle.gif",
    "vid/shrew.gif"]

//step 2: target existing html
var randimg = $("#randimg");

//(ʘ言ʘ╬)(ʘ言ʘ╬)(ʘ言ʘ╬) Q: I TRIED TO CHANGE THE CHANGED THING FROM A DIV WITH BACKGROUND-IMAGE TO AN IMAGE WITH SRC, WITH randimg.attr("src", imageResult); SO THAT THE ALT TAGS WOULD BE ATTACHED TO AN IMG RATHER THAN A DIV, BUT FOR WHATEVER REASON THAT DIDNT WORK???

//step 3: create a function for our <button>
function shuffle() {

    //get the random result
    var imageResult = "url(" + images[Math.floor(Math.random() * images.length)] + ")"
    //style result
    randimg.css("background-image", imageResult);
    
    console.log(imageResult)
    
//changing the alt tags to match the image
    if (imageResult == "url(vid/beating_wife.gif)") {
        randimg.attr("alt","a man beats his wife with a club")
    }
    if (imageResult == "url(vid/britches.gif)") {
        randimg.attr("alt","Married man and shrow fight over who wears the breeches")
    }
    if (imageResult == "url(vid/pinchbelly.gif)") {
        randimg.attr("alt","Pinch Belly gobbles up a so-called good woman")
    }
    if (imageResult == "url(vid/scolds_bridle.gif)") {
        randimg.attr("alt","a man walks his tamed shrew, who wearing a scold's bridle")
    }
    if (imageResult == "url(vid/shrew.gif)") {
        randimg.attr("alt","a shrew dashes across the screen")
    }
}

//randimg.backgroundImage = "url('vid/beating_wife.gif')"
