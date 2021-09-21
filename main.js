var Canvas = document.getElementById("myCanvas");
var ctx = Canvas.getContext("2d");

var Background_Image = "racing.gif";

var car1_width = 120;
var car1_height = 70;
var car1_Image = "car1.png";
var car1_X = 10;
var car1_Y = 10;

var car2_width = 120;
var car2_height = 70;
var car2_Image = "car2.png";
var car2_X = 10;
var car2_Y = 100;

var Background_tag;
var car1_tag;
var car2_tag;

function add() {
    Background_tag = new Image();
    Background_tag.onload = uploadBackground;
    Background_tag.src = Background_Image;

    car1_tag = new Image();
    car1_tag.onload = uploadcar1;
    car1_tag.src = car1_Image;

    car2_tag = new Image();
    car2_tag.onload = uploadcar2;
    car2_tag.src = car2_Image;
}

function uploadBackground() {
    ctx.drawImage(Background_tag, 0, 0, Canvas.width, Canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_tag, car1_X, car1_Y, car1_width, car1_height)
}

function uploadcar2() {
    ctx.drawImage(car2_tag, car2_X, car2_Y, car2_width, car2_height)
}

window.addEventListener("keydown", MyKeydown);

function MyKeydown(e) {
    var key = e.keyCode;
    console.log(key);
    if (key == '38') {
        car1_up();
        console.log("Up Arrow Key");
    }
    if (key == '40') {
        car1_down();
        console.log("Down Arrow Key");
    }
    if (key == '37') {
        car1_left();
        console.log("Left Arrow Key");
    }
    if (key == '39') {
        car1_right();
        console.log("Right Arrow Key");
    }
    if (key == '87') {
        car2_up();
        console.log("Key W");
    }
    if (key == '83') {
        car2_down();
        console.log("Key S")
    }
    if (key == '65') {
        car2_left();
        console.log("Key A");
    }
    if (key == '68') {
        car2_right();
        console.log("Key D");
    }
}

function car1_up() {
    if(car1_Y >=0) {
        car1_Y = car1_Y - 10;
        console.log("When up arrow is pressed, x = " + car1_X + "and y = " + car1_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up() {
    if(car2_Y >=0) {
        car2_Y = car1_Y - 10;
        console.log("When W is pressed, x = " + car2_X + "and y = " + car2_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down() {
    if(car1_Y <=500) {
        car1_Y = car1_Y + 10;
        console.log("When down arrow is pressed, x = " + car1_X + "and y = " + car1_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down() {
    if(car2_Y <=500) {
        car2_Y = car2_Y + 10;
        console.log("When S is pressed, x = " + car2_X + "and y = " + car2_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left() {
    if(car1_X >=0) {
        car1_X = car1_X - 10;
        console.log("When left arrow is pressed, x = " + car1_X + "and y = " + car1_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left() {
    if(car2_X >=0) {
        car2_X = car2_X - 10;
        console.log("When A is pressed, x = " + car2_X + "and y = " + car2_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right() {
    if(car1_X <=700) {
        car1_X = car1_X + 10;
        console.log("When right arrow is pressed, x = " + car1_X + "and y = " + car1_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right() {
    if(car2_X <=700) {
        car2_X = car2_X + 10;
        console.log("When D is pressed, x = " + car2_X + "and y = " + car2_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}