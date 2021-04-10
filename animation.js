var framesList = []

var frameClipboard = null;

var framePointer = 0;

function getCanvasData(){    
    return ctx.getImageData(0, 0, myCanvasArea.canvas.width, myCanvasArea.canvas.height);
}

function saveFrame(data){
    framesList[framePointer] = data;
}