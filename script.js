let workTittle = document.getElementById('work');

let workTime = 25;

let seconds = "00";
let intervalId; // Variable to hold the interval ID

// Display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}

// Start timer
function start() {
    // Change button
    document.getElementById('start').style.display = "none";
    document.getElementById('give-up').style.display = "block";

    // Change the time
    seconds = 59;

    let workMinutes = workTime - 1;

    // Countdown
    let timerFunction = () => {
        // Change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // Start
        seconds = seconds - 1;

        if (seconds === 0) {
            workMinutes = workMinutes - 1;
            if (workMinutes === -1) {
                clearInterval(intervalId); // Stop the timer
                document.getElementById('give-up').style.display = "none"; // Hide the "Give Up" button
                document.getElementById('start').style.display = "block"; // Show the "Start" button
                return;
            }
            seconds = 59;
        }
    }

    // Start countdown
    intervalId = setInterval(timerFunction, 1000); // 1000 = 1s
}

// Give up
function giveUp() {
    clearInterval(intervalId); // Stop the timer

    // Reset timer display
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = '00';

    // Reset button
    document.getElementById('give-up').style.display = "none";
    document.getElementById('start').style.display = "block";
}
