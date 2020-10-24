var pacman,pacmanimg;

function preload(){

pacmanimg=loadImage("pacman/pacman_stand.gif")
}

function setup() {
  createCanvas(800,400);
  pacman=createSprite(400, 200, 50, 50);
  pacman.addImage(pacmanimg);
}

function draw() {
  background(0);  
  drawSprites();
}