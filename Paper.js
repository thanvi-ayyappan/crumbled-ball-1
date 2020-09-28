class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,20);
    }
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:85});
    }
}