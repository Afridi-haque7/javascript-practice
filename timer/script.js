const timeStamp = document.getElementById("time");
const button = document.getElementById("stop-btn");


function showTime() {
    const currentTime = new Date();
    const time = `${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`;
    timeStamp.innerText = time;
}

let interval = setInterval(showTime, 1000);

button.addEventListener('click', () => {
    clearInterval(interval);
})