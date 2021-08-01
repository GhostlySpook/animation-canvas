var myCanvasArea = {
  canvas: document.getElementById("myCanvasArea"),
  bottomCanvas: document.getElementById("bottomCanvas"),
  svgBackground: document.getElementById("svgBackground"),
  rectBackground: document.getElementById("rectBackground"),
  //svgBackground: document.getElementById("svgBackground"),
  //backgroundDiv:document.getElementById("backgroundDiv"),
  start: function () {

    //Define size
    this.canvas.width = window.innerWidth * 0.95;
    //this.canvas.width = window.screen.availWidth * 0.86;
    //this.canvas.height = window.screen.availHeight * 0.858;
    this.canvas.height = window.innerHeight * 0.83;
    /*this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;*/
    this.bottomCanvas.width = this.canvas.width;
    this.bottomCanvas.height = this.canvas.height;

    this.svgBackground.style.width = this.canvas.width;
    this.svgBackground.style.height = this.canvas.height;

    this.rectBackground.style.width = svgBackground.style.width;
    this.rectBackground.style.height = svgBackground.style.height;

    //this.backgroundDiv.style.width = this.canvas.width + "px";
    //this.backgroundDiv.style.height = this.canvas.height + "px";

    this.context = this.canvas.getContext("2d");
    this.bottomContext = this.bottomCanvas.getContext("2d");

    this.context.fillStyle = "#ffffff";
    //this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
    //this.frameNo = 0;
  },
  //Stops the game
  /*stop: function () {
    clearInterval(this.interval);
  },*/
  //Cleans the canvas    
  /*clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }*/
}

var ctx = undefined;
var bottomCtx = undefined;

function startCanvas(){
  myCanvasArea.start();
  ctx = myCanvasArea.context;
  bottomCtx = myCanvasArea.bottomContext;

  //Starting canvas config
  ctx.lineWidth = 10;

  //Frames configuration
  framesList.push(ctx.getImageData(0, 0, myCanvasArea.canvas.width, myCanvasArea.canvas.height));
  clearRedo();

  selectToolButton(btnPencilMenu);
  showBtnPencilMenu();
  //txtFrames.update();

  //Start elements config
  initElements();

  include('js/canvas/canvasData.js');
  include('js/canvas/bottomCanvas.js');
}