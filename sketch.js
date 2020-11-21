const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[]
var plinkos=[]
var divisions=[]

var divisionHeight=300;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;
    ground=new Division(height/2,height,width,10)
    for(var k=0; k<=width; k=k+80){
      divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
    }
    for(var j=40; j<=width;j=j+50){
plinkos.push(new plinko(j,75))
    }
    for(var j=15; j<=width-10;j=j+50){
      plinkos.push(new plinko(j,175))
          }
          for(var j=40; j<=width;j=j+50){
            plinkos.push(new plinko(j,275))
                }
                for(var j=15; j<=width-10;j=j+50){
                  plinkos.push(new plinko(j,375))
                      }
    
   
   
  
}

function draw() {
  background("black");  
  Engine.update(engine);
  if(frameCount%60===0){
    particles.push(new particle(random(width/2-50,width/2+10),10,10));
  }
for(var k = 0;k<divisions.length;k++){
  divisions[k].display();
}
for(var j = 0;j<particles.length;j++){
  particles[j].display();
}
for(var l = 0;l<plinkos.length;l++){
  plinkos[l].display();
}

  drawSprites();
}