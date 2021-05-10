var settingsMenu = document.getElementById("settingsMenu");

var cboxSeeThrough = document.getElementById("cboxSeeThrough");

var rangeSeeThrough = document.getElementById("rangeSeeThrough");

settingsMenu.isDisplayed = false;

settingsMenu.init = function(){
    
}

settingsMenu.show = function(){
    //Show the settings
    this.style.display = "block";

    //If it is shown
    cboxSeeThrough.checked = topCanvas.isShown;

    //Its opacity
    rangeSeeThrough.value = window.getComputedStyle(topCanvas).getPropertyValue("opacity");
}

cboxSeeThrough.onclick = function(){
    topCanvas.isShown = cboxSeeThrough.checked;

    //If the canvas isn't shown, clear it
    if(!topCanvas.isShown){
        topCanvas.clearCanvas();
    }
    //If the canvas is shown, make it appear again
    else{
        topCanvas.showPrevious();
    }
}

rangeSeeThrough.onchange = function(){
    topCanvas.style.opacity = rangeSeeThrough.value;
}