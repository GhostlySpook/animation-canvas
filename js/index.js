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

        'js/elementsData.js',

        'js/canvas/shortcuts.js',
    ],

    current: 0,

    include(){
  
        let script  = document.createElement('script');
        script.src  = includeScript.list[this.current];
        script.path = includeScript.list[this.current];
        script.type = 'text/javascript';
        script.defer = true;
        
        document.getElementsByTagName('head').item(0).appendChild(script);
        script.onload = () =>{
            console.log("Loaded: ", script.path);
    
            //Stop if it is the last script
            includeScript.current++;
            console.log(includeScript.current);
            console.log(includeScript.list.length);
            //debugger
            if(includeScript.current != includeScript.list.length)
                includeScript.include(includeScript.current);
        }
    },

    start(){
        current = 0;
        includeScript.include();
    },

    add(added){
        let pos = -(this.list.length - this.current) + 1;
        for(let i = 0; i < added.length; i++){
            this.list.splice(pos, 0, added[i]);
        }
        console.log(this.list);
    }
}

includeScript.start();

function main(){
    ctx = myCanvasArea.context;
    bottomCtx = myCanvasArea.bottomContext;
  
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

    //If eraser menu is displayed, hide
    if(e.target != btnEraserMenu && e.target != eraserMenu && e.target != rangeEraserSize){
        eraserMenu.hide();
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

//Copyright (c) 2021 Ghostly Spook