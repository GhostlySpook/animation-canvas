function onClickEventHandler(e){
    let length = componentsList.length;
    for(let i = 0; i < length; i++){
        if(componentsList[i].checkPointCollision(e.pageX, e.pageY)){
            componentsList[i].onClick(e);
        }
    }
}

function onMouseDownEventHandler(e){
    let length = componentsList.length;
    for(let i = 0; i < length; i++){
        componentsList[i].onMouseDown(e);
    }
}

function onMouseUpEventHandler(e){
    let length = componentsList.length;
    for(let i = 0; i < length; i++){
        componentsList[i].onMouseUp(e);
    }
}

function onMouseMoveEventHandler(e){
    let length = componentsList.length;
    for(let i = 0; i < length; i++){
        componentsList[i].onMouseMove(e);
    }
}