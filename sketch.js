var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(50,90,50,50) 
  wall = createSprite(1500,100,60,100)
  car.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x < (car.width + wall.width)/2)
   {
     car.velocityX = 0;
     var deformation = 0.5 * weight * speed * speed/22509
     if(deformation>180)
     {
       car.shapeColor = color(255,0,0);
     } 
       if(deformation<180 && deformation>100)
      {
        car.shapeColor = color(0,225,0);
      } 
   }
  
  drawSprites();
}
function bounceOff(car,wall){
if (car.x - wall.x < wall.width/2 + car.width/2
  && wall.x - car.x <wall.width/2 + car.width/2) {
    car.velocityX = car.velocityX * (-1);
    wall.velocityX = wall.velocityX * (-1);
}
if (car.y - wall.y < wall.height/2 + car.height/2
&& wall.y -car.y < wall.height/2 + car.height/2){
  car.velocityY = car.velocityY * (-1);
  wall.velocityY = wall.velocityY * (-1);
}
}