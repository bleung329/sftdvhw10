/*
  Team Helibnul - Ibnul Jahan and Charles Weng
  SoftDev2 pd7
  #09: Ask Circles [Change || Die]
  2018-3-7
*/



/*
  ==============================================================================
                                  Variables/Initiation
  ==============================================================================
*/

// the svg element
const pic = document.getElementById('vimage');
const h = pic.getAttribute("height");
const w = pic.getAttribute("width");
var radius = 30;
var fColor = "red";
var fColor2 = "green";
var sColor = "black";


/*
  ==============================================================================
                                  Functions
  ==============================================================================
*/

// clears entire pic
const clear = function(){
  // while there are children, remove the first child
  while(pic.children.length)
    pic.firstChild.remove();
}

// draw circle (inialization function)
const circle = function(x, y){
  var cir = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  cir.setAttribute("cx", x);
  cir.setAttribute("cy", y);
  cir.setAttribute("r", radius);
  cir.setAttribute("fill", fColor);
  cir.setAttribute("stroke", sColor);
  cir.addEventListener("click", changeC);
  cir = pic.appendChild(cir);
  console.log(pic);
}

// changes the circle color (secondary function)
const changeC = function(e){
  e.stopPropagation();
  this.setAttribute("fill", fColor2);
  this.addEventListener("click", sudoku);
  this.removeEventListener("click", changeC);
  console.log(pic);
}

// circle-san commites sudoku after shaming his new born family (final function)
const sudoku = function(e){
  e.stopPropagation();
  this.parentNode.removeChild(this);
  circle(Math.random() * w, Math.random() * h);
  console.log(pic);
}
/*
  ==============================================================================
                                  Final Setup
  ==============================================================================
*/

// starting listener
pic.addEventListener("click", function(e){
  circle(e.offsetX, e.offsetY);
})
