/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(aTime) {
  let fullTime = aTime.split(':')
  let hrTime = parseInt(fullTime[0]);
  if (hrTime < 12) {
    return "Good Morning";
  } else if (hrTime > 17) {
    return "Good Evening";
  }
  return "Good Afternoon";
  }


function displayMessage(text){
  document.getElementById("greeting").innerText = text;
}
