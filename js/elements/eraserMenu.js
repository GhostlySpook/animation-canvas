var eraserMenu = document.getElementById("eraserMenu");
var rangeEraserSize = document.getElementById("rangeEraserSize");

rangeEraserSize.onchange = function(){
    value = rangeEraserSize.value;

    ctx.lineWidth = value;
    myCanvasArea.eraserRadius = value;
}

eraserMenu.isDisplayed = false;

eraserMenu.toggle = function(){
    if(eraserMenu.isDisplayed){
        eraserMenu.style.display = "none";
    }
    else{
        eraserMenu.style.display = "block";
    }

    eraserMenu.isDisplayed = !(eraserMenu.isDisplayed);
}

eraserMenu.hide = function(){
    eraserMenu.style.display = "none";

    eraserMenu.isDisplayed = false;
}