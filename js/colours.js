//Constants refering to hex codes for colours
const hexColour = {
    BLACK: "#000000",
    RED: "#ff0000",
    WHITE: "#ffffff"
}

//Returns an object containing the RGB from a hex colour value
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),

      //Alpha is 255 for complete coloring from the filling
      a: 255
    } : null;
}  