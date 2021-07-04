var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,leavesImg;
var selectSprites;
var leafImg,orange;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("redImage.png");
  leafImg = loadImage("leaf.png");
  orange = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);
  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  drawSprites();
  var selectSprites = Math.round(random(1,4));
  if (frameCount % 80=== 0) {
    if ( selectSprites== 1) {
      createApples()
    } else if(selectSprites == 2){
      createLeaves()
    }else if(selectSprites == 3){
   createleaf()
    }else if(selectSprites == 4){
      createorange()
    }

   }
}
function createApples() {
  Apples = createSprite(random(50,350),40,10,10)
  Apples.addImage(appleImg)
  Apples.scale = 0.05
  Apples.velocityY= 2
 Apples.lifetime = 300;
}
function createLeaves() {
  leaves = createSprite(random(50,350),40,10,10)
  leaves.addImage(leavesImg)
  leaves.scale = 0.05
  leaves.velocityY= 2
 leaves.lifetime = 300;
}

function createorange() {
  orangel = createSprite(random(50,350),40,10,10)
 orangel.addImage(orange)
 orangel.scale = 0.05
  orangel.velocityY= 2
 orangel.lifetime = 300;
}

function createleaf() {
  leaf = createSprite(random(50,350),40,10,10)
  leaf.addImage(leafImg)
  leaf.scale = 0.05
  leaf.velocityY= 2
 leaf.lifetime = 300;
}



