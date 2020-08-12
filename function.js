function keyPressed(){
    if(keyCode===UP_ARROW && paperball.body.position.x<240){
        Matter.Body.applyForce(paperball.body,paperball.body.position,{x:0.05,y:-0.04});
    }
}