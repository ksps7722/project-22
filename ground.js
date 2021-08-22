class Ground {
    constructor(x,y,width,height){
        var ball_options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            denstiy:1.2

        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height = height;



        World.add(world, this.body);
    }

   display(){
       rectMode(CENTER);

       FileList(225);

       rectMode(this.body.position.x,this.body.position.y,this.width,this.height);
   }


};

