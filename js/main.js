// JavaScript
function clockFun() {
const dateField = document.querySelector('button');

//Get current hour minute and second
let dte = new Date();
let hour = dte.getHours();
let minute = dte.getMinutes();
let second = dte.getSeconds();
let strM, strH, strS, dateString = '';

//get the hour; convert to 12 hour format; set am or pm; pad if needed
if (hour > 12) {
    hour = hour - 12;
    if (hour <10) {
        strH = '0' + hour;
    } else {
        strH = hour;
    }
    amPM = 'PM';
} else if (hour = 0) {
    strH = 12;
    amPM = 'AM';
} else {
    amPM = 'AM';
    if (hour < 10) {
        strH = '0' + hour;
    } else {
        strH = hour;
    }
}

//pad minute if needed
if (minute < 10) {
    strM = '0' + minute;
} else {
    strM = minute;
}

//pad second if needed
if (second < 10) {
    strS = '0' + second;
} else {
    strS = second;
}

dateString = strH + ':' + strM + ':' + strS + ' ' +amPM;

document.getElementById("clockHere").innerHTML = dateString;
};

window.onload=function(){
	clockFun();
	setInterval(clockFun, 1000);
}