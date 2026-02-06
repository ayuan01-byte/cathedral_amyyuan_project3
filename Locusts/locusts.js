// let s = function(p) {}
// new p5(s);

let locusts = []
let clicks = 0;
let capture; // Stores the user's webcam video feed, reference: https://editor.p5js.org/xingx460/sketches/Mu3i3MmPC

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Roboto Mono');
  textAlign(CENTER, CENTER);
  textSize(32);
  
  // Start video capture and size it to match canvas (code reference from: https://editor.p5js.org/xingx460/sketches/Mu3i3MmPC)
  capture = createCapture(VIDEO); 
  capture.size(windowWidth, windowHeight); 
  capture.hide(); // Hide raw video on the page, only show in canvas
  
  // 90 locusts with random positions at startup
  for (let i = 0; i < 90; i++) {
    locusts.push(createLocust(random(windowWidth), random(windowHeight), random(['left', 'right'])))
  }
}

function draw() {
  // Frame is black each cycle
  background(0);
  updateButtonDisplay();
  // Only show locusts after click 3
  if (clicks >= 3) {
    // Display webcam feed as background for locusts (reference: https://editor.p5js.org/xingx460/sketches/Mu3i3MmPC)
    image(capture, 0, 0, width, height);
    // Move all locusts
    updateAndDrawLocusts();
  }
  // Instructions and prompts appear on top
  drawPromptText();
}

function mouseClicked() {
  clicks++;
  // speech stops listening after the first click
  if (clicks >= 1) {
    recognition.stop();
    // finds the HTML element with id="overlay" and clears its content (to empty string "")
    document.getElementById("overlay").textContent = "";
  }
  // when clicked 5 times, the page will redirect back to
  if (clicks >= 5) {
    window.location.href = "../Cyanotype/cyanotype.html";
  }
}

function drawPromptText() {
  fill(255);
  // Instructions for clicking the screen
  textSize(18);
  text("Click to continue", width / 2, height * 0.1);
  
  textSize(32);
  if (clicks === 0) {
    // \n creates a new line below
    // Exodus 10 hints at locusts from the 10 Plagues of Egypt in the bible.
    text("Say each word slowly and clearly. \nRead from Exodus 10: locusts darkened the sky", width / 2, height * 0.25);
  } else if (clicks === 1) {
    // Empty string hides the prompt on this step
    text("the system refused to listen", width / 2, height / 2);
  } else if (clicks === 2) {
    text("", width / 2, height / 2);
  } else if (clicks >= 3) {
    text("your choice didn't matter \nthe system decided to spread them", width / 2, height / 2);
  }
}

function updateButtonDisplay() {
  // Get the button container element from the HTML
  const buttonContainer = document.getElementById("locust-buttons");
  // Check if its at click 2
  if (clicks === 2) {
    // Show the two buttons only on click 2
    buttonContainer.style.display = "block";
  } else {
    // "else" means if a condition isn't true, then do this instead:
    // hide buttons on all other clicks
    buttonContainer.style.display = "none";
  }
}

function createLocust(x, y, direction) {
  let locust = {
    // Store position (x,y) and directions for each locust
    x: x,
    y: y,
    direction: direction,
    lifespan: random(840, 960) // 14-16 seconds at 60fps
  };
  return locust;
}

// Function to update and draw all locusts
function updateAndDrawLocusts() {
  for (let i = 0; i < locusts.length - 1; i++) {
    let locust = locusts[i];
    drawLocust(locust);
    moveLocust(locust);
    locust.lifespan -= 1; // decrease lifespan each frame
    
    if (locust.lifespan <= 0) {
      locusts.splice(i, 1);
    }
  }
}

function drawLocust(locust) {
  // Back wing behind body
  noStroke();
  fill(255, 255, 255, 150);
  ellipse(locust.x + 15, locust.y - random(12, 15), 40, 15);
  // Body (long brown rectangle shape)
  fill(139, 115, 85); // darker brown
  ellipse(locust.x, locust.y, 70, 25); // long ellipse for body
  // Locust body stripes
  stroke(101, 84, 63);// brown for stripes
  strokeWeight(2);
  line(locust.x - 15, locust.y + 12, locust.x - 15, locust.y - 10);
  line(locust.x - 5, locust.y + 12, locust.x - 5, locust.y - 10);
  line(locust.x + 5, locust.y + 12, locust.x + 5, locust.y - 10);
  line(locust.x + 15, locust.y + 12, locust.x + 15, locust.y - 10);

  // Head (small dark ellipse at front)
  noStroke();
  fill(80, 65, 45);
  ellipse(locust.x - 32, locust.y, 20, 18);
  
  // Eye (black dot)
  fill(0);
  ellipse(locust.x - 35, locust.y - 5, 5, 7);
  
  // Front wing
  fill(218, 165, 32, 180); // yellow, transparent
  ellipse(locust.x + 20, locust.y - random(5, 10), 45, 18);
  }

// Moving locusts
function moveLocust(locust) {
  locust.x -= random(2, 8);
  
  if (locust.direction === 'left') {
    // In p5.js, y = 0 is the top of the screen and y increases downward.
    // random(-4, 0); the - and -4 makes a +4 (positive). 
    // So, subtracting a negative makes y increase/move down by up to 4 pixels per frame.
    // 4 pixels × 60 frames = 240 pixels down
    locust.y -= random(-4, 0);
  } else {
    // Here, it subtract a positive number making y smaller/move up
    locust.y -= random(0, 4);
  }
  if (locust.x < 0) {
    // When locust exits left edge, wrap to the right side
    locust.x = windowWidth
  }
  if (locust.x > windowWidth) {
    // When locust exits right edge, wrap to left edge
    locust.x = 0
  }
  if (locust.y < 0) {
    // When locust exits the top edge, wrap to bottom
    locust.y = windowHeight
  }
  if (locust.y > windowHeight) {
    // When locust exits the bottom edge, wrap to top
    locust.y = 0
  }
}



