//var isCtrlPressed = false;

//Add as many shortcuts as you would like!
document.addEventListener("keydown", function(e){
    switch(e.key){
        case "b":
            btnBlackPencil.onclick();
            break;
        case "f":
            btnBlackBucket.onclick();
            break;
        case "e":
            if(btnEraser.style.display == "block"){
                //console.log("Erase");
                btnEraser.onclick();
            }
            else if(btnBomb.style.display == "block"){
                //console.log("Bomb");
                btnBomb.onclick();
            }
            break;
        case "z":
            if(e.ctrlKey){
                btnUndo.onclick();
            }
            break;
        case "y":
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