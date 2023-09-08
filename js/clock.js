let name = prompt("Enter your name: ");

let myName = document.querySelector("#myName");

myName.innerHTML += `${myName.innerHTML} ${name}`;

if (name == "") {
    myName.innerHTML += `${myName.innerHTML} Hey There`;
}


function showTime() {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDay();
    let session = "AM";


    if (hours==0) {
        hours = 12;
    }
    else if (hours>12) {
        hours = hours -12;
        session = "PM";
    }


    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;


    if (day === 1) {
        day = "Monday"
    } 
    
    else if (day === 2) {
        day = "Tuesday"
    } 
    
    else if (day === 3) {
        day = "Wednesday"
    } 
    
    else if (day === 4) {
        day = "Thursday"
    } 
    
    else if (day === 5) {
        day = "Friday"
    } 
    
    else if (day === 6) {
        day = "Saturday"
    } 
    
    else if (day === 7) {
        day = "Sunday"
    }


    let time = `${hours}:${minutes}:${seconds}  ${session} ${day}`;
    document.getElementById("myClock").innerText = time;
    setTimeout(showTime,1000);
}

showTime();