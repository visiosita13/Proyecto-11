var   seaImg;
var shipImg1;
var pud;
var ocean;

function preload(){

pud = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
ocean  =  loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  seaImg = createSprite(200,100,50,50);
  seaImg.addImage(ocean );
  seaImg.scale = 0.8;
  seaImg.velocityX = -3;


  shipImg1 = createSprite(250,200,50,50);
  shipImg1.addAnimation("barco",pud);
  shipImg1.scale = 0.2;

}

function draw() {
  background("blue");
  seaImg.velocityX = -3;
  if(seaImg.x  <0 ){
    seaImg.x =  200;
    
  }


  
  drawSprites();

  
}