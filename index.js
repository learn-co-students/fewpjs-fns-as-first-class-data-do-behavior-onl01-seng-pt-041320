/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(time) {
  let hour = time.split(":")[0];
  const parsed = parseInt(hour);
  if ( parsed < 12 ) { return `Good Morning`; }
  if ( parsed >= 12 ) { 
    if ( parsed < 17 ) { return `Good Afternoon`; }
    if ( parsed >= 17 ) { return `Good Evening`; }
  }
}

function displayMessage(argument) {
  let content = document.querySelector("h1#greeting");
  content.innerText = argument
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
