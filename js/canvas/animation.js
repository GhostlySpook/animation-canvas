var frameBackgroundColour = hexColour.WHITE;


var framesList = []

var frameClipboard = null;

var framePointer = 0;

function getCanvasData(){    
    return ctx.getImageData(0, 0, myCanvasArea.canvas.width, myCanvasArea.canvas.height);
}

function saveFrame(data){
    framesList[framePointer] = data;
}

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
            //frame.data[(p+3)] = fillData.a;
        }
    }

    return frame;
}