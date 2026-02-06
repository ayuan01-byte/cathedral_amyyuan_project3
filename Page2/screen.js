function setup() {
    // Use WEBGL mode for 3D effects using specularMaterial()
    // Inspired by https://p5js.org/reference/p5/specularMaterial/
  createCanvas(windowWidth, windowHeight, WEBGL);

  describe('A 3D computer screen with a black display and silver edge frame, and oscillates left and right');
}

function draw() {  
  // I learned ambientLight and directionalLight (for 3D effect in WEBGL mode) from p5js.org: https://p5js.org/reference/p5/lights/
  // ambientLight is light that lights up all objects equally
  ambientLight(128, 128, 128)
  // directionalLight takes a direction vector, the last 3 numbers in (), that determines where the light comes from
  // For (0, 0, -1), the light comes from in front of the screen towards the viewer, reference: https://youtu.be/k2FguXvqp60?t=749
  directionalLight(128, 128, 128, 0, 0, -1)
  drawComputerScreen();
}


function drawComputerScreen() {
    // push() saves the current transformation state
  push();
  
  // The code below makes the trapezoid oscillate left and right over time using millis() and sin()
  // I learned how to use millis() for animation from the "A white circle oscillates left and right" example at: https://p5js.org/reference/p5/millis/
  // In the white circle example, they used millis() / 1000 to get seconds, then calculated x-coordinate with: let x = 30 * sin(s) + 50;
  // The sin(s) creates oscillation, 30 determines the distance it moves, and +50 makes it centered on screen. I adapted this code reference for my trapezoid using 200 * sin(s) for more movement.
  let s = millis() / 1000;
  // Calculate how much it oscillates left and right, 200 is the amplitude that controls how far the trapezoid moves
  let x = 200 * sin(s);
  // Positions the trapezoid at the bottom of the screen
  // x variable here creates the sideways movement
  translate(x, windowHeight / 2 - 80, 0);
  
  // Draw silver trapezoid "computer frame"
  // Drawing trapezoids inspired by: https://editor.p5js.org/yzhang33/sketches/N32N4ZzS7
  // However, I am using WEBGL mode (for specular material), so I adapted the code, so if its vertex(width/2+100,height/2+100) then I needed vertex(100, 100) etc.
  fill(192, 192, 192); // Silver
  specularMaterial(255); // Makes it shiny, from p5js.org on specularMaterial()
  shininess(50); // Glossy effect, from from p5js.org on specularMaterial()
  beginShape(); // Below creates trapezoid from vertices, from same code: https://editor.p5js.org/yzhang33/sketches/N32N4ZzS7
  vertex(550, 100);   // Bottom right of the trapezoid corner
  vertex(-550, 100);  // Bottom left
  vertex(-275, -100); // Top left
  vertex(275, -100);  // Top right
  endShape(CLOSE);
  
  // Draw black trapezoid "computer screen" (slightly smaller, inside the frame)
  push();
  translate(0, 0, 5);
  fill(20); // Dark screen
  beginShape();
  vertex(470, 65);   // Bottom right
  vertex(-470, 65);  // Bottom left
  vertex(-262, -88); // Top left
  vertex(262, -88);  // Top right
  endShape(CLOSE);
  pop(); // Restores transformation state for  black screen
  
  pop(); // Closes push() for the entire computer screen 
}
// Note: When the screen moves left and right, it creates a silver, lagging effect. I think its how the specular lighting and interacts with movement.

