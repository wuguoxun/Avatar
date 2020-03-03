class eyebrown {
  
  constructor(_xPos,_yPos){
    this.xPos=_xPos;
    this.yPos=_yPos;
  }
  
  display(){

  push();
  translate(this.xPos,this.yPos);
 fill(0);
  beginShape();  
vertex(width * .2,height * .25);
vertex(width * .3,height * .25);
vertex(width * .17,height * .2);
vertex(width * .05,height * .35);
endShape(CLOSE);
  beginShape();  
vertex(width * .47,height * .2);
vertex(width * .4,height * .23);
vertex(width * .45,height * .15);
vertex(width * .65,height * .25);
endShape(CLOSE);
push();
rotate(-5);
fill(230,50,70);
beginShape();
curveVertex(width*.15, height*.75);
curveVertex(width*.15, height*.75);
curveVertex(width*.13, height*.8);
curveVertex(width*.3, height*.85);
curveVertex(width*.4, height*.85);
curveVertex(width*.5, height*.8);
curveVertex(width*.5, height*.75);
curveVertex(width*.5, height*.75);
endShape();
pop();
pop();

  }
  move(){
    if(mouseX> width*0.1 && mouseX< width*0.6 && mouseY> height *0.35 && mouseY < height*0.65){
   this.yPos+=2; 
    }else{
      this.yPos=0
    }
  }
  
}

