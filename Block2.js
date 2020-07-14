class Block2 {
    constructor(x,y,width,height) {
      var options = {
         
          restitution:0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      stroke(0);
      strokeWeight(4)
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(rgb(244, 141, 237));
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  