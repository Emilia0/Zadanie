function getTimeRemaining(endtime)  {
    var timeLeft = endtime - Date.parse(new Date());
    //var timeLeft = Date.parse(new Date()) - Date.parse(endtime);

    var seconds = Math.floor((timeLeft/1000) % 60);
    var minutes = Math.floor((timeLeft/1000/60) % 60);
    var hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
    return {
        'total': timeLeft,
        'hours': hours,
        'minutes': minutes,
        'seconds':seconds
    };
}

function startCounter(id, endtime)  {
    var counter = document.getElementById(id);
    var hoursBox = counter.querySelector('.counterHour');
    var minutesBox = counter.querySelector('.counterMinute');
    var secondsBox = counter.querySelector('.counterSecond');

    function updateCounter(){
        var timeLeft = getTimeRemaining(endtime);
        hoursBox.innerHTML = ('0' + timeLeft.hours).slice(-2);
        minutesBox.innerHTML = ('0' + timeLeft.minutes).slice(-2);
        secondsBox.innerHTML = ('0' + timeLeft.seconds).slice(-2);
    }

    updateCounter();
    var timeInterval = setInterval(updateCounter,1000);

}
var d = new Date();
var deadline = d.setHours(24,0,0,0);

startCounter('counter', deadline);

