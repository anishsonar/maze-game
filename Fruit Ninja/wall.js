class Wall{
    constructor(){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    display()
    {
        fill("brown");
        rect(this.x,this.y,this.width,this.height);
    }
}