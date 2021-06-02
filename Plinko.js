class Plinko {
    constructor(x,y,radius){
      var options = {
        isStatic: true
      }
       this.x = x;
       this.y = y;
       this.radius = radius;

       this.body = Bodies.circle(x,y,radius,options);
       World.add(world,this.body);

    }
      display(){
 
        var pos = this.body.position;

        rectMode(CENTER);
        rect(pos.x,pos.y,this.radius);
    }
}