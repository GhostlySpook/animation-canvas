/*include("js/elements/buttons.js");
include("js/elements/settingsMenu.js");
include("js/elements/colourMenu.js");
include("js/elements/pencilMenu.js");
include("js/elements/sideBar.js");
include("js/elements/frameVisualizer.js");*/

//var txtFrames = document.getElementById("txtFrames");

/*includeScript.list = [
    "js/elements/buttons.js",
    "js/elements/settingsMenu.js",
    "js/elements/colourMenu.js",
    "js/elements/pencilMenu.js",
    "js/elements/sideBar.js",
    "js/elements/frameVisualizer.js"
]

includeScript.start();*/

includeScript.add([
    "js/elements/buttons.js",
    "js/elements/settingsMenu.js",
    "js/elements/colourMenu.js",
    "js/elements/pencilMenu.js",
    "js/elements/eraserMenu.js",
    "js/elements/sideBar.js",
    "js/elements/frameVisualizer.js"
]);

initElements = function(){
    settingsMenu.init();
    colourMenuInit();
    btnColourContainer.init();
    frameVisualizerInit();
}

/*txtFrames.update = function(){
    let textFrames = (framePointer + 1) + "/" + framesList.length;
    txtFrames.textContent = textFrames;
}*/