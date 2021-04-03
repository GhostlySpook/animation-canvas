function Component(width, height, x, y, image) {

    this.image = new Image();
    this.image = image;
    //this.image.src = picture;

    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;

    this.componentId = undefined;

    this.addComponent = function(){
        this.componentId = componentId;
        componentsList.push(this);
        componentId++;
    }

    this.update = function() {
        ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height);
    }

    //Methods for properties
    this.setPos = function(newx, newy) {
        this.x = newx;
        this.y = newy;
    }

    this.setSize = function(neww, newh){
        this.width = neww;
        this.height = newh;
    }

    this.setImageSource = function(newsource){
        this.image.src = newsource;
    }

    this.setImage = function(newImage){
        this.image = newImage;
    }
    //End methods for properties

    //Positions
    this.checkPointCollision = function(x, y){
        let x2 = this.x + this.width;
        let y2 = this.y + this.height;

        return (x > this.x && x < x2 && y > this.y && y < y2);
    }

    //Events
    this.onClick = function(){
        console.log("Component clicked");
    }
}