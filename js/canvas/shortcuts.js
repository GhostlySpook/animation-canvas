//var isCtrlPressed = false;

//Add as many shortcuts as you would like!
document.addEventListener("keydown", function(e){
    switch(e.key){
        case "b":
        case "B":
            btnBlackPencil.onclick();
            break;
        case "c":
        case "C":
            btnColourClick();
            break;
        case "f":
        case "F":
            btnBlackBucket.onclick();
            break;
        case "e":
        case "E":
            btnEraser.onclick();
            /*if(btnEraser.style.display == "block"){
                //console.log("Erase");
                btnEraser.onclick();
            }
            else if(btnBomb.style.display == "block"){
                //console.log("Bomb");
                btnBomb.onclick();
            }*/
            break;
        case "z":
        case "Z":
            if(e.ctrlKey){
                btnUndo.onclick();
            }
            break;
        case "y":
        case "Y":
            if(e.ctrlKey){
                btnRedo.onclick();
            }
            break;
    }
})

/*document.addEventListener("keydown", function(e){
    if(e.ctrlKey){
        isCtrlPressed = true;
    }
})

document.addEventListener("keyup", function(e){
    if(!(e.ctrlKey)){
        isCtrlPressed = false;
    }
})*/