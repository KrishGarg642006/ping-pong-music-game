var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(90,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(290,580,200,30);
    block2.shapeColor = "orange";
    
    block3 = createSprite(493,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(695,580,200,30);
    block4.shapeColor = "red";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 25,25);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=8;
    ball.velocityY=-8;
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
   





    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && (ball.bounceOff(block1)) ){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)&&(ball.bounceOff(block2))){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
       music.pause();
       ball.velocityX=0;
       ball.velocityY=0;
        //write code to stop music
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball) && (ball.bounceOff(block3))){
        ball.shapeColor = "green";
        music.play();
    }
    if(block4.isTouching(ball)&&(ball.bounceOff(block4)) ){
        ball.shapeColor = "red";
        music.play();
    }
    //write code to bounce off ball from the block4

    drawSprites();
}
