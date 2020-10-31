class ball {
    constructor(x, y,radius){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle=this.body.angle;

        pos.x=mouseX;
        pos.y=mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
    
    }
    