drawingCanvas.prototype = new Component();

//Constants

const drawingCanvasTools = {
    NONE: 0,
    BRUSH: 1,
    BUCKET: 2,
    ERASER: 3
}

const hexColour = {
    BLACK: "#000000",
    RED: "#ff0000",
    WHITE: "#ffffff"
}

//New properties!
drawingCanvas.prototype.brushRadius = 0;
drawingCanvas.prototype.toolSelected = null;
drawingCanvas.prototype.colourSelected = null;

drawingCanvas.prototype.isDrawing = false;

//Constructor
function drawingCanvas(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = null;

    this.brushRadius = 0;
    this.toolSelected = drawingCanvasTools.BRUSH;
    this.colourSelected = drawingCanvasTools.BLACK;
};

//Drawing methods
drawingCanvas.prototype.draw = function(px, py){
    //console.log("Canvas clicked");
    switch(this.toolSelected){
        case drawingCanvasTools.NONE:
            //console.log("Drawing Canvas- Tool: Nothing");
            break;
        case drawingCanvasTools.BRUSH:
            //console.log("Drawing Canvas- Tool: Brush");
            ctx.fillStyle = this.colourSelected;
            //console.log(this.colourSelected);
            ctx.fillRect(px, py, 10, 10);
            break;
    }
}

drawingCanvas.prototype.update = function(){
    ctx.fillStyle = hexColour.WHITE;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

//Events handling
drawingCanvas.prototype.onMouseDown = function(e) {
    //console.log("Drawing Canvas selected");

    let px = e.pageX;
    let py = e.pageY;

    if(this.checkPointCollision(px, py)){
        this.draw(px, py);
        this.isDrawing = true;
    }
}

drawingCanvas.prototype.onMouseUp = function(e){
    this.isDrawing = false;
}

drawingCanvas.prototype.onMouseMove = function(e){
    let px = e.pageX;
    let py = e.pageY;

    if(this.isDrawing && this.checkPointCollision(px,py)){
        this.draw(e.pageX, e.pageY);
    }
}