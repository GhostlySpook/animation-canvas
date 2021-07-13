var bottomCanvas = myCanvasArea.bottomCanvas;

bottomCanvas.isShown = true;

bottomCanvas.clearCanvas = function(){
    topCtx.clearRect(0, 0, this.width, this.height);
}

bottomCanvas.showPrevious = function(){
    if(this.isShown && framePointer != 0){
        topCtx.putImageData(framesList[(framePointer - 1)], 0, 0);
    }
    else{
        topCtx.clearRect(0, 0, bottomCanvas.width, bottomCanvas.height);
    }
}

bottomCanvas.setOpacity = function(op){
    if(0 <= op && op <= 1){
        bottomCanvas.style.opacity = op;
    }
}

bottomCanvas.toggle = function(op){
    if(op == undefined){
        this.isShown = !(this.isShown);
    }
    else{
        this.isShown = op;
    }
}