window.onscroll = function() {myFunction()};
      
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        } else {
        navbar.classList.remove("sticky");
        }
    }

var timerID = null;
var timerRunning = false;
function showtime() {
today = new Date();
Prodej = new Date("april 10, 2022, 20:00")
msPerDay = 24 * 60 * 60 * 1000 ;
timeLeft = (Prodej.getTime() - today.getTime());
e_daysLeft = timeLeft / msPerDay;
daysLeft = Math.floor(e_daysLeft);
e_daysLeft = timeLeft / msPerDay;
daysLeft = Math.floor(e_daysLeft);
e_hrsLeft = (e_daysLeft - daysLeft)*24;
hrsLeft = Math.floor(e_hrsLeft);
minsLeft = Math.floor((e_hrsLeft - hrsLeft)*60);
hrsLeft = hrsLeft;
e_minsLeft = (e_hrsLeft - hrsLeft)*60;
secLeft = Math.floor(e_hrsLeft);
secLeft = Math.floor((e_minsLeft - minsLeft)*60);
secLeft = secLeft;
Temp3='Zbývá '+daysLeft+' dní, '+hrsLeft+' hodin, '+minsLeft+' minut, '+secLeft+' sekund.'
document.odpocet.zbyva.value=Temp3;
timerID = setTimeout("showtime()",1000);
timerRunning = true;
}
var timerID = null;
var timerRunning = false;
function stopclock () {
if(timerRunning)
clearTimeout(timerID);
timerRunning = false;
}
function stopClock() {
stopclock();
return;
}
function startclock () {
stopclock();
showtime();
}


