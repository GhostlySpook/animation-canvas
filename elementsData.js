//Define components to appear and add make them to appear
/*var btnBlackPencil = new Button(0, 0, 100, 100, imgBtnBlackPencil);
btnBlackPencil.addComponent();*/
var btnBlackPencil = document.getElementById("btnBlackPencil");

/*var btnRedPencil = new Button(0, 102, 100, 100, imgBtnRedPencil);
btnRedPencil.addComponent();*/
var btnRedPencil = document.getElementById("btnRedPencil");

/*var btnEraser = new Button(0, 204, 100, 100, imgBtnEraser);
btnEraser.addComponent();*/
var btnEraser = document.getElementById("btnEraser");

/*var btnBlackBucket = new Button(0, 306, 100, 100, imgBtnBlackBucket);
btnBlackBucket.addComponent();*/
var btnBlackBucket = document.getElementById("btnBlackBucket");

/*var btnRedBucket = new Button(0, 408, 100, 100, imgBtnRedBucket);
btnRedBucket.addComponent();*/
var btnRedBucket = document.getElementById("btnRedBucket");

/*var btnPreviousFrame = new Button(900, 550, 100, 100, imgBtnPreviousFrame);
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
btnRedo.addComponent();*/

/*var drawCanvas = new drawingCanvas(102, 100, 1090, 425);
drawCanvas.addComponent();*/
//var drawCanvas = document.getElementById("myCanvasArea");

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
    //drawCanvas.eraserRadius = 10;
    myCanvasArea.toolSelected = drawingCanvasTools.ERASER;

    ctx.strokeStyle = myCanvasArea.backgroundColour;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = myCanvasArea.eraserRadius * 2;
}

btnBlackBucket.onclick = function(){
    myCanvasArea.toolSelected = drawingCanvasTools.BUCKET;
    myCanvasArea.colourSelected = hexColour.BLACK;
    //ctx.fillStyle = hexColour.BLACK;
    console.log("Black Bucket selected");
}

btnRedBucket.onclick = function(){
    myCanvasArea.toolSelected = drawingCanvasTools.BUCKET;
    myCanvasArea.colourSelected = hexColour.RED;
    //ctx.fillStyle = hexColour.RED;
    console.log("Red Bucket selected");
}

/*btnPreviousFrame.onclick = function(){
    console.log("Previous Frame Button selected");
}

btnNextFrame.onclick = function(){
    console.log("Next Frame Button selected");
}

btnNewFrame.onclick = function(){
    console.log("New Frame Button selected");
}

btnCopyFrame.onclick = function(){
    console.log("Copy Frame Button selected");
}

btnPasteFrame.onclick = function(){
    console.log("Paste Frame Button selected");
}

btnDeleteFrame.onclick = function(){
    console.log("Delete Frame Button selected");
    drawCanvas.clear();
}

btnUndo.onclick = function(){
    console.log("Undo Button selected");
}

btnRedo.onclick = function(){
    console.log("Redo Button selected");
}*/