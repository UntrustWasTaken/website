timeID = setInterval(myFunction, 1);
var i = 1;
var dir = 1;
//let width = screen.width;
 
function myFunction() {
var img = document.getElementById("funny");
img.style.left = i + "px";

 if(dir == 1){
	 i = i + 1;
 }
  if(dir == 0){
	 i = i - 1;
 }
 if(i >= (window.innerWidth - img.width)){
	 dir = 0;
 }
 
 if(i <= 0){
	 dir = 1;
 }
 }



