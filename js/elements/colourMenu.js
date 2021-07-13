var btnColourContainer = document.getElementById("btnColourContainer");
var colourMenu = document.getElementById("colourMenu");
var svgBackground = document.getElementById("svgBackground");
var rectBackground = document.getElementById("rectBackground");

colourMenu.isDisplayed = false;

colourMenuInit = function(){
    btnColourContainer.init();
    colourMenu.init();
    svgBackground.init();
    rectBackground.init();
}

//Initializes the colour button
btnColourContainer.init = function(){
    //Make the button adjust to the width
    btnColourContainer.setAttribute("style","width: " + btnColourContainer.clientHeight + "px");
    
}

//Fill the colour container with colours
colourMenu.init = function(){
    colourMenu.style.display="block";

    let btnWidth = (parseInt(colourMenu.clientWidth) / Object.keys(hexColour).length);
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
            let color = e.target.colour;

            //Apply the colour
            myCanvasArea.colourSelected = color;
            ctx.strokeStyle = color;

            btnColourContainer.style.background = color;

            //Hide the menu
            colourMenu.hide();
        });

        //Add the button
        colourMenu.appendChild(buttonSvg);
    }
}

svgBackground.init = function(){
    svgBackground.style.width = myCanvasArea.canvas.width;
    svgBackground.style.height = myCanvasArea.canvas.height;
}

rectBackground.init = function(){
    rectBackground.style.width = svgBackground.style.width;
    rectBackground.style.height = svgBackground.style.height;
}

colourMenu.toggle = function(){
    //console.log("Toggle")
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