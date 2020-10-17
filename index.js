/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
    let timeArray = time.split(':');
    let temp = parseInt(timeArray[0], 10);

    if (temp < 12) {
        return "Good Morning";
    } else if (temp >= 12 && temp < 17) {
        return "Good Afternoon";
    } else if (temp >= 17 && temp < 24) {
        return "Good Evening";
    } else {
        return undefined
    };
}
/* Write your implementation of displayMessage() */
function displayMessage(aString) {
    const input = document.getElementById("greeting");

    if (aString != undefined) {
        input.innerText = `${aString}`
    } else {
        input.innerText = "Test"
    }
};