var divFrameVisualizer = document.getElementById("divFrameVisualizer");
var conversionCanvas = document.createElement("canvas");
var conversionContext = conversionCanvas.getContext("2d");
var inputFps = document.getElementById("inputFps");

var visualizerList = [];

function frameVisualizerInit(){
    //Make the conversion canvas have the same size as the canvas used for drawing
    conversionCanvas.width = myCanvasArea.canvas.width;
    conversionCanvas.height = myCanvasArea.canvas.height;

    inputFps.value = 1;

    updateFrameVisualizer();
    selectInFrameVisualizer(framePointer);
}

updateVisualizerNumbers = function(start = 0){
    //console.log("Start", start);
    let length = visualizerList.length;
    //console.log("Length:", length);

    for(let i = start; i < length; i++){
        let frameObject = visualizerList[i].frameObject;

        frameObject.pNumber.textContent = (i+1);
        frameObject.position = (i);
    }
}

updateVisualizerImage = function(pointer){
    //console.log("Pointer", pointer);
    //console.log(visualizerList);

    //conversionContext.putImageData(getCanvasData(), 0, 0);
    if(framePointer == pointer){
        conversionContext.putImageData(getCanvasData(), 0, 0);
    }
    else{
        conversionContext.putImageData(framesList[pointer], 0, 0);
    }
    
    visualizerList[pointer].frameObject.image.src = conversionCanvas.toDataURL("image/png");//"https://cdn.discordapp.com/attachments/109146132239613952/868722425410510858/E4Xds_AUYAMlSUM.jpg";
    //console.log("Updated image");
}

function clearFrameVisualizer(){
    divFrameVisualizer.innerHTML = "";
    visualizerList = [];
}

function updateFrameVisualizer(){
    clearFrameVisualizer();
    let length = framesList.length;

    for(let pointer = 0; pointer < length; pointer++){
        //console.log(pointer);
        addInFrameVisualizer(pointer);
    }
}

//Returns a Div Frame with the image from the pointer
function createDivFrameObject(pointer){
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

    //Add onclick event to image
    /*image.addEventListener("click", () => {

    });*/
    
    //Create div where to add the image
    let divFrameContainer = document.createElement("div");
    divFrameContainer.classList.add("divFrameContainer");
    divFrameContainer.appendChild(image);


    //SPEED
    //Create the input for the speed
    let speedInput = document.createElement("input");

    //Input properties
    speedInput.type = "number";
    speedInput.min = 1;
    speedInput.max = 9999;
    speedInput.placeholder = 1;
    speedInput.value = 1;

    //Input validation event
    speedInput.addEventListener("change", () =>{
        let newVal = speedInput.value;

        if(newVal == "" || newVal < 1 || newVal > 9999){
            speedInput.value = 1;
        }
    });

    let pMs = document.createElement("p");
    pMs.textContent = "Frames";

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
        pNumber: pNumber,

        //This is the div of the frame
        divFrame: divFrame,

        //This is the small image element of the frame
        image: image,

        //This is the input to be registered for the frame
        inputFrames: speedInput
    }

    divFrame.frameObject = frameObject;

    //Add event to div. Changing the current frame to the selected one
    divFrame.addEventListener("click", () =>{
        //console.log("Changed frame");
        //Save the frame before changing
        saveFrame(getCanvasData());

        //Update the pointer for the framesList
        framePointer = divFrame.frameObject.position;
        //console.log(framePointer);
        
        //Draw the new images
        ctx.putImageData(framesList[framePointer], 0, 0);
        bottomCanvas.showPrevious();
        selectInFrameVisualizer(framePointer);
    });

    //divFrame.frameObject = frameObject;

    return divFrame;


    //Append this to the end of the frame
    //visualizerList.push(frameObject);
}

//Adds a frame to the end of the visualizer
function addInFrameVisualizer(pointer){

    //Create div for frame
    /*let divFrame = document.createElement("div");
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
    divFrame.appendChild(divFrameTime);*/


    //Create frame object
    /*let frameObject = {
        //This is the pointer of the frame
        position: pointer,

        //This is the div of the frame
        divFrame: divFrame,

        //This is the small image element of the frame
        image: image,

        //This is the input to be registered for the frame
        inputFrames: speedInput
    }*/
    let frame = createDivFrameObject(pointer);


    //Append this to the end of the frame
    visualizerList.push(frame);

    //Add to the visualizer div
    //divFrameVisualizer.appendChild(divFrame);
    //console.log("VisualizerList in addInFrame: ", visualizerList);

    divFrameVisualizer.appendChild(frame);
}

//Insert a frame to the frame visualizer in the position selected
function insertInFrameVisualizer(pointer){
    //console.log("Pointer", pointer - 1);

    let newFrame = createDivFrameObject(pointer);

    //console.log("VisualizerList in insertInFrame: ", visualizerList);
    //console.log("VisualizerList in insertInFrame would be after splice: ", visualizerList.splice((pointer - 1), 0, newFrame));
    visualizerList.splice((pointer - 1), 0, newFrame);
    //visualizerList = visualizerList.splice((pointer - 1), 0, newFrame);
    //console.log("VisualizerList in insertInFrame after splice: ", visualizerList);

    //console.log("Before insert", visualizerList);
    divFrameVisualizer.insertBefore(newFrame, visualizerList[(pointer)]);
    //visualizerList[(pointer)].insertAdjacentElement("afterend", newFrame);

    updateVisualizerNumbers(pointer - 1);
    updateVisualizerImage(pointer-1)
    updateVisualizerImage(pointer);

    selectInFrameVisualizer(pointer);
    //console.log(visualizerList);
}

//Delete a frame in the visualizer
function deleteInFrameVisualizer(pointer){
    //Remove the frame from the document
    visualizerList[pointer].remove();

    //Remove the frame from the list
    visualizerList.splice(pointer, 1);

    //Update the numbers
    updateVisualizerNumbers(pointer);

    //Update image
    updateVisualizerImage(pointer);

    console.log("Pointer", pointer);
    selectInFrameVisualizer(pointer);
}

//Unselect the current frame and select the next frame
function selectInFrameVisualizer(pointer){
    let length = visualizerList.length;
    
    for(let i = 0; i < length; i++){
        visualizerList[i].classList.remove("selected");
    }

    visualizerList[pointer].classList.add("selected");
}

function getDelayList(){
    let list = [];
    for(let i = 0, length = visualizerList.length; i < length; i++){
        let value = visualizerList[i].frameObject.inputFrames.value;

        if(value == "" || value < 1){
            value = 1;
        }

        list.push(value);
    }

    return list;
}