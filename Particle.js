class Particles{
     constructor(x,y,radius){
       var options = {        
          isStatic: false,
          retitution: 0.4,
          friction: 0.2
       }

        this.x = x;
        this.y = y;
        this.radius = radius;

        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        //this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
     }

       display(){
        
         var pos = this.body.position;
        // var angle = this.body.angle;
 
         fill("255");
         stroke("255");
         translate(pos.x, pos.y);
         //rotate(angle);
         ellipse(0, 0, this.radius * 2);
      
      }
   }     

          
