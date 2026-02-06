// let object = document.querySelector(".object");
// let player = document.querySelector(".player");

document.querySelectorAll(".draggable").forEach(element => {
    let offsetX, offsetY, isDragging = false;
   
       element.addEventListener("pointerdown", (event) => {
           isDragging = true;
           offsetX = event.clientX - element.getBoundingClientRect().left;
           offsetY = event.clientY - element.getBoundingClientRect().top;
           element.style.position = "absolute";
           element.style.zIndex = "1000";
       });
   
       document.addEventListener("pointermove", (event) => {
           if (!isDragging) return;
           element.style.left = `${event.clientX - offsetX}px`;
           element.style.top = `${event.clientY - offsetY}px`;
       });
   
       document.addEventListener("pointerup", () => {
           isDragging = false;
       });
   });

   
// Collision detection: learned how to detect when two images overlap using getBoundingClientRect()
// Inspired by: https://www.youtube.com/watch?v=iW4udV19aLk
// Select all objects (all draggable images), not just the first one
let objects = document.querySelectorAll(".object");
let player = document.querySelector(".player");

// Check for collision between dragged and non-dragged image on every mouse movement
// (event) contains mouse movement information
// mousemove learned from: https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
window.addEventListener("mousemove", (event) => {
    // Get the position and dimensions of the non-draggable player image (1.JPG)
    let playerbounds = player.getBoundingClientRect();

    // Check every draggable object so they all respond to overlap
    // forEach means runs once per element
    objects.forEach((object) => {
        // Get the position and dimensions of the draggable object (f1.png) every time the mouse moves
        let objectbounds = object.getBoundingClientRect();

    // Check if the two images overlap with its four sides
    if (
        playerbounds.bottom >= objectbounds.top && // Player's bottom edge is touching object's top edge
        playerbounds.right >= objectbounds.left && // Player's right edge is touching object's left edge
        playerbounds.left <= objectbounds.right && // Player's left edge is touching object's right edge
        playerbounds.top <= objectbounds.bottom    // Player's top edge is touching object's bottom edge
    ) {
        // If all conditions are true, images overlap (add white filter)
        object.classList.add("touch");
    } else {
        // If images don't overlap (remove white filter)
        object.classList.remove("touch");
    }
});
});
