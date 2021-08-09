
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var balls = [];

function preload(){
bg = loadImage("snow.jpg");
play = loadImage("witch.png")
}


function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;
   
  options = {
    isStatic: true }


  ground = Bodies.rectangle(300,580,600,60,options)
  World.add(world,ground)

  player = Bodies.rectangle(300,350,20,20,options)
  World.add(world,player)

  right = createImg("right.png")
  right.position(500,400)
  right.size(100,90)
  right.mouseClicked(goRight)

  left = createImg("left.png");
  left.position(100,400)
  left.size(100,90)
  left.mouseClicked(goLeft)



  for(var i = 0; i < 20; i++){
    var x = random(200,300);
    var y = random(-10,0);
    
    
 
    setTimeout(function () {
      snowball = new Ball(x,y);
      World.add(world,snowball)
      balls.push(snowball);
    }, 3000);
  }


  }
 



function draw() 
{
  background(51);

  

 
 
  imageMode(CENTER)
  image(bg,200,200,800,840)
  image(play, player.position.x,player.position.y,80,100)  

  Engine.update(engine);
  rectMode(CENTER)
  fill ("green")
  
  rect(ground.position.x,ground.position.y,600,60)
  fill(0)
  text("Mam the arrow buttons are not working and i am unable to create delay in loop",20,200)
 
  for(var i = 0; i < balls.length; i++){
    balls[i].display(); 
}
  
  
}

function goRight(){
  Matter.Body.applyForce(player,{x:0,y:0} , {x:2,y:0})
}
function goLeft(){
  Matter.Body.applyForce(player,{x:0,y:0} , {x:-2,y:0})
}


