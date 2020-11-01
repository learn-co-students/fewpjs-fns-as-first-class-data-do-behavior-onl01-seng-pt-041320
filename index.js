/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  var when = time.split(":");
  var hour = parseInt(when[0]);
  if (hour < 12) {
    var greeting = "Good Morning";
  } else if (hour <= 17) { 
    var greeting = "Good Afternoon";
  } else {
    var greeting = "Good Evening";
  }
  return greeting
}
/* Write your implementation of displayMessage() */

function displayMessage(message) {
  let h1 = document.getElementById("greeting");

  h1.innerText = message;
  // return message;
}
