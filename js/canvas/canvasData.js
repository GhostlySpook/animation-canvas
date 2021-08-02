//Constants

//Constants refering to tools
const drawingCanvasTools = {
    NONE: 0,
    BRUSH: 1,
    BUCKET: 2,
    ERASER: 3
}

//New properties!
myCanvasArea.backgroundColour = hexColour.WHITE;

myCanvasArea.brushRadius = 10;
myCanvasArea.eraserRadius = 10;

myCanvasArea.toolSelected = drawingCanvasTools.BRUSH;
myCanvasArea.colourSelected = hexColour.BLACK;
ctx.lineCap = "round";
ctx.lineJoin = "round";

myCanvasArea.isDrawing = false;

//Drawing methods
myCanvasArea.draw = function(px, py){
    px = Math.floor(px);
    py = Math.floor(py);

    let pastCompositeOperation = ctx.globalCompositeOperation;
    switch(this.toolSelected){
        case drawingCanvasTools.NONE:
            break;
        case drawingCanvasTools.BRUSH:
            this.context.lineTo(px, py);
            this.context.stroke();
            break;
        case drawingCanvasTools.ERASER:
            //ctx.clearRect(px, py, this.eraserRadius, this.eraserRadius);
            ctx.lineTo(px, py);
            ctx.globalCompositeOperation = 'destination-out';
            ctx.stroke();
            ctx.globalCompositeOperation = pastCompositeOperation;
            break;
        case drawingCanvasTools.BUCKET:
            this.bucketFill(px, py, this.colourSelected);
            this.isDrawing = false;
            updateVisualizerImage(framePointer);
            addRedo(myCanvasArea.getCanvasArea());
            break;
    }
}

//Fill relative to the drawing canvas position
myCanvasArea.bucketFill = function(x, y, colour){

    //1. Get the pixel of the background pixel
    //console.log("Step one");
    let pixelData = ctx.getImageData(x, y, 1, 1);
    let canvasData = ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

    let canvasWidth = this.canvas.width;

    //2. Get the colour of the pixel from the background
    let backData = {
        r: pixelData.data[0],
        g: pixelData.data[1],
        b: pixelData.data[2],
        a: pixelData.data[3]
    };

    //3. Get colour of the one selected
    let fillData = hexToRgb(colour);

    //4. Create queue array
    queue = []

    //Return if the pixel is inside the area to be filled, relative to drawing canvas
    inside = function(x,y){
        p = (x + y*canvasWidth) * 4;
        
        let result = (canvasData.data[p] == backData.r && canvasData.data[(p+1)] == backData.g && canvasData.data[(p+2)] == backData.b && canvasData.data[(p+3)] == backData.a);

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
        canvasData.data[(p+3)] = fillData.a;
    }

    let s = {
        x: x,
        y: y
    }

    //4. Filling loop
    //console.log("Step five");
    let isSameColour = (backData.r == fillData.r && backData.g == fillData.g && backData.b == fillData.b && backData.a == fillData.a)

    if((!(inside(s.x,s.y))) || isSameColour){
        //console.log("Already done");
        return
    }

    // 5. Get first seed
    //console.log("Step six");
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
    //console.log("Step seven");
    ctx.putImageData(canvasData, 0, 0);
}

myCanvasArea.clearCanvas = function(){
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    /*ctx.fillStyle = this.backgroundColour;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);*/
}

//Gets the image data from the drawing canvas
myCanvasArea.getCanvasArea = function(){    
    return ctx.getImageData(0, 0, myCanvasArea.canvas.width, myCanvasArea.canvas.height);
}

//Events handling
myCanvasArea.canvas.onpointerdown = function(e) {
    if(isPlaying){
        return;
    }

    e.preventDefault()
    let coordinates = getLocationOnCanvas(e);

    let px = coordinates.x;
    let py = coordinates.y;
    
    ctx.beginPath();
    ctx.moveTo(px, py);
    myCanvasArea.draw(px, py);
    myCanvasArea.isDrawing = true;

}

myCanvasArea.canvas.onpointerup = function(e){
    //console.log("Pointer up!");
    finishStroke(e);

    /*if(myCanvasArea.isDrawing){

        switch(myCanvasArea.toolSelected){
            case drawingCanvasTools.BRUSH:
                ctx.endStr
            case drawingCanvasTools.ERASER:
                addRedo(myCanvasArea.getCanvasArea());
                break;
        }
    }

    myCanvasArea.isDrawing = false;*/
}

myCanvasArea.canvas.onpointerout = function(e){
    //console.log("Pointer out!");
    finishStroke(e);
}

myCanvasArea.canvas.onpointermove = function(e){
    //console.log("Pointer move!");
    e.preventDefault();
    let coordinates = getLocationOnCanvas(e);

    let px = coordinates.x;
    let py = coordinates.y;

    if(myCanvasArea.isDrawing){
        //console.log("Drawing");
        myCanvasArea.draw(px, py);
    }
}

myCanvasArea.canvas.ontouchmove = function(e){
    e.preventDefault()
    let coordinates = getLocationOnCanvas(e);

    let px = coordinates.x;
    let py = coordinates.y;

    myCanvasArea.draw(px, py);
    
}

myCanvasArea.canvas.ontouchend = function(e){
    //console.log("Touch end!");
    finishStroke(e);
}

myCanvasArea.canvas.ontouchcancel = function(e){
    //console.log("Touch cancel!");
    finishStroke(e);
}

finishStroke = function(e){
    if(isPlaying){
        return;
    }

    e.preventDefault();

    if(myCanvasArea.isDrawing){

        switch(myCanvasArea.toolSelected){
            case drawingCanvasTools.BRUSH:
                //ctx.endStr
            case drawingCanvasTools.ERASER:
                addRedo(myCanvasArea.getCanvasArea());
                updateVisualizerImage(framePointer);
                break;
        }
    }

    myCanvasArea.isDrawing = false;
}

//Get the location of the touch
getLocationOnCanvas = function(e){

    let coordinates = {
        x: 0,
        y: 0
    };

    switch(e.type){
        case 'touchmove':
            coordinates.x = e.touches[0].pageX - e.target.offsetLeft;
            coordinates.y = e.touches[0].pageY - e.target.offsetTop;
            break;
        default:
            coordinates.x = e.pageX - e.target.offsetLeft;
            coordinates.y = e.pageY - e.target.offsetTop;
            break;
    }

    return coordinates;
}