let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

setInterval(() => {
    time = new Date();
    let hours = String(time.getHours()).padStart(2, "0");
    let minutes = String(time.getMinutes()).padStart(2, "0");
    let seconds = String(time.getSeconds()).padStart(2, "0");

    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds; 
}, 1000);