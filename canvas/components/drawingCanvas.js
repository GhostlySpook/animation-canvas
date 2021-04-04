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
drawingCanvas.prototype.backgroundColour = hexColour.WHITE;

drawingCanvas.prototype.brushRadius = 5;
drawingCanvas.prototype.eraserRadius = 10;

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

    this.brushRadius = 5;
    this.eraserRadius = 10;
    this.toolSelected = drawingCanvasTools.BRUSH;
    this.colourSelected = hexColour.BLACK;
    console.log(this.toolSelected);
    console.log(this.colourSelected);
};

//Drawing methods
drawingCanvas.prototype.draw = function(px, py){
    /*let radio;// = this.brushRadius;
    let size;// = radio*2;*/
    //console.log("Canvas clicked");
    switch(this.toolSelected){
        case drawingCanvasTools.NONE:
            //console.log("Drawing Canvas- Tool: Nothing");
            break;
        case drawingCanvasTools.BRUSH:
            //console.log("Drawing Canvas- Tool: Brush");
            /*radio = this.brushRadius;
            size = radio*2;*/
            /*ctx.strokeStyle = this.colourSelected;
            ctx.lineCap = "round";
            ctx.lineWidth = this.brushRadius * 2;*/
            //console.log(this.colourSelected);
            /*px = px-radio;
            py = py-radio;*/
            //ctx.fillRect(px, py, size, size);

            ctx.lineTo(px, py);
            ctx.stroke();
            break;
        case drawingCanvasTools.ERASER:
            /*radio = this.eraserRadius;
            size = radio*2;*/
            /*ctx.strokeStyle = this.backgroundColour;
            ctx.lineCap = "square";*/
            ctx.lineTo(px, py);
            ctx.stroke();
            /*px = px-radio;
            py = py-radio;*/
           // ctx.fillRect(px, py, size, size);
            break;
    }
}

drawingCanvas.prototype.clear = function(){
    ctx.fillStyle = this.backgroundColour;
    ctx.fillRect(this.x, this.y, this.width, this.height);
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
        ctx.beginPath();
        ctx.moveTo(px, py);
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