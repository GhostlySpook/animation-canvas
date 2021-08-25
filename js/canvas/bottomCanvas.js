var bottomCanvas = myCanvasArea.bottomCanvas;

bottomCanvas.isShown = true;
bottomCanvas.showPrevious = true;
bottomCanvas.showNext = false;

bottomCanvas.clearCanvas = function(){
    bottomCtx.clearRect(0, 0, this.width, this.height);
}

bottomCanvas.update = function(){
    bottomCtx.clearRect(0, 0, bottomCanvas.width, bottomCanvas.height);
    
    if(this.isShown){

        if(this.showPrevious && framePointer != 0){
            bottomCtx.putImageData(framesList[(framePointer - 1)], 0, 0);
        }

        if(this.showNext && framePointer != framesList.length - 1){
            bottomCtx.putImageData(framesList[(framePointer + 1)], 0, 0);
        }

    }
    else{
        //bottomCtx.clearRect(0, 0, bottomCanvas.width, bottomCanvas.height);
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

bottomCanvas.togglePrevious = function(op){
    if(op == undefined){
        this.showPrevious = !(this.showPrevious);
    }
    else{
        this.showPrevious = op;
    }
}

bottomCanvas.toggleNext = function(op){
    if(op == undefined){
        this.showNext = !(this.showNext);
    }
    else{
        this.showNext = op;
    }
}