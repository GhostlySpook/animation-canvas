//drawingCanvas.prototype = new Component();

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

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}  

//New properties!
//drawingCanvas.prototype.backgroundColour = hexColour.WHITE;
myCanvasArea.backgroundColour = hexColour.WHITE;

//drawingCanvas.prototype.brushRadius = 0;
myCanvasArea.brushRadius = 5;
myCanvasArea.eraserRadius = 10;

myCanvasArea.toolSelected = null;
myCanvasArea.colourSelected = null;

myCanvasArea.isDrawing = false;

//ctx = myCanvasArea.context;

//Constructor
/*function drawingCanvas(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = null;

    this.brushRadius = 10;
    this.eraserRadius = 10;
    this.toolSelected = drawingCanvasTools.NONE;
    this.colourSelected = hexColour.BLACK;
    //console.log(this.toolSelected);
    //console.log(this.colourSelected);
};*/

//Drawing methods
myCanvasArea.draw = function(px, py){
    px = Math.floor(px);
    py = Math.floor(py);
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
            
            //ctx.lineWidth = 100;
            this.context.lineTo(px, py);
            /*console.log("Drawing: ");
            console.log(px);
            console.log(py);*/
            //this.context.strokeStyle = "#ff0000";
            this.context.stroke();
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
        case drawingCanvasTools.BUCKET:
            this.bucketFill(px, py, this.colourSelected);
            this.isDrawing = false;
            break;
    }
}

//Fill relative to the drawing canvas position
myCanvasArea.bucketFill = function(x, y, colour){

    //1. Get the pixel of the background pixel
    console.log("Step one");
    let pixelData = ctx.getImageData(x, y, 1, 1);
    let canvasData = ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

    /*let canvasX = this.x;
    let canvasY = this.y;*/
    let canvasWidth = this.canvas.width;

    //2. Get the colour of the pixel from the background
    let backData = {
        r: pixelData.data[0],
        g: pixelData.data[1],
        b: pixelData.data[2]
    };

    //3. Get colour of the one selected
    //let fillData = hexToRgb(this.colourSelected);
    let fillData = hexToRgb(colour);

    //4. Create queue array
    queue = []

    //Return if the pixel is inside the area to be filled, relative to drawing canvas
    inside = function(x,y){
        p = (x + y*canvasWidth) * 4;

        return (canvasData.data[p] == backData.r && canvasData.data[(p+1)] == backData.g && canvasData.data[(p+2)] == backData.b)
        /*let pixelData = ctx.getImageData((x + canvasX), (y + canvasY), 1, 1)
        
        return (pixelData.data[0] == backData.r && pixelData.data[1] == backData.g && pixelData.data[2] == backData.b)*/
    }

    //Scan for new seeds
    scan = function(lx, rx, y){
        let added = false;
        for(let x = lx; x <= rx; x++){
            if(!inside(x, y)){
                added = false;
            }
            else if(!added){
                let s = {
                    x: x,
                    y: y
                }
                queue.push(s);
                added = true;
            }
        }
    }

    //Change the colour of that pixel
    set = function(x, y){
        //ctx.fillRect((canvasX + x), (canvasY + y), 1, 1);
        p = (x + y*canvasWidth) * 4;

        canvasData.data[p] = fillData.r;
        canvasData.data[(p+1)] = fillData.g;
        canvasData.data[(p+2)] = fillData.b;
    }

    let s = {
        x: x,
        y: y
    }

    //4. Filling loop
    console.log("Step five");
    if(!inside(s.x,s.y)){
        return
    }

    // 5. Get first seed
    console.log("Step six");
    queue.push(s);

    while(queue.length > 0 && queue.length < 5000){
        //console.log(queue.length);
        let current = queue.shift();
        //console.log("Length of queue: " + queue.length);
        let x = current.x;
        let y = current.y;
        
        let lx = current.x;

        while(inside((lx-1), y)){
            set((lx-1), y);
            lx--;
        }
        while(inside(x, y)){
            set(x, y);
            x++;
        }
        scan(lx, (x-1), (y+1));
        scan(lx, (x-1), (y-1));
    }
    console.log("Step seven");
    ctx.putImageData(canvasData, 0, 0);
}

myCanvasArea.clearCanvas = function(){
    ctx.fillStyle = this.backgroundColour;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
}

/*myCanvasArea.update = function(){
    ctx.fillStyle = hexColour.WHITE;
    //ctx.getImageData(this.x, this.y, this.width, this.height);
    ctx.fillRect(this.x, this.y, this.width, this.height);
}*/

//Events handling
myCanvasArea.canvas.onmousedown = function(e) {
    //console.log("Drawing Canvas selected");
    var rect = e.target.getBoundingClientRect();
    /*console.log(rect);

    console.log("FROM EVENT:");
    console.log(e.pageX);
    console.log(e.pageY);*/

    let px = e.pageX - rect.left;
    let py = e.pageY - rect.top;
    /*console.log("Supposed to be:")
    console.log(px);
    console.log(py);*/

    //if(this.checkPointCollision(px, py)){
        ctx.beginPath();
        ctx.moveTo(px, py);
        myCanvasArea.draw(px, py);
        myCanvasArea.isDrawing = true;
    //}
}

myCanvasArea.canvas.onmouseup = function(e){
    myCanvasArea.isDrawing = false;
}

myCanvasArea.canvas.onmousemove = function(e){
    //console.log("Movement");
    var rect = e.target.getBoundingClientRect();

    let px = e.pageX - rect.left;
    let py = e.pageY - rect.top;

    /*if(this.isDrawing && this.checkPointCollision(px,py)){
        this.draw(e.pageX, e.pageY);
    }*/
    if(myCanvasArea.isDrawing){
        myCanvasArea.draw(px, py);
    }
}