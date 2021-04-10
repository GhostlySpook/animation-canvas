function include(file) {
  
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;
    
    document.getElementsByTagName('head').item(0).appendChild(script);

    return true
}
    
/* Include Many js files */
    include('resources.js')
    include ('animation.js');
    include('canvas/canvasComponents.js');
    include ('elementsData.js');