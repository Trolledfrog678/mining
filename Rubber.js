class Rubber{
	constructor(x,y,r){
		var options ={
		 'density':1,
		 'friction':5,
		 'restitution':0.3,
		}
		      this.body = Bodies.rectangle(x, y, 50, 50, options);
			  this.width = 50;
			  this.height = 50;
			  World.add(world, this.body);
			};
			display(){
			  var pos = this.body.position;
			  var angle = this.body.angle;
		  
			  push();
			  translate(pos.x, pos.y);
			  rotate(angle);
			  strokeWeight(3);
			  fill('darkblue')
			  rectMode(CENTER)
			  rect(0, 0, this.width, this.height);
			  ellipse(0,0,this.r,this.r);
			  pop();
			};
		  };
		  