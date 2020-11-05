/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const hour = parseInt(time);
  if (hour < 12) {
    return `Good Morning`;
  }
  else if (hour <= 17) {
    return `Good Afternoon`;
  }
  else {
    return `Good Evening`;
  }
  return greet();
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let content = document.getElementById("greeting").innerText = message;
  return message;
}
