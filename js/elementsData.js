include("js/elements/buttons.js");
include("js/elements/settingsMenu.js");
include("js/elements/colourMenu.js");
include("js/elements/pencilMenu.js");

//var txtFrames = document.getElementById("txtFrames");

initElements = function(){
    settingsMenu.init();
    colourMenuInit();
    btnColourContainer.init();
}

/*txtFrames.update = function(){
    let textFrames = (framePointer + 1) + "/" + framesList.length;
    txtFrames.textContent = textFrames;
}*/