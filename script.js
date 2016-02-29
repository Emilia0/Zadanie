window.onload = function () {

    function getTimeRemaining(endtime) {
        var timeLeft = endtime - Date.parse(new Date());
        var seconds = Math.floor((timeLeft / 1000) % 60);
        var minutes = Math.floor((timeLeft / 1000 / 60) % 60);
        var hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        return {
            'total': timeLeft,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function startCounter(id, endtime) {
        var counter = document.getElementById(id);
        var hoursBox = counter.querySelector('.counterHour');
        var minutesBox = counter.querySelector('.counterMinute');
        var secondsBox = counter.querySelector('.counterSecond');

        function updateCounter() {
            var timeLeft = getTimeRemaining(endtime);
            hoursBox.innerHTML = ('0' + timeLeft.hours).slice(-2);
            minutesBox.innerHTML = ('0' + timeLeft.minutes).slice(-2);
            secondsBox.innerHTML = ('0' + timeLeft.seconds).slice(-2);
            if (timeLeft.total <= 0) {
                clearInterval(timeinterval);
                setInterval(updateCounter, 1000)
            }
        }

        updateCounter();
        var timeInterval = setInterval(updateCounter, 1000);
    }

    var d = new Date();
    var deadline = d.setHours(24, 0, 0, 0);

    startCounter('counter', deadline);


    var rotator = document.getElementById("rotator");
    var images = rotator.getElementsByClassName("rotatorImage");
    for (var i = 1; i < images.length; i++) {
        images[i].style.display = "none";
    }
    var counter = 1;

    function rotate() {

        for (var i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        images[counter].style.display = "block";
        counter++;
        if (counter == images.length) {
            counter = 0;
        }
    }

    function rotateBack()   {
        for (var i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        images[counter - 1].style.display = "block";
        counter--;
        if (counter == 0) {
            counter = images.length;
        }
    }

    var intervalID;

    function startRotator() {
        intervalID = window.setInterval(rotate, 3000);
    }


    function stopRotator() {
        window.clearInterval(intervalID);
    }


    startRotator();

    document.getElementById('leftArrow').addEventListener('mouseover', stopRotator);
    document.getElementById('leftArrow').addEventListener('mouseout', startRotator);
    document.getElementById('leftArrow').addEventListener('click',rotateBack );

    document.getElementById('rightArrow').addEventListener('mouseover', stopRotator);
    document.getElementById('rightArrow').addEventListener('mouseout', startRotator);
    document.getElementById('rightArrow').addEventListener('click', rotate);


};

