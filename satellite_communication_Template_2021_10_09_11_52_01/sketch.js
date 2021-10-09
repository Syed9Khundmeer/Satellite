var satelitte, satelitteImg;
var earth, earthImg;
var groundStationLeft, groundStationRight;
var groundStationLeftImg, groundStationRightImg;
var upLinkLeft, upLinkLeftImg;

function preload(){
  
  satelitteImg= loadImage("other/satellite.png");
  
  groundStationLeftImg= loadImage("other/gstation1.png");

  groundStationRightImg= loadImage("other/gstation2.png");
  
  earthImg= loadImage("other/earth1.png");
  
  upLinkLeftImg= loadAnimation("leftu/upleft1.png","leftu/upleft2.png","leftu/upleft3.png","leftu/upleft4.png","leftu/upleft5.png","leftu/upleft6.png","leftu/upleft7.png","leftu/upleft8.png");
  
  upLinkRightImg= loadAnimation("rightu/upright1.png","rightu/upright2.png","rightu/upright3.png","rightu/upright4.png","rightu/upright5.png","rightu/upright6.png","rightu/upright7.png","rightu/upright8.png")
  
  downLinkLeftImg= loadAnimation("leftd/dleft1.png","leftd/dleft2.png","leftd/dleft3.png","leftd/dleft4.png","leftd/dleft5.png","leftd/dleft6.png","leftd/dleft7.png","leftd/dleft8.png")
  
  downLinkRightImg= loadAnimation("rightd/dright1.png","rightd/dright2.png","rightd/dright3.png","rightd/dright4.png","rightd/dright5.png","rightd/dright6.png","rightd/dright7.png","rightd/dright8.png")
}

function setup(){
  createCanvas(700,500);
  
  
  satelitte= createSprite(350, 70,50,50)
  satelitte.addImage(satelitteImg)
  satelitte.scale=0.09;
  
  earth= createSprite(350, 820,50,50)
  earth.addAnimation("earth", earthImg)
  earth.scale=0.6;
  
  groundStationLeft= createSprite(50, 430,50,50)
  groundStationLeft.addImage(groundStationLeftImg)
  groundStationLeft.scale=0.04;
  
  groundStationRight= createSprite(650, 430,50,50)
  groundStationRight.addImage(groundStationRightImg)
  groundStationRight.scale=0.04;
  
  upLinkLeft= createSprite(190, 270,10,100);
  upLinkLeft.addAnimation("uplinkL",upLinkLeftImg);
  upLinkLeft.scale=0.07;
  
  upLinkRight= createSprite(510, 270,10,100)
  upLinkRight.addAnimation("uplinkR",upLinkRightImg)
  upLinkRight.scale=0.07;
  
  downLinkLeft= createSprite(190, 270,10,100)
  downLinkLeft.addAnimation("downlinkL",downLinkLeftImg)
  downLinkLeft.scale=0.07;
  
  downLinkRight= createSprite(510, 270,10,100)
  downLinkRight.addAnimation("downlinkR",downLinkRightImg)
  downLinkRight.scale=0.07;

}

function draw(){
  background("black")

  drawSprites();
  
  upLinkLeft.visible = false
  upLinkRight.visible = false
  downLinkLeft.visible = false
  downLinkRight.visible = false

  textSize(15);
  fill("white")
  
  if(keyDown("left")){
    downLinkLeft.visible = true
    text("Transferring data to Left base station", 10,300)
  }
 
  if(keyDown("right")){
    downLinkRight.visible = true
    text("Transferring data to Right base station", 490,300)
  }
 
  if(keyDown("L")){
    upLinkLeft.visible = true
    text("Reqesting data from satelitte", 10,300)
  }
 
  if(keyDown("R")){
    upLinkRight.visible = true
    text("Reqesting data from satelitte", 300,300)
  }
  
  
  
}