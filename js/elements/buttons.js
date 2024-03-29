//Define components to appear and add make them to appear
var btnBlackPencil = document.getElementById("btnBlackPencil");

//var btnRedPencil = document.getElementById("btnRedPencil");

var btnEraser = document.getElementById("btnEraser");

var btnBlackBucket = document.getElementById("btnBlackBucket");

var btnPencilMenu = document.getElementById("btnPencilMenu");

//var btnRedBucket = document.getElementById("btnRedBucket");

var btnBomb = document.getElementById("btnBomb");

var btnColour = document.getElementById("btnColourContainer");

var btnUndo = document.getElementById("btnUndo");

var btnRedo = document.getElementById("btnRedo");

//var btnPreviousFrame = document.getElementById("btnPreviousFrame");

//var btnNextFrame = document.getElementById("btnNextFrame");

var btnNewFrame = document.getElementById("btnNewFrame");

var btnCopyFrame = document.getElementById("btnCopyFrame");

var btnPasteFrame = document.getElementById("btnPasteFrame");

var btnDeleteFrame = document.getElementById("btnDeleteFrame");

var btnGenerate = document.getElementById("btnGenerate");

var btnPlay = document.getElementById("btnPlay");

var btnStop = document.getElementById("btnStop");

var btnSettings = document.getElementById("btnSettings");

var selectableToolButtons = [
    btnBlackPencil,
    btnBlackBucket,
    btnEraser,
    btnBomb
]

function selectToolButton(btnSelected){
    let length = selectableToolButtons.length;

    for(let i = 0; i < length; i++){
        selectableToolButtons[i].classList.remove("selected");
    }

    btnSelected.classList.add("selected");
}

showPencil = function(){
    btnPencilMenu.style.display = "none";
    btnBlackPencil.style.display = "block";
}

showBtnPencilMenu = function(){
    btnPencilMenu.style.display = "block";
    btnBlackPencil.style.display = "none";
}

showEraser = function(){
    btnEraser.style.display = "block";
    btnBomb.style.display = "none";
}

showBomb = function(){
    btnEraser.style.display = "none";
    btnBomb.style.display = "block";
}

//Define customized behaviour for components
btnBlackPencil.onclick = function(){
    //console.log("Black Pencil selected");
    myCanvasArea.toolSelected = drawingCanvasTools.BRUSH;
    ctx.strokeStyle = myCanvasArea.colourSelected;
    //myCanvasArea.colourSelected = hexColour.BLACK;

    //ctx.strokeStyle = hexColour.BLACK;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = myCanvasArea.brushRadius;

    //Make the pencil menu appear
    showBtnPencilMenu();
    pencilMenu.hide();
    
    //Return the eraser to default
    showEraser();

    selectToolButton(btnPencilMenu);
}

btnPencilMenu.onclick = function(){
    pencilMenu.toggle();
}

btnEraser.style.display = "block";
btnEraser.onclick = function(){
    //console.log("Eraser selected");
    myCanvasArea.toolSelected = drawingCanvasTools.ERASER;

    //ctx.strokeStyle = myCanvasArea.backgroundColour;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = myCanvasArea.eraserRadius * 2;

    /*btnEraser.style.display = "none";
    btnBomb.style.display = "block";*/

    selectToolButton(btnBomb);

    showPencil();
    showBomb();
}

btnBlackBucket.onclick = function(){
    myCanvasArea.toolSelected = drawingCanvasTools.BUCKET;
    //myCanvasArea.colourSelected = hexColour.BLACK;
    //console.log("Black Bucket selected");

    selectToolButton(this);
    showEraser();
    showPencil();
}

/*btnRedBucket.onclick = function(){
    myCanvasArea.toolSelected = drawingCanvasTools.BUCKET;
    myCanvasArea.colourSelected = hexColour.RED;
    console.log("Red Bucket selected");
}*/

btnBomb.onclick = function(){
    if(isPlaying){
        return;
    }

    myCanvasArea.clearCanvas();
    addRedo(getCanvasData());
    updateVisualizerImage(framePointer);
    btnBlackPencil.onclick();

    showEraser();
    showPencil();
    selectToolButton(btnBlackPencil);
}

btnColourClick = () =>{
    console.log("Clicked");
    showEraser();
    colourMenu.toggle();
}

btnColour.addEventListener("click", function(){
    btnColourClick();
});

btnUndo.onclick = function(){
    if(isPlaying){
        return;
    }
    //console.log("Undo button");

    //If it is the first step, don't do anything
    if(redoPointer == 0){
        return false;
    }

    //Show previous frame
    redoPointer--;
    ctx.putImageData(redoFramesList[redoPointer], 0, 0);

    //Update frame visualizer
    updateVisualizerImage(framePointer);

    /*console.log("Pointer: ");
    console.log(redoPointer);

    console.log(redoFramesList);*/
    /*console.log("Redo Pointer: ");
    console.log(redoPointer);*/
}

btnRedo.onclick = function(){
    if(isPlaying){
        return;
    }
    //console.log("Redo button");

    //If it is the last frame, don't do anything
    if(redoPointer == (redoFramesList.length - 1)){
        return false;
    }

    //Show previous frame
    redoPointer++;
    ctx.putImageData(redoFramesList[redoPointer], 0, 0);

    //Update frame visualizer
    updateVisualizerImage(framePointer);

    console.log("Redo Pointer: ");
    console.log(redoPointer);
}

/*btnPreviousFrame.onclick = function(){
    //console.log("Previous Frame Button selected");

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
    bottomCanvas.showPrevious();

    //Clear redo list
    clearRedo();
}*/

/*btnNextFrame.onclick = function(){
    //console.log("Next Frame Button selected");

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
    bottomCanvas.showPrevious();

    //Clear redo list
    clearRedo();
}*/

btnNewFrame.onclick = function(){
    //console.log("New Frame Button selected");
    saveFrame(getCanvasData());
    framePointer++;
    myCanvasArea.clearCanvas();
    framesList.splice(framePointer, 0, getCanvasData());
    //txtFrames.update();

    //Update frame visualizer
    insertInFrameVisualizer(framePointer);

    //Update the frame displayed behind the canvas
    bottomCanvas.showPrevious();

    //updateFrameVisualizer();
    clearRedo();
}

btnCopyFrame.onclick = function(){
    //console.log("Copy Frame Button selected");
    frameClipboard = getCanvasData();
}

btnPasteFrame.onclick = function(){
    //console.log("Paste Frame Button selected");
    if(frameClipboard == null)
        return
        
    saveFrame(getCanvasData());
    framePointer++;
    myCanvasArea.clearCanvas();
    framesList.splice(framePointer, 0, getCanvasData());


    ctx.putImageData(frameClipboard, 0, 0);

    //updateFrameVisualizer();
    
    //Update frame visualizer
    insertInFrameVisualizer(framePointer);
    //updateVisualizerImage(framePointer);

    //Update the frame displayed behind the canvas
    bottomCanvas.showPrevious();
    //addRedo(getCanvasData());
}

btnDeleteFrame.onclick = function(){
    myCanvasArea.clearCanvas();
    updateVisualizerImage(framePointer);
    
    if(framesList.length == 1)
        return
    framesList.splice(framePointer, 1);
    if(framePointer > 0)
        framePointer--;
    ctx.putImageData(framesList[framePointer], 0, 0);
    //txtFrames.update();
    //console.log("Delete Frame Button selected");

    //Update frame before new one
    bottomCanvas.showPrevious();

    deleteInFrameVisualizer(framePointer);
    clearRedo();
}

btnGenerate.onclick = function(){

    btnGenerate.style.display = "none";

    let imgWait = document.getElementById("waiting");
    imgWait.style.display = "inline";

    setTimeout(() => {
        let delay = 1000/inputFps.value;
        let delayList = getDelayList();

        saveFrame(getCanvasData());

        let encoder = new GIFEncoder();

        encoder.setRepeat(0);

        encoder.setDelay(delay);

        encoder.start();
        //console.log("Finished start");
        //console.log(Date.now());

        encoder.setSize(myCanvasArea.canvas.width, myCanvasArea.canvas.height);
        //console.log("Finished setting size");
        //console.log(Date.now());

        let length = framesList.length;
        /*for(let i = 0; i < length; i++){
            //encoder.addFrame(framesList[i].data, true);
            let frame = frameBackgroundColoured(i);

            let done = 0;

            do{
                encoder.addFrame(frame.data, true);
                done++;
            }while(done != delayList[i]);
            //console.log("Finished frame");
            console.log(Date.now());
        }*/

        for(let i = 0; i < length; i++){
            encoder.setDelay(delayList[i] * delay);
            let frame = frameBackgroundColoured(i);
            encoder.addFrame(frame.data, true);
        }

        encoder.finish();
        //console.log("Finished finish");
        //console.log(Date.now());
        
        encoder.download("animation.gif");
        btnGenerate.style.display = "inline";
        imgWait.style.display = "none";

        analytics.logEvent("animation_generated");
    }, 100);

    //Verify fps field isn't empty or canceled
    /*let fps = prompt('Type seconds for each frame. 60 can be a good start');
    if(fps == "" || fps == null)
    return;*/

    /*let delay = 1000/inputFps.value;
    let delayList = getDelayList();

    saveFrame(getCanvasData());

    let encoder = new GIFEncoder();

    encoder.setRepeat(0);

    encoder.setDelay(delay);

    encoder.start();
    //console.log("Finished start");
    //console.log(Date.now());

    encoder.setSize(myCanvasArea.canvas.width, myCanvasArea.canvas.height);
    //console.log("Finished setting size");
    //console.log(Date.now());

    let length = framesList.length;
    /*for(let i = 0; i < length; i++){
        //encoder.addFrame(framesList[i].data, true);
        let frame = frameBackgroundColoured(i);

        let done = 0;

        do{
            encoder.addFrame(frame.data, true);
            done++;
        }while(done != delayList[i]);
        //console.log("Finished frame");
        console.log(Date.now());
    }*/

    /*for(let i = 0; i < length; i++){
        encoder.setDelay(delayList[i] * delay);
        let frame = frameBackgroundColoured(i);
        encoder.addFrame(frame.data, true);
    }

    encoder.finish();
    //console.log("Finished finish");
    //console.log(Date.now());
    
    encoder.download("download.gif");

    btnGenerate.style.display = "inline";
    imgWait.style.display = "none";*/
}

btnPlay.onclick = function(){
    //Clear the displayed canvas
    bottomCanvas.clearCanvas();
    saveFrame(getCanvasData());

    //Start the player
    isPlaying = true;
    startPlayInterval();

    //Toggle buttons
    btnStop.style.display = "block";

    //Hide interactables
    divBottomBar.style.display = "none";
    divSideBar.style.display = "none";

    //btnPlay.style.display = "none";
}

btnStop.onclick = function(){
    isPlaying = false;
    clearInterval(playInterval);
    //btnPlay.style.display = "block";
    ctx.putImageData(framesList[framePointer], 0, 0);
    bottomCanvas.showPrevious();

    //Show interactables
    btnStop.style.display = "none";
    divBottomBar.style.display = "block";
    divSideBar.style.display = "block";
}

btnSettings.onclick = function(){
    if(settingsMenu.isDisplayed){
        settingsMenu.style.display = "none";
    }
    else{
        //settingsMenu.style.display = "block";
        settingsMenu.show();
    }

    settingsMenu.isDisplayed = !(settingsMenu.isDisplayed);
}