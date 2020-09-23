class Paper {
    constructor(x, y){
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          'isStatic': false
      }
      this.x = x;
      this.y = y;      
      //this.r = r;
      this.body = Bodies.circle(this.x,this.y,20,options);
      
      World.add(world, this.body);
    }
    display(){
      fill("rosybrown");
      ellipseMode(2.5);
      ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
     }
}