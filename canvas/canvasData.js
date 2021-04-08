//Define components to appear and add make them to appear
var btnBlackPencil = new Button(0, 0, 100, 100, imgBtnBlackPencil);
btnBlackPencil.addComponent();

var btnRedPencil = new Button(0, 102, 100, 100, imgBtnRedPencil);
btnRedPencil.addComponent();

var btnEraser = new Button(0, 204, 100, 100, imgBtnEraser);
btnEraser.addComponent();

var btnBlackBucket = new Button(0, 306, 100, 100, imgBtnBlackBucket);
btnBlackBucket.addComponent();

var btnRedBucket = new Button(0, 408, 100, 100, imgBtnRedBucket);
btnRedBucket.addComponent();

var btnPreviousFrame = new Button(900, 550, 100, 100, imgBtnPreviousFrame);
btnPreviousFrame.addComponent();

var btnNextFrame = new Button(1002, 550, 100, 100, imgBtnNextFrame);
btnNextFrame.addComponent();

var btnNewFrame = new Button(1200, 100, 100, 100, imgBtnNewFrame);
btnNewFrame.addComponent();

var btnCopyFrame = new Button(1200, 202, 100, 100, imgBtnCopyFrame);
btnCopyFrame.addComponent();

var btnPasteFrame = new Button(1200, 304, 100, 100, imgBtnPasteFrame);
btnPasteFrame.addComponent();

var btnDeleteFrame = new Button(1200, 406, 100, 100, imgBtnDeleteFrame);
btnDeleteFrame.addComponent();

var btnUndo = new Button(200, 0, 100, 100, imgBtnUndo);
btnUndo.addComponent();

var btnRedo = new Button(302, 0, 100, 100, imgBtnRedo);
btnRedo.addComponent();

var drawCanvas = new drawingCanvas(102, 100, 1090, 425);
drawCanvas.addComponent();

//Define customized behaviour for components
btnBlackPencil.onClick = function(){
    console.log("Black Pencil selected");
    drawCanvas.toolSelected = drawingCanvasTools.BRUSH;
    drawCanvas.colourSelected = hexColour.BLACK;

    ctx.strokeStyle = hexColour.BLACK;
    ctx.lineCap = "round";
    ctx.lineWidth = drawCanvas.brushRadius;
}

btnRedPencil.onClick = function(){
    console.log("Red Pencil selected");
    drawCanvas.toolSelected = drawingCanvasTools.BRUSH;
    drawCanvas.colourSelected = hexColour.RED;

    ctx.strokeStyle = hexColour.RED;
    ctx.lineCap = "round";
    ctx.lineWidth = drawCanvas.brushRadius;
}

btnEraser.onClick = function(){
    console.log("Eraser selected");
    //drawCanvas.eraserRadius = 10;
    drawCanvas.toolSelected = drawingCanvasTools.ERASER;

    ctx.strokeStyle = drawCanvas.backgroundColour;
    ctx.lineCap = "round";
    ctx.lineWidth = drawCanvas.eraserRadius * 2;
}

btnBlackBucket.onClick = function(){
    drawCanvas.toolSelected = drawingCanvasTools.BUCKET;
    drawCanvas.colourSelected = hexColour.BLACK;
    //ctx.fillStyle = hexColour.BLACK;
    console.log("Black Bucket selected");
}

btnRedBucket.onClick = function(){
    drawCanvas.toolSelected = drawingCanvasTools.BUCKET;
    drawCanvas.colourSelected = hexColour.RED;
    //ctx.fillStyle = hexColour.RED;
    console.log("Red Bucket selected");
}

btnPreviousFrame.onClick = function(){
    console.log("Previous Frame Button selected");
}

btnNextFrame.onClick = function(){
    console.log("Next Frame Button selected");
}

btnNewFrame.onClick = function(){
    console.log("New Frame Button selected");
}

btnCopyFrame.onClick = function(){
    console.log("Copy Frame Button selected");
}

btnPasteFrame.onClick = function(){
    console.log("Paste Frame Button selected");
}

btnDeleteFrame.onClick = function(){
    console.log("Delete Frame Button selected");
    drawCanvas.clear();
}

btnUndo.onClick = function(){
    console.log("Undo Button selected");
}

btnRedo.onClick = function(){
    console.log("Redo Button selected");
}