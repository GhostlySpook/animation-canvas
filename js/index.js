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
    
/* Include Many js files */
    include('js/resources.js')
    include('js/colours.js');
    include ('js/canvas/animation.js');
    include('js/canvas/canvasComponents.js');
    include ('js/elementsData.js');