class Fish {
	constructor(name) {
		this.name = name;
		let rotY = 0;
	
		this.dir = Math.floor(Math.random() * 4)+1;
		//this.dir = 2
		this.img = document.createElement('img');
		this.img.src = "fish/" + name + ".png";
		this.img.id = "fish";
		
		this.img.onclick = function(){
			clickHandler(event);
		}
		document.body.appendChild(this.img);
		
		this.posX = Math.floor(Math.random() * (window.innerWidth - this.img.width -10));
		this.posY = Math.floor(Math.random() * (window.innerHeight - this.img.height)-10);
		
		//this.posX = 0;
		//this.posY = 0;
		this.img.style.left = this.posX + "px";
		this.img.style.top = this.posY + "px";
		
		//this.img.style.left = this.posX  + "px";
		//this.img.style.top = this.posY + "px";
		console.log(document.documentElement.scrollHeight);
    }
	
	iamfish(){
		console.log("I am a " + this.name);
	}
	
	flip(){
		if(this.img.style.transform == "rotateY(180deg)"){
			this.img.style.transform = "rotateY(0deg)";
		 }
		 else{
			 this.img.style.transform = "rotateY(180deg)";
		}
	}
	
	move(){
		//console.log("x" + this.posX + " y" + this.posY + " dir" + this.dir);
		switch(this.dir) {
			
		case 1: //Up right
		
			this.posX += 1;
			this.posY -= 1;
			if(this.posX > window.innerWidth - this.img.width){ //Hits right
				this.dir = 4;
			}
			if(this.posY <= 0){ //Hits top
				this.dir = 2;
			}
			if(this.img.style.transform != "rotateY(180deg)"){
				this.img.style.transform = "rotateY(180deg)";
			}
			
			
			break;
			
		case 2: //Down right
			this.posX += 1;
			this.posY += 1;
			if(this.posX > window.innerWidth - this.img.width){ //Hits right
				this.dir = 3;
			}
			if(this.posY >= window.innerHeight - this.img.height){ //Hits bottom
				this.dir = 1;
			}
			if(this.img.style.transform != "rotateY(180deg)"){
				this.img.style.transform = "rotateY(180deg)";
			}
			break;
		
		case 3: //Down left
			this.posX -= 1;
			this.posY += 1;
			if(this.posX <= 0){ //Hits left
				this.dir = 2;
			}
			if(this.posY >= window.innerHeight - this.img.height){ //Hits bottom
				this.dir = 4;
			}
			if(this.img.style.transform != "rotateY(0deg)"){
				this.img.style.transform = "rotateY(0deg)";
			}
			break;
		
		case 4: //Up left
			this.posX -= 1;
			this.posY -= 1;
			if(this.posX <= 0){ //Hits left
				this.dir = 1;
			}
			if(this.posY <= 0){ //Hits top
				this.dir = 3;
			}
			if(this.img.style.transform != "rotateY(0deg)"){
				this.img.style.transform = "rotateY(0deg)";
			}
			
			break;
		
		default:
			
		}
		
		this.img.style.left = this.posX  + "px";
		this.img.style.top = this.posY + "px";
		
		
	}
	
}

let numFish = 0;

let fish = [];


//document.onclick= function(event) {
    // Compensate for IE<9's non-standard event model
    //
   // if (event===undefined) event= window.event;
   // document.getElementById("music").play();
//};

//for (let i = 0; i < 10; i++) {
//	const species = ["carp", "trout", "pike","salmon"];
//	fish[i] = new Fish(species[Math.floor(Math.random() * species.length)]);
//}

fish[fish.length] = new Fish("lager");
numFish++;
document.getElementById("count").innerHTML = "there's " + numFish + " of em";
console.log(document.getElementById("count"));


//List all fish
for(const Element of fish){
	Element.iamfish();
}
	
var timeID = setInterval(moveFish, 1);

function moveFish(){
	for(const Element of fish){
		Element.move();
	}
	
}


function clickHandler(e) {
    //console.log(e.target);
	
	hole = document.createElement('img');
	hole.src = "hole3.png";
	hole.id = "hole";
	
	document.body.appendChild(hole);
		
	//hole.style.top = "0px";
	//hole.style.left = "0px";
	tPosX = parseInt(e.target.style.left);
	tPosY = parseInt(e.target.style.top);
	tWidth = parseInt(e.target.width);
	tHeight = parseInt(e.target.height);
	
	holeWidth = parseInt(hole.width);
	holeHeight = parseInt(hole.height);
	console.log(tPosX + " " + tPosY + " " + tWidth + " " + tHeight + " " + holeWidth + " " + holeWidth);
	tPosX = tPosX + (tWidth / 2) - (holeWidth / 2);
	tPosY = tPosY + (tHeight / 2) - (holeHeight / 2);
	
	
	hole.style.left = tPosX + "px";
	hole.style.top = tPosY + "px";
		
	e.target.remove();
	new Audio('shotgun.mp3').play()
	//new Audio('robloxexplosion.mp3').play()
	numFish -=1;
	if(numFish != 0){
	document.getElementById("count").innerHTML = "there's " + numFish + " of em";
	}
	
	if(numFish == 0){
		document.getElementById("count").innerHTML = "there's none of em";
		fish = [];
	}
}

function removeExplosion(image){
	image.remove();
}

function addMoreFish(){
	
	for(const Element of fish){
	Element.iamfish();
	}
	
	var newLength = fish.length + 5;
	for (let i = fish.length; i < (newLength); i++) {
	const species = ["carp", "trout", "pike","salmon"];
	fish[fish.length] = new Fish(species[Math.floor(Math.random() * species.length)]);
	numFish++
	
	}
	
	console.log("added more fish");
	document.getElementById("count").innerHTML = "there's " + numFish + " of em";
	//fish[fish.length] = new Fish("pike");
	
}