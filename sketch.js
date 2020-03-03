let eyebrown1;
let angryFace1;
let R = -10;
let close2 = 150;
let close1 = 255;
let tear1;
let tear2;
let tear3;
let tear4;
let tear5;
let tear6;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  tear1 = new Tear(width * .12, height * .7, .8, 4);
  tear2 = new Tear(width * .2, height * .75, .7, 2);
  tear3 = new Tear(width * .6, height * .5, .8, 5);
  tear4 = new Tear(width * .65, height * .6, .7, 4);
  tear5 = new Tear(width * .15, height * .9, .85, 2.5);
  tear6 = new Tear(width * .65, height * .9, .85, 3);
  eyebrown1 = new eyebrown(width * .0, height * .2);
  angryFace1 = new angryFace(width * .0, height * .2);


}


function draw() {
  background(236, 194, 237);

  eyebrown1.display();
  eyebrown1.move();


  eyeMove = map(mouseX, 0, width, 95, 110);
  eyeClose = 0
  drawEyeL();
  drawEyeR();
  drawEyeBall(eyeMove);

  tear1.display();
  tear1.move();
  tear2.display();
  tear2.move();
  tear3.display();
  tear3.move();
  tear4.display();
  tear4.move();
  tear5.display();
  tear5.move();
  tear6.display();
  tear6.move();

  if (mouseIsPressed && mouseX > width * 0.1 && mouseX < width * 0.6 && mouseY > height * 0.35 && mouseY < height * 0.65) {

    angryFace1.display();
  }
}

function mousePressed() {
  if (mouseX > width * 0.1 && mouseX < width * 0.6 && mouseY > height * 0.35 && mouseY < height * 0.65) {
    close2 = -close2;
    close1 = -close1;
    console.log("mouse press");
  } else if (mouseX < width * 0.1 || mouseX > width * 0.65) {
    console.log("mouse press2");

  }
}

function drawEyeL() {
  //eyeL
  push();
  ellipse(width * .2, height * .5, width * .3, height * .35);
  fill(close2);
  ellipse(width * .13, height * .48, width * .1, height * .15);
  pop();
}

function drawEyeR() {
  //eyeR
  push();
  ellipseMode(CENTER);
  translate(-width * .1, height * .07);
  rotate(-10);
  ellipseMode(CENTER);
  ellipse(width * .5, height * .48, width * .35, height * .4);
  fill(close2);
  ellipse(width * .45, height * .46, width * .15, height * .2);
  pop();
}

function drawEyeBall(xPos) {
  push();
  fill(0);
  ellipse(xPos - 50, height * .48, width * .06, height * .1);
  fill(close1);
  ellipse(xPos - 50, height * .455, width * .03, height * .03);
  translate(-width * .1, height * .07);
  rotate(R);
  ellipseMode(CENTER);
  fill(0);
  ellipse(xPos + 75, height * .47, width * .1, height * .14);
  fill(close1);
  ellipse(xPos + 75, height * .44, width * .05, height * .05);
  pop();
}