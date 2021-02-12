class drop {
    constructor(x, y,radius) {
      var options = {
        isStatic:false
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius=radius;
      
      World.add(world, this.body);
    }


    update(){

        if(this.body.position.y>height)
        {
            Matter.Body.setPosition(this.body,{x:random(0,500),y:random(0,650)})
        }

    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER)
      ellipse(0,0,this.radius,this.radius)
      pop();
    }
    showDrop(){
      fill("blue")
      ellipseMode(CENTER);
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
    
  };
  