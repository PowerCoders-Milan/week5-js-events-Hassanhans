/*var x = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth
var y = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight
var widthHeightCal = document.getElementsByTagName('p');
widthHeightCal.inneHTML = 'borowse inner window width:' + x + ', height: ' + y + '.';
*/
var x = window.innerWidth;
var y = window.innerHeight;
var bodyElement = document.querySelector('body')
var p = document.querySelectorAll("p");
p[1].innerHTML = "The window width is " + x +" pixels and its height is " + y +" pixels."

