const _days=document.getElementById('days');
const _hours=document.getElementById('hours');
const _min=document.getElementById('minutes');
const sec=document.getElementById('seconds');



const reqdate="26 Apr 2024";
function countdown(){
    const newDate = new Date(reqdate);
    const currentdate= new Date();

    const seconds=(newDate-currentdate)/1000;
    const days=Math.floor(seconds/3600/24);
    const hours=Math.floor(seconds/3600)%24;
    const minutes=Math.floor(seconds/60)%60;
    const _sec=Math.floor(seconds)%60;
    _days.innerHTML=days;
    _hours.innerHTML=hours;
    _min.innerHTML=minutes;
    sec.innerHTML=_sec;

    console.log(days,hours,minutes,_sec);
}

countdown();
setInterval(countdown,1000);