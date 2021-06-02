class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
     
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;

        this.groud = Bodies.rectangle(400,370,800,30,options);
        World.add(world, this.ground);
    }

    display(){
     
     var pos = this.body.position;
     
     fill("white");
     rectMode(CENTER);
     rect(pos.x, pos.y, this.width, this.height);
    }
}