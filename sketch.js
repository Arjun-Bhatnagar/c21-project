var bullet, wall
var speed, weight, thickness

function setup() {
  createCanvas(800,400);
  bullet= createSprite(50,200,50,50)
  wall=createSprite(800,200,thickness,height/2)
  
  speed = random(80,200)
  weight=random(100,1500)
  thickness = random(22,83)
}

function draw() {
  background(255,255,255);
 
  bullet.velocityX=speed  
  
  if (bullet.x - wall.x < bullet.width/2 + wall.width/2
    && wall.x - bullet.x < bullet.width/2 + wall.width/2 &&
    wall.y - bullet.y < wall.height/2 + bullet.height/2 &&
    bullet.y - wall.y < bullet.height/2 + wall.height/2){
    bullet.velocityX=0
    bullet.velocityX=0
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness)
    if (damage>10){
      wall.shapeColor = color(255,0,0)
    }

    if (damage<10){
      wall.shapeColor = color(0,255,0)
    }
  }
  


  drawSprites();
}
  

