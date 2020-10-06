class Mango{

    constructor(x,y,width,height){
        
        var options= {
            isStatic: true,
            restitution: 0,
            friction: 1   
        }
        
        this.width = width;
        this.height = height;

        this.mango = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage('Project - 28 Images/mango.png')

        World.add(world,this.mango);
    }

    display(){

        push()
        translate()
        imageMode(CENTER);
        image(this.image,this.mango.position.x,this.mango.position.y,this.width,this.height);
        pop();
    }
}