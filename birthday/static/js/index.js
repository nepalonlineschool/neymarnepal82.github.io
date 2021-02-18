// The data/time we want to counrDown to
let countDownDate = new Date("Mar 26, 2021 12:00:00").getTime();

// Run myfunc every second
let myfunc = setInterval(function(){

    let now = new Date().getTime();
    let timeleft = countDownDate - now;

    // Calculating the days. hours, minutes and second left
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds =Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element 
    document.getElementById("days").innerHTML = days + "d"
    document.getElementById("hours").innerHTML = hours + "h"
    document.getElementById("mins").innerHTML = minutes + "m"
    document.getElementById("secs").innerHTML = seconds + "s"
}, 1000);