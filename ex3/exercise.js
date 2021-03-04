//Counting

//Create two buttons, when clicked they will increment or decrease the counter in the p tag.

//Once it reaches +10 or -10 show an image below the counter.

//You can either create an image element or hide/show an existing image.//

var x = 0;
 function increase(){
    var textBox = document.getElementById("insert");
    textBox.innerHTML= x
    x++;   
}    
function decrease(){
  var textBox = document.getElementById("insert");
    textBox.innerHTML= x
    x--;
}
