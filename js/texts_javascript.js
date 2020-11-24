/*var hat = document.createElement("img");
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
