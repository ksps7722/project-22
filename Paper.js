class Paper {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            denstiy:1.2

        }
        this.body = Bodies.rectangle(x,y,radius,options);
        this.radius= radius
        
    World.add(World,this.body);
    }
    display(){
        ellipseMode(RADIUS);

        Fill("yellow");

        cricle(this.body.postion.x,this.body.postion.y,this.radius);
    }


};