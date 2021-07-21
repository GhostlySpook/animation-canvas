var divFrameVisualizer = document.getElementById("divFrameVisualizer");
var conversionCanvas = document.createElement("canvas");
var conversionContext = conversionCanvas.getContext("2d");

var visualizerList = [];

function frameVisualizerInit(){
    updateFrameVisualizer();
}

function clearFrameVisualizer(){
    divFrameVisualizer.innerHTML = "";
    visualizerList = [];
}

function updateFrameVisualizer(){
    clearFrameVisualizer();
    let length = framesList.length;

    for(let pointer = 0; pointer < length; pointer++){
        console.log(pointer);
        addInFrameVisualizer(pointer);
    }
}

//Adds a frame to the end of the visualizer
function addInFrameVisualizer(pointer){

    //Create div for frame
    let divFrame = document.createElement("div");
    divFrame.classList.add("divFrame");

    //NUMBER
    //Create number for the frame in a p tag
    let pNumber = document.createElement("p");
    pNumber.textContent = pointer + 1;

    //Add p to its div
    let divNumber = document.createElement("div");
    divNumber.classList.add("divNumber");
    divNumber.appendChild(pNumber);


    //FRAME IMAGE
    //Create an image to save the frame in
    let image = document.createElement("img");
    conversionContext.putImageData(framesList[pointer], 0, 0);
    image.src = conversionCanvas.toDataURL("image/png");
    
    //Create div where to add the image
    let divFrameContainer = document.createElement("div");
    divFrameContainer.classList.add("divFrameContainer");
    divFrameContainer.appendChild(image);


    //SPEED
    //Create the input for the speed
    let speedInput = document.createElement("input");
    speedInput.type = "number";

    let pMs = document.createElement("p");
    pMs.textContent = "ms";

    //Create div for speed input
    let divFrameTime = document.createElement("div");
    divFrameTime.classList.add("divFrameTime");

    //Add its elements
    divFrameTime.appendChild(speedInput);
    divFrameTime.appendChild(pMs);

    //FINISH
    //Append everything to the frame div
    divFrame.appendChild(divNumber);
    divFrame.appendChild(divFrameContainer);
    divFrame.appendChild(divFrameTime);


    //Create frame object
    let frameObject = {
        //This is the pointer of the frame
        position: pointer,

        //This is the div of the frame
        divFrame: divFrame,

        //This is the small image element of the frame
        image: image,

        //This is the input to be registered for the frame
        inputMs: speedInput
    }


    //Append this to the end of the frame
    visualizerList.push(frameObject);

    //Add to the visualizer div
    divFrameVisualizer.appendChild(divFrame);
}