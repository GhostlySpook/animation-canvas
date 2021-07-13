function include(file) {
  
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;
    
    document.getElementsByTagName('head').item(0).appendChild(script);

    return true
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

window.onclick = function(e){
    //If pencil menu is displayed, hide
    if(e.target != btnPencilMenu && e.target != pencilMenu && e.target != rangeSize){
        console.log("It is displayed");
        pencilMenu.hide();
    }

    if(e.target != btnColour){
        colourMenu.hide();
    }
}
    
/* Include Many js files */
    include('js/resources.js')
    include('js/colours.js');
    include ('js/canvas/animation.js');
    include('js/canvas/canvasComponents.js');
    include('js/canvas/shortcuts.js');
    include ('js/elementsData.js');