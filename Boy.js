class Boy{

    constructor(x,y,width,height){
    
        this.width = width;
        this.height = height;
        this.image = loadImage('Project - 28 Images/boy.png');
        
    }

    display(){

        imageMode(CENTER);
        image(this.image,200,600,200,300);
        
    }
}