var frameBackgroundColour = hexColour.WHITE;

var framesList = [];
var framePointer = 0;

var redoFramesList = [];
var redoPointer = 0;

var frameClipboard = null;

//Gets the image data from the drawing canvas
function getCanvasData(){    
    return ctx.getImageData(0, 0, myCanvasArea.canvas.width, myCanvasArea.canvas.height);
}

//Saves the frame image inside the list
function saveFrame(data){
    framesList[framePointer] = data;
}

//Return the frame with the transparent pixels being coloured with the selected background colour
function frameBackgroundColoured(framePointer){
    let frame = framesList[framePointer];

    let length = frame.data.length;

    let fillColour = hexToRgb(frameBackgroundColour);

    for(i = 0; i < length; i+=4){
        if(frame.data[(i + 3)] == 0){
            frame.data[i] = fillColour.r;
            frame.data[(i+1)] = fillColour.g;
            frame.data[(i+2)] = fillColour.b;
            frame.data[(i+3)] = fillColour.a;
        }
    }

    return frame;
}

//Redo related functions

//Add data to the redo list and clear the ones that were after
function addRedo(data){
    console.clear();

    console.log("Added redo");
    //console.log(data);

    /*redoPointer++;
    console.log(redoPointer);

    console.log("Redo length");
    console.log(redoFramesList.length);

    let howMany = redoFramesList.length - redoPointer;
    console.log("How many to delete?");
    console.log(howMany);

    redoFramesList = redoFramesList.splice(redoPointer, howMany);

    console.log("Redo length after splice");
    console.log(redoFramesList.length);

    console.log(redoFramesList);*/
    let length = redoFramesList.length;
    console.log("Start length");
    console.log(length);

    console.log("Start pointer");
    console.log(redoPointer);

    if((redoPointer + 1) == length){
        // If it is the last, do nothing
    }
    else{
        //console.log("else");
        /*redoPointer++;
        console.log(redoPointer);
        let howMany = redoFramesList.length - redoPointer;
        console.log(howMany);
        redoFramesList = redoFramesList.splice(redoPointer, howMany, data);*/

        
        redoFramesList = redoFramesList.slice(0, redoPointer + 1);
        //redoFramesList.push(data);
    }

    redoFramesList.push(data);
    redoPointer++;

    console.log("End length");
    console.log(redoFramesList.length);

    console.log("End pointer");
    console.log(redoPointer);

    /*console.log("Pointer: ");
    console.log(redoPointer);

    console.log(redoFramesList);*/
}

function clearRedo(){
    console.log("Clear redo");
    redoPointer = 0;
    redoFramesList = [];
    redoFramesList.push(getCanvasData());
    //console.log(redoFramesList);
}