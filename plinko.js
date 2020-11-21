class plinko {
    constructor(x,y,r){
   var option={
       isStatic:true
   }
   this.body = Bodies.circle(x,y,15,option)
   this.r=15
   World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        ellipseMode(CENTER)
        fill("white");
        ellipse(pos.x,pos.y,this.r,this.r)
    }
}