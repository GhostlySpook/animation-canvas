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
    btnColourContainer.setAttribute("style","height: " + btnColourContainer.clientWidth + "px");
}

//Fill the colour container with colours
colourMenu.init = function(){
    colourMenu.style.display="block";

    let btnWidth = (parseInt(colourMenu.clientWidth) / Object.keys(hexColour).length) - 0.1;
    let btnHeight = colourMenu.clientHeight;

    //console.log(btnWidth);
    //console.log(btnHeight);

    colourMenu.style.display="none";

    for(c in hexColour){
        //Create svg to be added
        let buttonSvg = document.createElement("svg");
        buttonSvg.classList.add("svgBtnColour");

        //Give width and height to button
        buttonSvg.style.width = btnWidth + "px";
        buttonSvg.style.height = btnHeight + "px";
        
        //Give colour
        buttonSvg.style.background = hexColour[c];
        buttonSvg.colour = hexColour[c];

        //Assign the event for a click
        buttonSvg.addEventListener("click", function(e){
            //Get the colour to use now
            let colour = e.target.colour;

            //Apply the colour
            myCanvasArea.colourSelected = colour;
            ctx.strokeStyle = colour;

            btnColourContainer.style.background = colour;

            //Hide the menu
            colourMenu.hide();
        });

        //Add the button
        colourMenu.appendChild(buttonSvg);
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

colourMenu.show = function(){
    colourMenu.isDisplayed = true;
    this.style.display = "block";
}

colourMenu.hide = function(){
    colourMenu.isDisplayed = false;
    this.style.display = "none";
}