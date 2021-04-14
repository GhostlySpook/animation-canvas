//Constants

//Constants refering to tools
const drawingCanvasTools = {
    NONE: 0,
    BRUSH: 1,
    BUCKET: 2,
    ERASER: 3
}

//Constants refering to hex codes for colours
const hexColour = {
    BLACK: "#000000",
    RED: "#ff0000",
    WHITE: "#ffffff"
}

//Returns an object containing the RGB from a hex colour value
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}  

//New properties!
myCanvasArea.backgroundColour = hexColour.WHITE;

myCanvasArea.brushRadius = 10;
myCanvasArea.eraserRadius = 10;

myCanvasArea.toolSelected = null;
myCanvasArea.colourSelected = null;

myCanvasArea.isDrawing = false;

//Drawing methods
myCanvasArea.draw = function(px, py){
    px = Math.floor(px);
    py = Math.floor(py);
    switch(this.toolSelected){
        case drawingCanvasTools.NONE:
            break;
        case drawingCanvasTools.BRUSH:
            this.context.lineTo(px, py);
            this.context.stroke();
            break;
        case drawingCanvasTools.ERASER:
            ctx.lineTo(px, py);
            ctx.stroke();
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

    let canvasWidth = this.canvas.width;

    //2. Get the colour of the pixel from the background
    let backData = {
        r: pixelData.data[0],
        g: pixelData.data[1],
        b: pixelData.data[2]
    };

    //3. Get colour of the one selected
    let fillData = hexToRgb(colour);

    //4. Create queue array
    queue = []

    //Return if the pixel is inside the area to be filled, relative to drawing canvas
    inside = function(x,y){
        p = (x + y*canvasWidth) * 4;
        
        let result = (canvasData.data[p] == backData.r && canvasData.data[(p+1)] == backData.g && canvasData.data[(p+2)] == backData.b);

        return result;
    }

    //Scan for new seeds
    scan = function(lx, rx, y){
        let added = false;
        for(let x = lx; x <= rx; x++){
            if(!(inside(x, y))){
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
    let isSameColour = (backData.r == fillData.r && backData.g == fillData.g && backData.b == fillData.b)

    if((!(inside(s.x,s.y))) || isSameColour){
        console.log("Already done");
        return
    }

    // 5. Get first seed
    console.log("Step six");
    queue.push(s);

    while(queue.length > 0 && queue.length < 5000){
        let current = queue.shift();
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

//Events handling
/*myCanvasArea.canvas.onmousedown = function(e) {
    var rect = e.target.getBoundingClientRect();

    let px = e.pageX - rect.left;
    let py = e.pageY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(px, py);
    myCanvasArea.draw(px, py);
    myCanvasArea.isDrawing = true;

}*/
myCanvasArea.canvas.onpointerdown = function(e) {
    var rect = e.target.getBoundingClientRect();

    let px = e.pageX - rect.left;
    let py = e.pageY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(px, py);
    myCanvasArea.draw(px, py);
    myCanvasArea.isDrawing = true;

}

/*myCanvasArea.canvas.onmouseup = function(e){
    myCanvasArea.isDrawing = false;
}*/
myCanvasArea.canvas.onpointerup = function(e){
    console.log("Pointer up!");
    myCanvasArea.isDrawing = false;
}

myCanvasArea.canvas.onmouseout = function(e){
    //myCanvasArea.isDrawing = false;
}

/*myCanvasArea.canvas.onmousemove = function(e){
    var rect = e.target.getBoundingClientRect();

    let px = e.pageX - rect.left;
    let py = e.pageY - rect.top;

    if(myCanvasArea.isDrawing){
        myCanvasArea.draw(px, py);
    }
}*/

myCanvasArea.canvas.onpointermove = function(e){
    //console.log("Pointer move!");
    var rect = e.target.getBoundingClientRect();

    let px = e.pageX - rect.left;
    let py = e.pageY - rect.top;

    if(myCanvasArea.isDrawing){
        myCanvasArea.draw(px, py);
    }
}