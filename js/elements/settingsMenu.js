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
    cboxSeeThrough.checked = bottomCanvas.isShown;

    //Its opacity
    rangeSeeThrough.value = window.getComputedStyle(bottomCanvas).getPropertyValue("opacity");
}

cboxSeeThrough.onclick = function(){
    bottomCanvas.isShown = cboxSeeThrough.checked;

    //If the canvas isn't shown, clear it
    if(!bottomCanvas.isShown){
        bottomCanvas.clearCanvas();
    }
    //If the canvas is shown, make it appear again
    else{
        bottomCanvas.showPrevious();
    }
}

rangeSeeThrough.onchange = function(){
    bottomCanvas.style.opacity = rangeSeeThrough.value;
}