function setup() {
    createCanvas(640, 480);
}

function draw() {
    background('#FFFAED');
    var x = width/2;
    var y = height/2;
    
    // face
    noStroke();
    fill('green');
    ellipse(x, y, 200, 200);
    
    // mouth
     fill('red');
     ellipse(x, y+15, 150, 40);
    // mouth
     fill('red');
     ellipse(x, y+25, 150, 40);
    
     // eyeRight
    fill('white');
    ellipse(x-42, y-100, 64, 64);
    
    // eyeLeft
    fill('white');
    ellipse(x+42, y-100, 64, 64);
    
    // eyePupilRight
    fill('black');
    ellipse(x-42, y-100, 20, 20)
    
    // eyePupilLeft
    fill('black');
    ellipse(x+42, y-100, 20, 20);
    

    
   
}