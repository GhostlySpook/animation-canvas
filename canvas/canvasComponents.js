var myCanvasArea = {
  canvas: document.getElementById("myCanvasArea"),
  start: function () {

    //Define size
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;

    this.context = this.canvas.getContext("2d");
    this.context.fillStyle = "#ffffff";
    this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
    this.frameNo = 0;
  },
  //Stops the game
  stop: function () {
    clearInterval(this.interval);
  },
  //Cleans the canvas    
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

var ctx = undefined;

function startCanvas(){
  myCanvasArea.start();
  ctx = myCanvasArea.context;

  //Starting canvas config
  ctx.lineWidth = 10;

  framesList.push(ctx.getImageData(0, 0, myCanvasArea.canvas.width, myCanvasArea.canvas.height));
  txtFrames.update();

  include('canvas/canvasData.js');
}