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

//Define customized behaviour for components
btnBlackPencil.onClick = function(){
    console.log("Black Pencil selected");
}

btnRedPencil.onClick = function(){
    console.log("Red Pencil selected");
}

btnEraser.onClick = function(){
    console.log("Eraser selected");
}

btnBlackBucket.onClick = function(){
    console.log("Black Bucket selected");
}

btnRedBucket.onClick = function(){
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
}

btnUndo.onClick = function(){
    console.log("Undo Button selected");
}

btnRedo.onClick = function(){
    console.log("Redo Button selected");
}