document.getElementById("dateField").addEventListener("change", function() {
inputDate = this.value;
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

function countdown(){
    var newDate = inputDate;
    const newYearDate = new Date(inputDate);
    const currentDate = new Date();

    const totaltime = (newYearDate - currentDate) / 1000;
    const totalseconds = totaltime - 19800;

    const days = Math.floor(totalseconds / 3600 / 24)
    const hours = Math.floor(totalseconds / 3600) % 24
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    console.log(newDate, days , hours,mins,seconds)
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown,1000) 
});