/*function include(file) {

  var script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}*/

var cWidth = window.innerWidth;
var cHeight = window.innerHeight;

var myCanvasArea = {
  canvas: document.createElement("canvas"),
  start: function () {

    //Define size
    this.canvas.width = cWidth;
    this.canvas.height = cHeight;

    //this.canvas.position = "absolute";


    //Define event handlers
    //this.canvas.onclick = onClickEventHandler();
    this.canvas.addEventListener("click", function(e){onClickEventHandler(e);});
    this.canvas.addEventListener("mousedown", function(e){onMouseDownEventHandler(e);});
    this.canvas.addEventListener("mouseup", function(e){onMouseUpEventHandler(e);});
    this.canvas.addEventListener("mousemove", function(e){onMouseMoveEventHandler(e);});

    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    //this.interval = setInterval(updateArea, delay);
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

//Every component in the canvas is going to be here
var componentsList = [];
var componentId = 0;

var ctx = undefined;

/* Objects to be used */
include('canvas/components/components.js')
include('canvas/components/buttons.js');
include('canvas/components/drawingCanvas.js');

/*Custom behaviour information*/
include('canvas/canvasData.js');

/*Event handler*/
include('canvas/eventHandler.js');

function drawComponents(){
  let length = componentsList.length;
  for(let i = 0; i < length; i++){
    componentsList[i].update();
    console.log("Printed");
  }
}

function startCanvas(){
  myCanvasArea.start();
  ctx = myCanvasArea.context;
  //loadComponents();
  drawComponents();
}