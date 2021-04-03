Button.prototype = new Component();

Button.prototype.onClick = function() {
    console.log("Button clicked");
}

function Button(x, y, width, height, image){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
};
