const timerDisplay = document.querySelector('.timer-display');
const decrementBtn = document.querySelector('#decrement');
const incrementBtn = document.querySelector('#increment');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const stopBtn = document.querySelector('#stop');
const sunElement = document.querySelector('.sun');

let timeRemaining = 25 * 60; // 25 minutes in seconds
let timerInterval;
let isPaused = false;

function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (!isPaused) {
      timeRemaining--;
      updateTimerDisplay();

      if (timeRemaining === 0) {
        clearInterval(timerInterval);
        sunElement.style.transform = 'translateX(-50%) translateY(-50%)';
        sunElement.style.width = '200px';
        sunElement.style.height = '200px';
      } else {
        const sunHeight = ((25 * 60 - timeRemaining) / (25 * 60)) * 100;
        sunElement.style.transform = `translateX(-50%) translateY(-${sunHeight}%)`;
      }
    }
  }, 1000);

  startBtn.disabled = true;
  pauseBtn.style.display = 'inline-block';
  stopBtn.style.display = 'inline-block';
}

function pauseTimer() {
  isPaused = true;
  pauseBtn.disabled = true;
  startBtn.disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  timeRemaining = 25 * 60;
  updateTimerDisplay();
  sunElement.style.transform = 'translateX(-50%) translateY(0%)';
  sunElement.style.width = '100px';
  sunElement.style.height = '100px';
  isPaused = false;
  startBtn.disabled = false;
  pauseBtn.style.display = 'none';
  pauseBtn.disabled = true;
  stopBtn.style.display = 'none';
  stopBtn.disabled = true;
}

decrementBtn.addEventListener('click', () => {
  timeRemaining = Math.max(timeRemaining - 60, 0);
  updateTimerDisplay();
});

incrementBtn.addEventListener('click', () => {
  timeRemaining = Math.min(timeRemaining + 60, 25 * 60);
  updateTimerDisplay();
});

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
stopBtn.addEventListener('click', stopTimer);

updateTimerDisplay();