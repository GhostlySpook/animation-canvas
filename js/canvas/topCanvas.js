var topCanvas = myCanvasArea.topCanvas;

topCanvas.isShown = true;

topCanvas.showPrevious = function(){
    if(this.isShown && framePointer != 0){
        topCtx.putImageData(framesList[(framePointer - 1)], 0, 0);
    }
    else{
        topCtx.clearRect(0, 0, topCanvas.width, topCanvas.height);
    }
}

topCanvas.setOpacity = function(op){
    if(0 <= op && op <= 1){
        topCanvas.style.opacity = op;
    }
}

topCanvas.toggle = function(op){
    if(op == undefined){
        this.isShown = !(this.isShown);
    }
    else{
        this.isShown = op;
    }
}