const timer = deadLine => {
    const timerDays = document.querySelectorAll('#timer-days');
    const timerHours = document.querySelectorAll('#timer-hours');
    const timerMinutes = document.querySelectorAll('#timer-minutes');
    const timerSeconds = document.querySelectorAll('#timer-seconds');

    let interval = 0;

    const getTimeRemaning = () => {
        const dateStop = new Date(deadLine).getTime();
        const dateNow = new Date().getTime();
        const timeRemaning = (dateStop - dateNow) / 1000;
        let days = Math.floor((timeRemaning / 60 / 60 / 24) % 60);
        let hours = Math.floor((timeRemaning / 60 / 60) % 60);
        let minutes = Math.floor((timeRemaning / 60) % 60);
        let seconds = Math.floor(timeRemaning % 60);


        if (seconds < 10) { seconds = '0' + seconds; }
        if (minutes < 10) { minutes = '0' + minutes; }
        if (hours < 10) { hours = '0' + hours; }
        return { timeRemaning, days, hours, minutes, seconds };
    };
    const updateClock = () => {
        const getTime = getTimeRemaning();
        timerDays.forEach(timerDay => {
            timerDay.textContent = getTime.days
        })
        timerHours.forEach(timerHour => {
            timerHour.textContent = getTime.hours
        })
        timerMinutes.forEach(timerMinute => {
            timerMinute.textContent = getTime.minutes
        })
        timerSeconds.forEach(timerSecond => {
            timerSecond.textContent = getTime.seconds
        })

        if (getTime.timeRemaning < 0) {
            clearInterval(interval);
            timerDays.forEach(timerDay => {
                timerDay.textContent = '00';
            })
            timerHours.forEach(timerHour => {
                timerHour.textContent = '00';
            })
            timerMinutes.forEach(timerMinute => {
                timerMinute.textContent = '00';
            })
            timerSeconds.forEach(timerSecond => {
                timerSecond.textContent = '00';
            })

        }
    };
    interval = setInterval(updateClock, 1000);

};

export default timer;