// define your functions here

// call the functions and connect them to an even

var link = document.querySelector('a');
var strong = document.querySelectorAll('strong');
link.addEventListener('mouseover', function (){
    strong.forEach(function(strong){
        strong.style.color = "crimson";
    })
})
link.addEventListener('mouseover',function boldWords(){
    link.style.fontWeight = "bold";
})
// call the functions and connect them to an event
link.addEventListener('mouseout', function remove(){
    link.style.fontWeight= "normal";
})

