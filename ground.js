class Ground{
    constructor(x,y,width,height){
        var groundoptions={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,groundoptions);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos2=this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos2.x,pos2.y,this.width,this.height);
    }
}