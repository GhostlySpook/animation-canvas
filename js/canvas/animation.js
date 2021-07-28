var frameBackgroundColour = hexColour.WHITE;

var framesList = [];
var framePointer = 0;

//Redo related
var redoFramesList = [];
var redoPointer = 0;

var frameClipboard = null;

//Speed related
//var delayFrameList = [];
var currentFrameDelay = 0;
//var fps = 0;

//Play related
var playInterval = null;
//var playPointer = 0;
var playLoop = false;
var playLength = 0;



//Methods

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

//////////////////////////////////////////////////////////////
//Redo related functions
//
//Add data to the redo list and clear the ones that were after
function addRedo(data){
    //console.clear();
    
    let length = redoFramesList.length;

    if((redoPointer + 1) == length){
        // If it is the last, do nothing
    }
    else{
        redoFramesList = redoFramesList.slice(0, redoPointer + 1);
    }

    redoFramesList.push(data);
    redoPointer++;
}

function clearRedo(){
    redoPointer = 0;
    redoFramesList = [];
    redoFramesList.push(getCanvasData());
}

/////////////////////////////////////////////////////////////
//Play related functions
//
//

function startPlayInterval(){
    let delayFrameList = getDelayList();

    let playPointer = 0;
    currentFrameDelay = delayFrameList[playPointer];
    let delay = 1000/inputFps.value;
    playLength = delayFrameList.length;

    ctx.putImageData(framesList[playPointer], 0, 0);
    currentFrameDelay--;

    playInterval = setInterval(() =>{
        currentFrameDelay--;

        if(currentFrameDelay <= 0){
            playPointer++;
            ctx.putImageData(framesList[playPointer], 0, 0);
            currentFrameDelay = delayFrameList[playPointer];     

            if(playPointer >= playLength - 1){
                playPointer = -1;
            }
        }
    }, delay);
}