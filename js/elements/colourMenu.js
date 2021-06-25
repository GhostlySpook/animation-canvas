var btnColourContainer = document.getElementById("btnColourContainer");
var colourMenu = document.getElementById("colourMenu");
colourMenu.isDisplayed = false;

colourMenuInit = function(){
    btnColourContainer.init();
    colourMenu.init();
}

//Initializes the colour button
btnColourContainer.init = function(){
    //Make the button adjust to the width
    btnColourContainer.setAttribute("style","width: " + btnColourContainer.clientHeight + "px");
    
}

//Fill the colour container with colours
colourMenu.init = function(){
    for(c in hexColour){
        //Create svg to be added
        let buttonSvg = document.createElement("svg");

        //Create rectangle, add it and give it colour
        let rect = document.createElement("rect");

        rect.setAttribute("style", "fill: " + c + ";");

        buttonSvg.appendChild(rect);
        colourMenu.appendChild(buttonSvg);
        console.log(c);
    }
}

colourMenu.toggle = function(){
    console.log("Toggle")
    if(colourMenu.isDisplayed){
        this.style.display = "none";
    }
    else{
        this.style.display = "block";
    }

    colourMenu.isDisplayed = !(colourMenu.isDisplayed);
}