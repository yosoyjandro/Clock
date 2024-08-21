setInterval(()=>{
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = " am ";
    if (hours > 12) {
        day_night = " pm "
        hours = hours - 12;

    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;

    }
    time.textContent = hours + ":"+ minutes + ":" +seconds + ""+ day_night


})