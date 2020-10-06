class Tree{

    constructor(x,y,width,height){
    //  this.body = Bodies.rectangle(x, y, width, height,{isStatic:true});
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage('Project - 28 Images/tree.png');
        
        //World.add(world,this.body);
    }

    display(){
        
        push();
        //translate();
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
        pop();
    }
}