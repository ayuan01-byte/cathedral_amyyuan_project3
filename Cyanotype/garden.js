let leaves = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight * 1.5);
  canvas.id('garden-canvas'); // Set the id of canvas to garden-canvas from cyanotype.css
  leafPower();
}

function draw () {
    background('#184d27');
    updateAndDrawLeaves();
    }

function updateAndDrawLeaves() {
  for (let i = 0; i < leaves.length; i++) { 
    drawLeaf(leaves[i]);
  }
}

//function to create 300 leaves on foliage background
function leafPower(){
  leaves = [];
  for(let i = 0; i < 300; i++){
    let leaf1 = createLeaf(random(width), random(height));
    leaves.push(leaf1);
  }
}
function createLeaf() {
  let leaf = {
    x: random(width), // x position of the leaf
    y: random(height), // y position of the leaf
    size: random(30,140), // Smaller random sized ellipses
    angle: random(TWO_PI), // TWO_PI means full rotation (360 degrees), reference: https://p5js.org/reference/p5/TWO_PI/
    color: color(random(50,90), random(100,150), random(50,70)), // Natural, muted bush green color shades
  };
  return leaf;
}
// windowResized is when the browser window's size changes, canvas will adjust to new size, reference: https://p5js.org/reference/p5/windowResized/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 1.5); 
  leafPower(); // Regenerate leaves when window is resized
}

function drawLeaf(leaf) {
  push();
  translate(leaf.x, leaf.y); // Move the origin to the leaf's position
  rotate(leaf.angle); // Rotate by the leaf's angle
  noStroke(); // No outline
  // Draw bush/grass-like cluster using relative coordinates
  fill(leaf.color);
    // Draw main shape of leaf at center
    // The below follows format: ellipse(x, y, width, height)
    // x = 0, y = 0: center of the leaf
    ellipse(0, 0, leaf.size * 0.7, leaf.size * 0.4);

    // An ellipse offset to the left and down
    // x = -leaf.size * 0.1 (left of center)
    // y = leaf.size * 0.1 (below center)
    ellipse(-leaf.size * 0.1, leaf.size * 0.1, leaf.size * 0.1, leaf.size * 0.1);

    // An ellipse offset to the right and up
    // x = leaf.size * 0.1 (right of center)
    // y = -leaf.size * 0.1 (above center)
    ellipse(leaf.size * 0.1, -leaf.size * 0.1, leaf.size * 0.1, leaf.size * 0.1);
  // Add a highlight on the leaf, a whiter ellipse
  fill(180, 220, 180, 80);
  ellipse(0, -leaf.size * 0.1, leaf.size * 0.3, leaf.size * 0.1);
  pop();
}

