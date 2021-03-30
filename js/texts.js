var rebusMode = true; 
var oneplayleft = false;

// curtain/table of contentments nav
function openNav() {
    document.getElementById("bookmark").style.height = "100%";
}

function closeNav() {
    document.getElementById("bookmark").style.height = "0%";
}



// Checks for whether both plays are onscreen or not, which affects cursor hover states, whether or not prop closet is available, etc.
function check_plays_onscreen() {
    //if either .theshrew or .ashrew is hidden
    if ($(".theshrew" ).is( ":hidden" ) || $(".ashrew" ).is( ":hidden" )) {
        oneplayleft = true;
        //$(".play_frame .closebtn").hide(300);  
        }
    else {
        oneplayleft = false;
        //$(".play_frame .closebtn").show(300);
        $(".props img").hide(100);
        $(".proptrigger").hide(100);
        $("#prop_controls").removeClass("on").addClass("off");
        }
    }

setInterval(function() {
            check_plays_onscreen()
        }, 100);



//toggles the general rebusMode on and off (couldn't use the toggle method because it's too personalized — if a single rebus is on and the rest are off, toggling rebusMode will turn the former off and the rest on)
function rebusSwitch() {
    if (rebusMode == true) {
         $(".rebus").hide(100);
         $(".rebus_referent").show(100);
        }
   else  {
         $(".rebus").show(100);
         $(".rebus_referent").hide(100);
    }
        rebusMode = !rebusMode;
        //toggles opacity of controls
         $("#rebus_controls").toggleClass("on off");
  }

//so that when an individual rebus is clicked,  only it and its corresponding rebus_referent will toggle
function solo_rebusSwitch(event) {
    var target = $(event.target);
    //only the event target will toggle display
    target.toggle(100);
    //only the .rebus_referent immediately following the event target will toggle display
 target.next(".rebus_referent").toggle(100);
}

$(".rebus").click(solo_rebusSwitch);

//so that when an individual rebus referent (word) is clicked,  only it and its corresponding rebus will toggle
function solo_rebusreferentSwitch(event) {
    var target = $(event.target);
    //only the event target will toggle display
    target.toggle(100);
    //only the .rebus immediately preceding the event target will toggle display
 target.prev(".rebus").toggle(100);
}

$(".rebus_referent").click(solo_rebusreferentSwitch);


//toggles the proverb mode on and off
function proverbSwitch() {
    $(".proverb").fadeToggle(100);
    $("#proverb_controls").toggleClass("on off");
  }

//toggles the prop mode on and off
function propSwitch() {
    //prop mode can be turned on only if there is only one play on screen
     if (oneplayleft == true) {
         $(".props img").fadeToggle(100);
        $(".proptrigger").fadeToggle(100);
        $("#prop_controls").toggleClass("on off");
     }
  }

function solo_prop_appear(event) {
    var target = $(event.target);
    // set var proptarget to represent the second [1] class of the target 
    var proptarget = target.attr("class").split(" ")[1]
    
    //toggle all elements with the same classname as proptarget except for those with class .proptrigger
    $("." + proptarget).not(".proptrigger").fadeToggle(100);
}

$(".proptrigger").click(solo_prop_appear);


$("#prop_controls").click(function() {
    if (oneplayleft != true) {
        alert("Prop closet can be accessed only when one text is onscreen");
    }
});


//makes it so that the toggle button only works if the other text is onscreen (we don't want ashrew's toggle to work if ashrew is the only text left onscreen! we'd be left with nothing!)
function toggle_ashrew() {
    if ($(".theshrew" ).is( ":visible" )) {
        $(".ashrew").fadeToggle(100);
        $("#toggle_ashrew").toggleClass("shrew_on shrew_off");
    }
}

function toggle_theshrew() {
    if ($(".ashrew" ).is( ":visible" )) {
        $(".theshrew").fadeToggle(100);
        $("#toggle_theshrew").toggleClass("shrew_on shrew_off");
    }
}

/*(ʘ言ʘ╬)(ʘ言ʘ╬)(ʘ言ʘ╬)
Q:Calling a function only onhover calls it less, but there's a visible glitchy .5-second delay as the cursor changes on the first hover after the changed state. Consider moving these to inside function check_plays_onscreen()?
*/
//changes cursor hover state depending on whether the other play is onscreen
$("#toggle_ashrew").hover(function() {
    if ($(".theshrew" ).is( ":hidden" )) {
        $("#toggle_ashrew").css("cursor","not-allowed");
    }
    else {
        $("#toggle_ashrew").css("cursor","pointer");
    }
});

$("#toggle_theshrew").hover(function() {
    if ($(".ashrew" ).is( ":hidden" )) {
        $("#toggle_theshrew").css("cursor","not-allowed");
    }
    else {
        $("#toggle_theshrew").css("cursor","pointer");
    }
});

//changes cursor hover state depending on how many plays left onscreen
$("#prop_controls").hover(function() {
    if (oneplayleft == true) {
        $("#prop_controls").css("cursor","pointer");
    }
    else {
        $("#prop_controls").css("cursor","not-allowed");
    }
});









//old close play script functions - delete?
/*function close_ashrew() {
         $(".ashrew").hide(300);
        oneplayleft = true;
}*/
  
/*function close_theshrew() {
         $(".theshrew").hide(300);
        oneplayleft = true;
}*/






/*
 For whatever reason I couldn't toggle the rebus visibility with this:
var rebus = $(".rebus");

function rebusSwitch() {
    if(rebus.css.visbility == "visible") {
        rebus.css("visbility", "hidden");
        console.log("visible");
        }
    else {
      rebus.css("visbility", "visible");
        console.log("hidden");
  }
}

var hat = document.createElement("img");
    hat.setAttribute("src", "img_texts/rebus_icons/hat-1.png");
    hat.setAttribute("width", "304");
    hat.setAttribute("height", "228");
    hat.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(hat);

var str = document.getElementById("rebus").innerHTML;
var sub = str.replace(/fie/gi, hat);
document.getElementById("rebus").innerHTML = sub;


/*I feel like this is very promising but I'm not yet able to understand it:
https://www.quirksmode.org/dom/fir.html
function init()
{
	var W3CDOM = (document.createElement && document.getElementsByTagName);
	if (!W3CDOM) return;
	var test = new Image();
	var tmp = new Date();
	var suffix = tmp.getTime();
	test.src = 'pix/fir_assumptions.gif?'+suffix;
	test.onload = imageReplacement;
}

function imageReplacement()
{
	replaceThem(document.getElementsByTagName('h4'));
}

function replaceThem(x)
{
	var replace = document.createElement('img');
	for (var i=0;i<x.length;i++)
	{
		if (x[i].id)
		{
			var y = replace.cloneNode(true);
			y.src = 'pix/' + x[i].id + '.gif';
			y.alt = x[i].firstChild.nodeValue;
			x[i].replaceChild(y,x[i].firstChild);
		}
	}
}
*/


  //document.getElementById("pinchbelly").src = "img_pinchbelly/pinch_belly_with_woman.png";

/*eslint-env browser*/

//document.getElementById('rebus').innerHTML.replace(/hand/, "hiiiiiiiiiiiieqrwewr qewrdvdgsdfgsgdfsgdfgdhrtwhwreterqewrewrewRBWHQERHBRTHTRNGNWNTHRTH");


/*
var x = document.getElementById("rebus");
for (var i = 0; i < x.length; i++) {
    document.body.innerHTML = document.body.innerHTML.replace(x[i].innerHTML, 'Hello World');
}
*/

/*
let regexp = RegExp('hat','g');
let str = document.getElementById('rebus').innerText;
let matches = str.matchAll(regexp);

for (let match of matches) {
  console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
}

// matches iterator is exhausted after the for..of iteration
// Call matchAll again to create a new iterator
Array.from(str.matchAll(regexp), m => m[0]);

// Get all the elements that you care about into an array
let elements = Array.prototype.slice.call(document.querySelectorAll("p"));

// Loop over the items in the array
elements.forEach(function(el){
  // Do the replace on the element
  el.textContent = el.textContent.replace(/text/g, "letters");
});
*/

/*
var texts= document.getElementsByTagName('p');
for (var i = 0, len = texts.length; i < len; ++i) {

    if(texts[i].innerHTML.indexOf("hat") !== -1) {
    "hat".innerHTML="<img src='img_texts/rebus_icons/hat-1.png'>"
        return html.replace(/hat/g , tImg )
    }
}


var tImg = "<img src='img_texts/rebus_icons/hat-1.png'>";
$(".p:contains('hat')").html(function (_, html) {
     return html.replace(/hat/g , tImg )
});

(function() {
    var list, index, element, filename;
    list = document.getElementsByClassName('attr-value');
    for (index = 0; index < list.length; ++index) {
        element = list[index];
        filename = element.innerHTML.toLowerCase().replace(/ /g, '-').replace(/([^0-9a-z-])/g,'');
        element.innerHTML = "<img src='http://www.example.com/" + filename + ".jpg'>";
    }
})();
*/




/*
	firdom()
	written by Chris Heilmann (http://www.onlinetools.org)

function firdom(){
	if(document.getElementsByTagName && document.createElement){
		for (l=1;l<=6;l++){
			h1s=document.getElementsByTagName('p'+l);
			scanandreplace(h1s,'p'+l);
		}
	}
}
function scanandreplace(h1s,tag){
	for(i=0;i<h1s.length;i++){
		for(f=0;f<replaceImages.length;f++){
			chunks=replaceImages[f].split('|');
			thish1=document.getElementsByTagName(tag)[i];
			if(thish1.firstChild.nodeValue==chunks[0]){
				newImg=document.createElement('img');			
				newImg.setAttribute('alt',chunks[0])
				newImg.setAttribute('src',chunks[1])
				// or newImg.src=chunks[1];
				thish1.replaceChild(newImg,thish1.firstChild)
			}
		}
	}
}
window.onload=firdom;

replaceImages = new Array(
		'hat|img_texts/rebus_icons/hat-1.png',
		'History|history.gif',
		'Contact Us|contact.gif'
	);
    
*/
