//Define components to appear and add make them to appear
var btnBlackPencil = document.getElementById("btnBlackPencil");

var btnRedPencil = document.getElementById("btnRedPencil");

var btnEraser = document.getElementById("btnEraser");

var btnBlackBucket = document.getElementById("btnBlackBucket");

var btnRedBucket = document.getElementById("btnRedBucket");

var btnPreviousFrame = document.getElementById("btnPreviousFrame");

var btnNextFrame = document.getElementById("btnNextFrame");

var btnNewFrame = document.getElementById("btnNewFrame");

var btnCopyFrame = document.getElementById("btnCopyFrame");

var btnPasteFrame = document.getElementById("btnPasteFrame");

var btnDeleteFrame = document.getElementById("btnDeleteFrame");

var btnGenerate = document.getElementById("btnGenerate");

/*var btnUndo = new Button(200, 0, 100, 100, imgBtnUndo);
btnUndo.addComponent();*/

/*var btnRedo = new Button(302, 0, 100, 100, imgBtnRedo);
btnRedo.addComponent();*/

/*var drawCanvas = new drawingCanvas(102, 100, 1090, 425);
drawCanvas.addComponent();*/
//var drawCanvas = document.getElementById("myCanvasArea");

var txtFrames = document.getElementById("txtFrames");

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

btnPreviousFrame.onclick = function(){
    if(framePointer == 0){
        return false;
    }
    console.log("Previous Frame Button selected");
    saveFrame(getCanvasData());
    framePointer--;
    ctx.putImageData(framesList[framePointer], 0, 0);
    txtFrames.update();
}

btnNextFrame.onclick = function(){
    console.log("Next Frame Button selected");
    if(framePointer == (framesList.length - 1)){
        return false;
    }
    saveFrame(getCanvasData());
    framePointer++;
    ctx.putImageData(framesList[framePointer], 0, 0);
    txtFrames.update();
}

btnNewFrame.onclick = function(){
    console.log("New Frame Button selected");
    saveFrame(getCanvasData());
    framePointer++;
    myCanvasArea.clearCanvas();
    framesList.splice(framePointer, 0, getCanvasData());
    txtFrames.update();
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
        encoder.addFrame(framesList[i].data, true);
        console.log("Finished frame");
        console.log(Date.now());
    }

    encoder.finish();
    console.log("Finished finish");
    console.log(Date.now());
    
    encoder.download("download.gif");
}

/*btnUndo.onclick = function(){
    console.log("Undo Button selected");
}

btnRedo.onclick = function(){
    console.log("Redo Button selected");
}*/

txtFrames.update = function(){
    let textFrames = (framePointer + 1) + "/" + framesList.length;
    txtFrames.textContent = textFrames;
}