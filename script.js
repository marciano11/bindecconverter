var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var byte = [];
var decimal = 0;
var bin = [128,64,32,16,8,4,2,1];
var decimalBox = document.getElementById("decimalBox");
var binaryBox = document.getElementById("binaryBox");
var hexBox = document.getElementById("hexBox");

class Bit {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.state = false;
    addEventListener('mousedown',(evt)=> {
      var rect = canvas.getBoundingClientRect()
      var mouseX = evt.clientX - rect.left;
      var mouseY = evt.clientY - rect.top;
    if(mouseX > this.x && mouseX < this.x + 100 && mouseY > this.y && mouseY < this.y+100) {
      this.state = !this.state;
      this.draw();
      }
    })
  }

  draw(){
    context.beginPath();
    if(this.state == true){
      context.fillStyle = "#e2efde";
    } else {
      context.fillStyle = "#0fa3b1";
    }

    context.rect(this.x,this.y,100,100);
    context.stroke();
    context.fill();
    context.closePath();
  }
}

for (var i = 0; i < 8; i++) {
  var bit = new Bit(i*100,0);
  bit.draw();
  byte.push(bit);
}

addEventListener('mouseup', ()=> {
  for (var i = 0; i < byte.length; i++) {
    if(byte[i].state){
      decimal += bin[i];
    }
  }
  decimalBox.value = decimal;
  binaryBox.value = decimal.toString(2)
  hexBox.value =  decimal.toString(16)
})
