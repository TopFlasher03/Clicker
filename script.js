let startTime = 0;
let actualTime = 0;
let previousTime = 0;
let interval = null;
let isRunning = false;
function start()
{
    if(isRunning==false)
        {
            //console.log(startTime);
            startTime = Date.now();
            interval = setInterval(updateTime, 10);
            isRunning = true;
        }
}
function updateTime()
{
    actualTime = Date.now() - startTime + previousTime;
    //console.log(actualTime);
    let milliseconds = String(Math.floor(actualTime%1000/10)).padStart(2,0);
    let seconds = String(Math.floor(actualTime/1000 % 60)).padStart(2,0);
    let minutes = String(Math.floor(actualTime/(1000*60) % 60)).padStart(2,0);
    let hours = String(Math.floor(actualTime/(1000*3600))).padStart(2,0);
    document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
function stop()
{
    if(isRunning==true)
        {
            clearInterval(interval);
            //console.log(actualTime);
            previousTime = actualTime;
            isRunning = false;
        }
}
function reset()
{
    if(isRunning == true)
        {
            clearInterval(interval);
            isRunning = false;
        }
    document.getElementById("timer").textContent = "00:00:00:00";
    startTime = 0;
    actualTime = 0;
    previousTime = 0;
}