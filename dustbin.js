class Dustbin{
    constructor(x,y,width,height){
    var binoptions = {
     isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,binoptions);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display(){
        var pos3=this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos3.x,pos3.y,this.width,this.height);
    }
}