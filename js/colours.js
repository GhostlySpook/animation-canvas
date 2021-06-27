//Constants refering to hex codes for colours
const hexColour = {
    BLACK: "#000000",
    GRAY: "#808080",
    WHITE: "#ffffff",
    PINK: "#ffaacc",
    RED: "#ff0000",
    BROWN: "#964b00",
    ORANGE: "#ffaa00",
    YELLOW: "#ffff00",
    GREEN: "#00a400",
    LIGHTBLUE: "#86c5da",
    BLUE: "#0000c7",
    INDIGO: "#4b0082",
    PURPLE: "#6a006b"
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