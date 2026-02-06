// This displays the selected dropdown value below the dropdown menu
// Inspiration: https://www.youtube.com/shorts/Oj8urdXtQr8
// question1.onchange = when the dropdown selection changes, run this function
// result1.innerText = update the text content of the result1 div
// this.value = gets the value attribute of the selected option
question1.onchange = function () {
  result1.innerText = this.value;
}
