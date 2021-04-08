/*function include(file) {

  var script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}*/

//var cWidth = window.innerWidth / 2;
//var cHeight = window.innerHeight / 2;

var myCanvasArea = {
  //canvas: document.createElement("canvas"),
  canvas: document.getElementById("myCanvasArea"),
  start: function () {

    //Define size
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;

    //this.canvas.position = "absolute";


    //Define event handlers
    //this.canvas.onclick = onClickEventHandler();
    //this.canvas.addEventListener("click", function(e){onClickEventHandler(e);});
    //this.canvas.addEventListener("mousedown", function(e){this.onclick()});
    //this.canvas.addEventListener("mouseup", function(e){onMouseUpEventHandler(e);});
    //this.canvas.addEventListener("mousemove", function(e){onMouseMoveEventHandler(e);});

    this.context = this.canvas.getContext("2d");
    this.context.fillStyle = "#ffffff";
    this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
    //document.body.insertBefore(this.canvas, document.body.childNodes[0]);
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
//var componentsList = [];
//var componentId = 0;

var ctx = undefined;

/* Objects to be used */
//include('canvas/components/components.js');
//include('canvas/components/buttons.js');
//include('canvas/components/drawingCanvas.js');

/*Custom behaviour information*/
//include('canvas/canvasData.js');

/*Event handler*/
//include('canvas/eventHandler.js');

/*function drawComponents(){
  let length = componentsList.length;
  for(let i = 0; i < length; i++){
    componentsList[i].update();
    console.log("Printed");
  }
}*/

function startCanvas(){
  myCanvasArea.start();
  //myCanvasArea.context = myCanvasArea.canvas.getContext("2d");
  ctx = myCanvasArea.context;
  ctx.lineWidth = 10;
  include('./canvasData.js');
  //loadComponents();
  //drawComponents();
}