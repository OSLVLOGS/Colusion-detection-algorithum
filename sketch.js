var Fr, Mr;

function setup() {
  createCanvas(800,400);
  Fr = createSprite(400, 200, 50, 50);
  Mr = createSprite(400, 20, 30, 80);

}

function draw() {
  background(255,255,255);  

  Mr.y = World.mouseY;
  Mr.x = World.mouseX;

  if (Mr.x-Fr.x<Mr.width/2+Fr.width/2 && Fr.x-Mr.x<Fr.width/2+Mr.width/2 && Mr.y-Fr.y<Mr.height/2+Fr.height/2 && Fr.y-Mr.y<Fr.height/2+Mr.height/2){

    Mr.shapeColor = "red";
    Fr.shapeColor = "red";

  }

  else {

    Mr.shapeColor = "green";
    Fr.shapeColor = "green";

  }
  

  drawSprites();
}