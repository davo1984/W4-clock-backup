// JavaScript
function clockFun() {
const dateField = document.querySelector('button');

//Get current hour minute and second
let dte = new Date();
let hour = dte.getHours();
let minute = dte.getMinutes();
let second = dte.getSeconds();
let strM, strH, strS, dateString = '';

//testing
//hour = 13;

//get the hour; convert to 12 hour format; set am or pm; pad if needed
if (hour === 0) {
    amPM = 'AM';
    hour = 12;
} else if (hour < 12) {
    amPM = 'AM';
} else if (hour === 12) {
    amPM = 'PM';
} else if (hour > 12) {
    amPM = 'PM';
    hour = hour - 12;
} 

//pad hour, minute, second if needed
strH = addPad(hour, ' ');
strM = addPad(minute, '0');
strS = addPad(second, '0');

dateString = strH + ':' + strM + ':' + strS + ' ' +amPM;

document.getElementById("clockHere").innerHTML = dateString;
}

function addPad(n, p) {
    if (n < 10) {
        strN = p + n;
    } else {
        strN = n;
    }
    return strN;
};

window.onload=function(){
	clockFun();
	setInterval(clockFun, 1000);
}