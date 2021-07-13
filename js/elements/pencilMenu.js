var pencilMenu = document.getElementById("pencilMenu");
var rangeSize = document.getElementById("rangeSize");

rangeSize.onchange = function(){
    value = rangeSize.value;

    ctx.lineWidth = value;
    myCanvasArea.brushRadius = value;
}

pencilMenu.isDisplayed = false;

pencilMenu.toggle = function(){
    if(pencilMenu.isDisplayed){
        pencilMenu.style.display = "none";
    }
    else{
        pencilMenu.style.display = "block";
    }

    pencilMenu.isDisplayed = !(pencilMenu.isDisplayed);
}

pencilMenu.hide = function(){
    pencilMenu.style.display = "none";

    pencilMenu.isDisplayed = false;
}