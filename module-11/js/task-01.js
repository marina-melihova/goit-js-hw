const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector('body');
const startRef = document.querySelector('.start');
const finishRef = document.querySelector('.finish');

let timerId;

const switchColor = function () {
  timerId = setInterval(function () {
    bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
  startRef.disabled = true;
  finishRef.disabled = false;
};

startRef.addEventListener('click', switchColor);

finishRef.addEventListener('click', function () {
  clearInterval(timerId);
  startRef.disabled = false;
  finishRef.disabled = true;
});
