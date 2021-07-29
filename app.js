

var min = prompt("Enter a minute");
var sec=prompt("Enter a second")

var dispMin = document.getElementById('min');
var dispSec = document.getElementById('sec');
function timer(){
    dispMin.innerHTML=min
    sec--    
    dispSec.innerHTML=sec
if(sec<=0){
min--
dispMin.innerHTML=min
sec=59
    }
else if(min==0)
{
    if(sec=0)
    dispMin.innerHTML=0
    dispSec.innerHTML=0
    clearInterval(interval)
}

}
interval= setInterval(timer,1000)
