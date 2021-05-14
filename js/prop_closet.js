var carousel1 = $("#carousel1");
var carousel2 = $("#carousel2");
var currdeg1  = 0;
var currdeg2  = 0;

$("#next1").on("click", { d: "n1" }, rotate);
$("#prev1").on("click", { d: "p1" }, rotate);


$("#next2").on("click", { d: "n2" }, rotate);
$("#prev2").on("click", { d: "p2" }, rotate);

function rotate(e){
  if(e.data.d=="n1"){
    currdeg1 = currdeg1 - 45;
  }
  if(e.data.d=="p1"){
    currdeg1 = currdeg1 + 45;
  }
  if(e.data.d=="n2"){
    currdeg2 = currdeg2 - 90;
  }
  if(e.data.d=="p2"){
    currdeg2 = currdeg2 + 90;
  }
  carousel1.css({
    "-webkit-transform": "rotateY("+currdeg1+"deg)",
    "-moz-transform": "rotateY("+currdeg1+"deg)",
    "-o-transform": "rotateY("+currdeg1+"deg)",
    "transform": "rotateY("+currdeg1+"deg)"
  });
  carousel2.css({
    "-webkit-transform": "rotateY("+currdeg2+"deg)",
    "-moz-transform": "rotateY("+currdeg2+"deg)",
    "-o-transform": "rotateY("+currdeg2+"deg)",
    "transform": "rotateY("+currdeg2+"deg)"
  });
}