class Wall {
    constructor(x,y,width,height) {
      var options = {
      isStatic: true
      }

      var options1 = {
        isStatic: true
        }

      var options2 = {
     isStatic: true
       }
      this.image = loadImage("dustbingreen.png");  
          
      this.w1 = Bodies.rectangle(x,y,width,height,options);      
      this.w2 = Bodies.rectangle(x,y,width,height,options1);
      this.w3 = Bodies.rectangle(x,y,width,height,options2);
      
      this.width = width;
      this.width = width;
      this.width = width;
      
      this.height = height;
      this.height = height;
      this.height = height;
      
      World.add(world, this.w1);
      World.add(world, this.w2);
      World.add(world, this.w3);   
    }   

    display(){
      var w1 =this.w1.position;
      var w2 =this.w2.position;
      var w3 =this.w3.position;

      rectMode(CENTER);
      fill("yellow");
      rect(w1.x, w1.y, this.width, this.height);
      rectMode(CENTER);
      fill("yellow");
      rect(w2.x, w2.y, this.width, this.height);
      rectMode(CENTER);
      fill("yellow");
      rect(w3.x, w3.y, this.width, this.height);
  
      
     
    }
  }