const digitalniSat = document.querySelector('.digitalni-sat');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let interval;

let vrijeme = 0;

function formatVrijeme() {
  const sati = Math.floor(vrijeme / 3600);
  const minute = Math.floor((vrijeme % 3600) / 60);
  const sekunde = vrijeme % 60;
  return [sati, minute, sekunde].map(vrijeme => vrijeme < 10 ? `0${vrijeme}` : vrijeme).join(':');
}

function start() {
  clearInterval(interval);
  interval = setInterval(() => {
    vrijeme++;
    digitalniSat.innerHTML = formatVrijeme();
  }, 1000);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  vrijeme = 0;
  digitalniSat.innerHTML = formatVrijeme();
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
