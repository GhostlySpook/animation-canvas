//Define components to appear and add make them to appear
var btnBlackPencil = document.getElementById("btnBlackPencil");

var btnRedPencil = document.getElementById("btnRedPencil");

var btnEraser = document.getElementById("btnEraser");

var btnBlackBucket = document.getElementById("btnBlackBucket");

var btnRedBucket = document.getElementById("btnRedBucket");

var btnBomb = document.getElementById("btnBomb");

var btnUndo = document.getElementById("btnUndo");

var btnRedo = document.getElementById("btnRedo");

var btnSettings = document.getElementById("btnSettings");

var btnPreviousFrame = document.getElementById("btnPreviousFrame");

var btnNextFrame = document.getElementById("btnNextFrame");

var btnNewFrame = document.getElementById("btnNewFrame");

var btnCopyFrame = document.getElementById("btnCopyFrame");

var btnPasteFrame = document.getElementById("btnPasteFrame");

var btnDeleteFrame = document.getElementById("btnDeleteFrame");

var btnGenerate = document.getElementById("btnGenerate");

//Define customized behaviour for components
btnBlackPencil.onclick = function(){
    console.log("Black Pencil selected");
    myCanvasArea.toolSelected = drawingCanvasTools.BRUSH;
    myCanvasArea.colourSelected = hexColour.BLACK;

    ctx.strokeStyle = hexColour.BLACK;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = myCanvasArea.brushRadius;
}

btnRedPencil.onclick = function(){
    console.log("Red Pencil selected");
    myCanvasArea.toolSelected = drawingCanvasTools.BRUSH;
    myCanvasArea.colourSelected = hexColour.RED;

    ctx.strokeStyle = hexColour.RED;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = myCanvasArea.brushRadius;
}

btnEraser.onclick = function(){
    console.log("Eraser selected");
    myCanvasArea.toolSelected = drawingCanvasTools.ERASER;

    ctx.strokeStyle = myCanvasArea.backgroundColour;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = myCanvasArea.eraserRadius * 2;
}

btnBlackBucket.onclick = function(){
    myCanvasArea.toolSelected = drawingCanvasTools.BUCKET;
    myCanvasArea.colourSelected = hexColour.BLACK;
    console.log("Black Bucket selected");
}

btnRedBucket.onclick = function(){
    myCanvasArea.toolSelected = drawingCanvasTools.BUCKET;
    myCanvasArea.colourSelected = hexColour.RED;
    console.log("Red Bucket selected");
}

btnBomb.onclick = function(){
    myCanvasArea.clearCanvas();
    addRedo(getCanvasData());
}

btnUndo.onclick = function(){
    console.log("Undo button");

    //If it is the first step, don't do anything
    if(redoPointer == 0){
        return false;
    }

    //Show previous frame
    redoPointer--;
    ctx.putImageData(redoFramesList[redoPointer], 0, 0);

    console.log("Pointer: ");
    console.log(redoPointer);

    console.log(redoFramesList);
}

btnRedo.onclick = function(){
    console.log("Redo button");

    //If it is the last frame, don't do anything
    if(redoPointer == (redoFramesList.length - 1)){
        return false;
    }

    //Show previous frame
    redoPointer++;
    ctx.putImageData(redoFramesList[redoPointer], 0, 0);
}

btnPreviousFrame.onclick = function(){
    console.log("Previous Frame Button selected");

    //If it is the first frame, don't do anything
    if(framePointer == 0){
        return false;
    }

    //Show previous frame
    saveFrame(getCanvasData());
    framePointer--;
    ctx.putImageData(framesList[framePointer], 0, 0);

    //Update text numbers
    txtFrames.update();

    //Update frame before new one
    topCanvas.showPrevious();

    //Clear redo list
    clearRedo();
}

btnNextFrame.onclick = function(){
    console.log("Next Frame Button selected");

    //If it is the last frame, don't do anything
    if(framePointer == (framesList.length - 1)){
        return false;
    }

    //Show next frame
    saveFrame(getCanvasData());
    framePointer++;
    ctx.putImageData(framesList[framePointer], 0, 0);

    //Update text numbers
    txtFrames.update();

    //Update frame before new one
    topCanvas.showPrevious();

    //Clear redo list
    clearRedo();
}

btnNewFrame.onclick = function(){
    console.log("New Frame Button selected");
    saveFrame(getCanvasData());
    framePointer++;
    myCanvasArea.clearCanvas();
    framesList.splice(framePointer, 0, getCanvasData());
    txtFrames.update();

    //Update frame before new one
    topCanvas.showPrevious();

    clearRedo();
}

btnCopyFrame.onclick = function(){
    console.log("Copy Frame Button selected");
    frameClipboard = getCanvasData();
}

btnPasteFrame.onclick = function(){
    console.log("Paste Frame Button selected");
    if(frameClipboard == null)
        return
    ctx.putImageData(frameClipboard, 0, 0);

    addRedo(getCanvasData());
}

btnDeleteFrame.onclick = function(){
    myCanvasArea.clearCanvas();
    if(framesList.length == 1)
        return
    framesList.splice(framePointer, 1);
    if(framePointer > 0)
        framePointer--;
    ctx.putImageData(framesList[framePointer], 0, 0);
    txtFrames.update();
    console.log("Delete Frame Button selected");

    //Update frame before new one
    topCanvas.showPrevious();

    clearRedo();
}

btnGenerate.onclick = function(){
    saveFrame(getCanvasData());

    var encoder = new GIFEncoder();
    console.log("Finished Initiliazing encoder");
    console.log(Date.now());

    encoder.setRepeat(0);
    console.log("Finished Set repeat");
    console.log(Date.now());

    encoder.setDelay(500);
    console.log("Finished Set delay");
    console.log(Date.now());

    encoder.start();
    console.log("Finished start");
    console.log(Date.now());

    encoder.setSize(myCanvasArea.canvas.width, myCanvasArea.canvas.height);
    console.log("Finished setting size");
    console.log(Date.now());

    let length = framesList.length;
    for(let i = 0; i < length; i++){
        //encoder.addFrame(framesList[i].data, true);
        let frame = frameBackgroundColoured(i);
        encoder.addFrame(frame.data, true);
        console.log("Finished frame");
        console.log(Date.now());
    }

    encoder.finish();
    console.log("Finished finish");
    console.log(Date.now());
    
    encoder.download("download.gif");
}