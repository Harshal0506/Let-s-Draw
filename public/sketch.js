var socket;

function setup() {
    
    createCanvas(screen.width, screen.height);
    background(51);
    Download_button = createButton("Download"); 
    Download_button.position(150, 120);
    socket = io();

    socket.on("mouse", newDrawing);
    
    Download_button.mouseClicked(Download);  

    function Download(){
        console.log("Downloading...")
       saveCanvas('mycanva', 'png'); 
    }

}

function newDrawing(a) {
    noStroke();
    fill(255, 0, 100);
    ellipse(a.x, a.y, 20, 20);
}

function mouseDragged() {
    console.log("Sending...." + mouseX + " " + mouseY);
    var a = {
        x: mouseX,
        y: mouseY
    };
    socket.emit("mouse", a);
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 20, 20);
}

function draw() {
    textSize(60);
    fill("white");
    text("WhiteBoard", 100,100);
    cursor('./pencilBig.png');
    
}

