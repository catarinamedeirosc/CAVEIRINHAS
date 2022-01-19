function setup() {
  createCanvas(windowWidth, windowHeight);

 
  background(random(255), random(255), random(255));
}

function draw() {
  
  drawSkull(random(width), random(height), random(10, 100), random(10, 100));
}

function drawSkull(skullX, skullY, skullWidth, skullHeight) {

 
  fill(random(255), random(255), random(255));
  noStroke();

  
  ellipse(skullX, skullY, skullWidth, skullHeight);

 
  rect(skullX - skullWidth / 4,
    skullY + skullHeight / 4,
    skullWidth / 2,
    skullHeight / 2);

  
  fill(0);

 
  var eyeSpacing = skullWidth / 4;
  var eyeWidth = skullWidth / 6;
  var eyeHeight = skullHeight / 4;
  ellipse(skullX - eyeSpacing,
    skullY,
    eyeWidth,
    eyeHeight);
  ellipse(skullX + eyeSpacing,
    skullY,
    eyeWidth,
    eyeHeight);

  
  var teethWidth = skullWidth / 30;
  var teethHeight = skullHeight / 4;
  var teethTop = skullY + skullHeight / 2;
  var teethSpacing = skullWidth / 6;
  rect(skullX - teethSpacing,
    teethTop,
    teethWidth,
    teethHeight);
  rect(skullX,
    teethTop,
    teethWidth,
    teethHeight);
  rect(skullX + teethSpacing,
    teethTop,
    teethWidth,
    teethHeight);
}