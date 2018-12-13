var popcorns = [];
var kernels = [];
var HowMany = 40;
var HowMany2 = 70;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	for (var i = 0; i < HowMany; i++){	  
      popcorns[i] = new Popcorn(random((width/6)+50, (4*(width/6))),random(250, height-200),90,random(-3,3));	
	}
	
	for (var i = 0; i < HowMany2; i++){	  
	kernels[i] = new Kernel(random((width/6)+50, (5*(width/6))-25),random(height-20, height),25);	
	}
	
}



function draw() {
	background (0);

	popcornMachine();

	textFont("Broadway");
  fill(0);
  textSize(100);
	textAlign (CENTER, CENTER);
  text("POPCORN", width/2-70, 30, 200, 200);
	
	for (var i = 0; i < HowMany; i++){
		     popcorns[i].move();
	      popcorns[i].display();
				//popcorns[i].y++;
	}
	
	for (var i = 0; i < HowMany2; i++) {
		kernels[i].display();
	}
}
	
function Kernel (X,Y,Diameter) {
	this.x = X,
	this.y = Y,
	this.diameter = Diameter,
		
	this.display = function () {
		fill (140, 89, 8);
		ellipse (this.x, this.y, this.diameter, this.diameter);
	}
}

	
	function Popcorn(X,Y,Diameter,Step) {
		    this.x = X
	 	    this.y = Y
		    this.diameter= Diameter;
		    this.Step = Step;
		
				
	   this.move = function() {
			 this.x = (this.x + this.Step)
			 if ((this.x <= (width/6)+25) || (this.x >= (5*(width/6))-25)) {
				 this.Step = -1*this.Step;
			 }
			 
	     this.y = (this.y +this.Step)
			 
			 if ((this.y <= 200) || (this.y >= height)) {
				 this.Step = -1*this.Step;
			 }
			 this.x = this.x + random(-3,3);
			 this.y = this.y + random(-3,3);
	  } //closes this.move
					
    this.display = function() {
			fill (255, 173, 22);
			noStroke();
			ellipse (this.x, this.y, this.diameter-20, this.diameter);
			ellipse (this.x-25, this.y+35, this.diameter-60, this.diameter-70);
			ellipse (this.x, this.y+40, this.diameter-60, this.diameter-60);
			ellipse (this.x+25, this.y+35, this.diameter-60, this.diameter-70);
		}  //this bracket closes this.display
		
		
	}



function popcornMachine () {
 	fill (67,70,75);
	rect (width/6, 0, 25, height);
	rect (5*(width/6), 0, 25, height);//left wall
	
	fill (205, 209, 216);
	rect ((width/6)+25, 0, (4*(width/6))-25,height);//right wall
	
	fill (145, 26, 26);
	rect ((width/6)+25, 0, (4*(width/6))-25, 150); //top banner
}
