class Tear {

  constructor(xPos2, yPos2, size2, speed2) {
    this.xPos = xPos2;
    this.yPos = yPos2;
    this.size = size2;
    this.speed = speed2;
  }

  display() {

    push();
    scale(this.size);
    translate(this.xPos, this.yPos);
    fill(187, 213, 219);
    circle(0, 320, width * .1);
    pop();
  }
  move() {
    if (this.yPos < 1000 && mouseX > width * 0.1 && mouseX < width * 0.6 && mouseY > height * 0.35 && mouseY < height * 0.65) {
      this.yPos += this.speed;
    } else {
      this.yPos = -20;
    }
  }

}