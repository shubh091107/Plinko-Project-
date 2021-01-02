const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

var engine
var world

var ground

var divheight = 300


var particles = []
var div = []

var plinko1 = []


function setup() {
  engine = Engine.create()
  world = engine.world;
  Engine.run(engine)
  createCanvas(480,800);
  ground = new Ground()
 

  for (var g = 0 ; g <= 480 ; g = g+80){
    div.push(new Division(g,800-divheight/2,10,divheight))
  }
 

    for (var x = 50; x< 450;x+=50){
      plinko1.push(new Plinko(x,100))
    }
    for (var i = 20; i< 480;i+=50){
      plinko1.push(new Plinko(i,200))
    }
    for (var x = 50; x< 450;x+=50){
      plinko1.push(new Plinko(x,300))
    }
    for (var x = 20; x< 480;x+=50){
      plinko1.push(new Plinko(x,400))
    }
}

function draw() {
  
  background(0);  
  ground.display()
if (frameCount%60 === 0 ){
  particle =  new Particle(random(0,450),0,10,10);
  particles.push(particle)
}
Engine.update(engine,25)
for(var i = 0; i < particles.length; i++){
  particles[i].display();
}
for(var k =0; k < div.length; k++){
  div[k].display()
}
for(var d =0; d < plinko1.length; d++){
  plinko1[d].display()
}
for(var d =0; d < plinko1.length; d++){
  plinko1[d].display()
}
for(var d =0; d < plinko1.length; d++){
  plinko1[d].display()
}
for(var d =0; d < plinko1.length; d++){
  plinko1[d].display()
}


}