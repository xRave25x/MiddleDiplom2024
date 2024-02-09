const timer = deadLine => {
    const timerDays = document.getElementById('timer-days');
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

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

        timerDays.textContent = getTime.days
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;



        if (getTime.timeRemaning < 0) {
            clearInterval(interval);
            timerDays.textContent = '00';
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';

        }
    };
    interval = setInterval(updateClock, 1000);

};

export default timer;