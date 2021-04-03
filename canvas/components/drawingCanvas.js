drawingCanvas.prototype = new Component();

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

function drawingCanvas(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = undefined;
};

drawingCanvas.prototype.brushRadius = 0;
drawingCanvas.prototype.toolSelected = drawingCanvasTools.BRUSH;
drawingCanvas.prototype.colourSelected = drawingCanvasTools.BLACK;

//Events handling
drawingCanvas.prototype.onMouseDown = function(e) {
    console.log("Drawing Canvas selected");

    let px = e.pageX;
    let py = e.pageY;
    //console.log("Canvas clicked");
    switch(this.toolSelected){
        case drawingCanvasTools.NONE:
            console.log("Drawing Canvas- Tool: Nothing");
            break;
        case drawingCanvasTools.BRUSH:
            console.log("Drawing Canvas- Tool: Brush");
            ctx.fillStyle = this.colourSelected;
            console.log(this.colourSelected);
            ctx.fillRect(px, py, 10, 10);
            break;
    }
}

drawingCanvas.prototype.update = function(){
    ctx.fillStyle = hexColour.WHITE;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}