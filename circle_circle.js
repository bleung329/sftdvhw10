/*
  Team Ibbrian - Ibnul Jahan and Brian Leung
  SoftDev2 pd7
  #10: Objectification
  2018-03-09
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


var display = function(){
    pic.appendChild(this);
}

// draw circle (inialization function)
const circle = function(x, y){
    var cir = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cir.setAttribute("cx", x);
    cir.setAttribute("cy", y);
    cir.setAttribute("r", radius);
    cir.setAttribute("fill", fColor);
    cir.setAttribute("stroke", sColor);
    
    cir.display =  function(){
	pic.appendChild(this)
    };
    cir.setX = function(x){
	return cir.setAttribute("cx", x);
    }
    cir.setY = function(y){
	return cir.setAttribute("cy", y);
    }
    cir.setColor = function(col) {
	return cir.setAttribute("fill", col);
    };
    cir.getColor = function() {
	return cir.getAttribute("fill");
    };
    
    

    
    cir.display();
    cir.addEventListener("click", changeC);
    console.log(pic);
}

var initRadius = 10;

    
    

// changes the circle color (secondary function)
const changeC = function(e){
    e.stopPropagation();
    //this.setAttribute("fill", fColor2);
    this.setColor(fColor2);
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
document.getElementById("clear").addEventListener("click", clear);
