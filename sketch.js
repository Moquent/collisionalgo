var a1, a2;
function setup() {
  createCanvas(800,400);
 a1 = createSprite(400, 200, 50, 50);
a2 = createSprite(400, 200, 60, 50);
a1.shapeColor = "green";
a2.shapeColor = "green";

}

function draw() {
  background(255,255,255);  

  a2.x = mouseX;
  a2.y = mouseY;
  if(a2.x - a1.x < (a2.width/2 + a1.width/2) && a1.x - a2.x < (a1.width/2 + a2.width/2) && a2.y - a1.y < (a2.height/2 + a1.height/2) && a1.y - a2.y < (a1.height/2 + a2.height/2))
  {
  	  a1.shapeColor = "red";
	  a2.shapeColor = "red";
  }
  else
  {
  	  a1.shapeColor = "green";
	  a2.shapeColor = "green";
  }
  drawSprites();
}