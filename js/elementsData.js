/*var btnUndo = new Button(200, 0, 100, 100, imgBtnUndo);
btnUndo.addComponent();*/

/*var btnRedo = new Button(302, 0, 100, 100, imgBtnRedo);
btnRedo.addComponent();*/

/*var drawCanvas = new drawingCanvas(102, 100, 1090, 425);
drawCanvas.addComponent();*/
//var drawCanvas = document.getElementById("myCanvasArea");

include("js/elements/buttons.js");
include("js/elements/settingsMenu.js");
include("js/elements/colourMenu.js");

var txtFrames = document.getElementById("txtFrames");

initElements = function(){
    settingsMenu.init();
    btnColourContainer.init();
}

txtFrames.update = function(){
    let textFrames = (framePointer + 1) + "/" + framesList.length;
    txtFrames.textContent = textFrames;
}