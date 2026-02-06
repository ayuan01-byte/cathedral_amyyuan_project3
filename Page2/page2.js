// The clickcounter for how many images have been clicked, inspired by: https://youtu.be/3s791xfRU48?t=234
let count = 0; // A new variable to track the number of clicks

function clickImage() {
  // This will increment the counter when clicked, from same video: https://youtu.be/3s791xfRU48?t=244
  count++; // Increments count by 1 each time
  document.getElementById('counter').innerHTML = count; // Updates the HTML display with the count value
  // In HTML: there is a <div id="counter">0</div> that displays the click count
  // Each image has onclick="changeImage#(); clickImage()" so the counter increments when any image is clicked
}

// Because I have many images that change to different images when clicked, I made separate functions for each image change.
// I was originally inspired by: https://www.youtube.com/watch?v=TXcjupbEst4
// but modified it to fit my needs with multiple images.
function changeImage1() 
{
    var img = document.getElementById('image1');
    img.src = 'page2/b1.png';
}

function changeImage2() 
{
    var img = document.getElementById('image2');
    img.src = 'page2/b2.png';
}

function changeImage3() 
{
    var img = document.getElementById('image3');
    img.src = 'page2/b3.png';
    img.style.width = '140px'; // Resizing image, because its too big and will drop too low on the screen

}

function changeImage4() 
{
    var img = document.getElementById('image4');
    img.src = 'page2/b4.png';
}

function changeImage5() 
{
    var img = document.getElementById('image5');
    img.src = 'page2/b5.png';
    img.style.width = '150px'; // Resizing image
}

function changeImage6() 
{
    var img = document.getElementById('image6');
    img.src = 'page2/b6.png';
    img.style.width = '160px'; // Resizing image
}

function changeImage7() 
{
    var img = document.getElementById('image7');
    img.src = 'page2/b7.png';
    img.style.width = '160px'; // Resizing image
}

function changeImage8() 
{
    var img = document.getElementById('image8');
    img.src = 'page2/b8.png';
    img.style.width = '160px'; // Resizing image
}

function changeImage9() 
{
    var img = document.getElementById('image9');
    img.src = 'page2/b9.png';
    img.style.width = '150px'; // Resizing image
}

function changeImage10() 
{
    var img = document.getElementById('image10');
    img.src = 'page2/b10.png';
    img.style.width = '150px'; // Resizing image
}

function changeImage11() 
{
    var img = document.getElementById('image11');
    img.src = 'page2/b11.png';
}

function changeImage12() 
{
    var img = document.getElementById('image12');
    img.src = 'page2/b12.png';
} 

function changeImage13() 
{
    var img = document.getElementById('image13');
    img.src = 'page2/b13.png';
}

function changeImage14() 
{
    var img = document.getElementById('image14');
    img.src = 'page2/b14.png';
}