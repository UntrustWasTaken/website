timeID = setInterval(myFunction, 1);
var i = 1;
var rotY = 0;

var dir = 1;
 
var playedL = false;
var playedR = false;
function myFunction() {
var img = document.getElementById("funny");
img.style.left = i + "px";

 if(dir == 1){
	 img.style.transform = "rotateY(" +rotY + "deg)";
	  if(rotY < 180){
		   playedR = false;
		 rotY += 1;
	  }
	  else{
		  i = i + 1;
	  }
	  if(playedL == false){
		  //new Audio('didntIdoitforyou1.mp3').play()
		  playedL = true
	  }
 }
  if(dir == 0){
	 img.style.transform = "rotateY(" +rotY + "deg)";
	
	 if(rotY > 0){
		 playedL = false;
		 rotY -= 1;
	 }
	  else{
		  i = i - 1;
	  }
	  if(playedR == false){
		  //new Audio('didntIdoitforyou1.mp3').play()
		  playedR = true
	  }
 }
 if(i >= (window.innerWidth - img.width)){
	 dir = 0;
 }
 
 if(i <= 0){
	 dir = 1;
 }
 
 }



