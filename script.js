const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const titleEl = document.getElementById('title');

const moneyBack = "16 Nov 2020";

function countDown() {
  const moneyBackDate = new Date(moneyBack);
  const currentDate = new Date();

  const totalSeconds =new Date(moneyBackDate - currentDate) /1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60; 
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;

  let titleview =`${days}d ${hours}h ${mins}m ${seconds}s`;

  titleEl.innerHTML = titleview;
}

setInterval(countDown, 1000);

countDown();