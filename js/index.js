/*function include(file) {
  
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;
    
    document.getElementsByTagName('head').item(0).appendChild(script);

    return true
}*/

//Scripts to load
var includeScript = {
    list: [
        'js/resources.js',
        'js/colours.js',
        'js/canvas/animation.js',
        'js/canvas/canvasComponents.js',

        'js/canvas/canvasData.js',
        'js/canvas/bottomCanvas.js',

        'js/elementsData.js',

        "js/elements/buttons.js",
        "js/elements/settingsMenu.js",
        "js/elements/colourMenu.js",
        "js/elements/pencilMenu.js",
        "js/elements/sideBar.js",
        "js/elements/frameVisualizer.js",

        'js/canvas/shortcuts.js',
    ],

    include(current){
  
        let script  = document.createElement('script');
        script.src  = includeScript.list[current];
        script.path = includeScript.list[current];
        script.type = 'text/javascript';
        script.defer = true;
        
        document.getElementsByTagName('head').item(0).appendChild(script);
        script.onload = () =>{
            console.log("Loaded: ", script.path);
    
            //Stop if it is the last script
            if(current != includeScript.list.length - 1)
                includeScript.include(current + 1);
        }
    },

    start(){
        includeScript.include(0);
    },

    add(added){
        this.list.splice((current + 1), 0, added);
    }
}


//var currentScript = 0;
//var scriptListLength = includeScriptList.length;

includeScript.start();

function main(){
    ctx = myCanvasArea.context;
    bottomCtx = myCanvasArea.bottomContext;
  
    /*includeScript.list = [
      'js/canvas/canvasData.js',
      'js/canvas/bottomCanvas.js'
    ];
    
    includeScript.start();*/
  
    //Starting canvas config
    ctx.lineWidth = 10;
    //console.log(myCanvasArea.brushRadius);
  
    //Frames configuration
    framesList.push(ctx.getImageData(0, 0, myCanvasArea.canvas.width, myCanvasArea.canvas.height));
    clearRedo(myCanvasArea.getCanvasArea());
  
    selectToolButton(btnPencilMenu);
    showBtnPencilMenu();
    //txtFrames.update();
  
    //Start elements config
    initElements();
    /*include('js/canvas/canvasData.js');
    include('js/canvas/bottomCanvas.js');*/
  }

window.onbeforeunload = function (e) {
    e = e || window.event;

    // For IE and Firefox prior to version 4
    if (e) {
        e.returnValue = 'Sure?';
    }

    // For Safari
    return 'Sure?';
};

window.onpointerdown = function(e){
    //If pencil menu is displayed, hide
    if(e.target != btnPencilMenu && e.target != pencilMenu && e.target != rangeSize){
        //console.log("It is displayed");
        pencilMenu.hide();
    }

    //If colour menu is displayed, hide
    if(!(e.target.classList.contains("svgBtnColour"))){
        colourMenu.hide();
    }
}
    
/* Include Many js files */
    /*include('js/resources.js')
    include('js/colours.js');
    include ('js/canvas/animation.js');
    include('js/canvas/canvasComponents.js');
    include('js/canvas/shortcuts.js');
    include ('js/elementsData.js');*/