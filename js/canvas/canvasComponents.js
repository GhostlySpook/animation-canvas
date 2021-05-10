var myCanvasArea = {
  canvas: document.getElementById("myCanvasArea"),
  topCanvas: document.getElementById("topCanvas"),
  start: function () {

    //Define size
    this.canvas.width = window.screen.availWidth * 0.86;
    //this.canvas.height = window.screen.availHeight * 0.858;
    this.canvas.height = window.innerHeight;
    /*this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;*/
    this.topCanvas.width = this.canvas.width;
    this.topCanvas.height = this.canvas.height;

    this.context = this.canvas.getContext("2d");
    this.topContext = this.topCanvas.getContext("2d");

    this.context.fillStyle = "#ffffff";
    //this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
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
var topCtx = undefined;

function startCanvas(){
  myCanvasArea.start();
  ctx = myCanvasArea.context;
  topCtx = myCanvasArea.topContext;

  //Starting canvas config
  ctx.lineWidth = 10;

  framesList.push(ctx.getImageData(0, 0, myCanvasArea.canvas.width, myCanvasArea.canvas.height));
  clearRedo();
  txtFrames.update();

  //Start elements config
  initElements();

  include('js/canvas/canvasData.js');
  include('js/canvas/topCanvas.js');
}