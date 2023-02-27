const timerFun = () => {
    const timer = document.createElement('div');
    const timerText = document.createElement('p');
    const timerCount = document.createElement('span');

    timer.classList.add('timer');
    timerText.classList.add('timerText');
    timerCount.classList.add('timer__count');

    timerText.textContent = "До конца нового года осталось: ";
    timerCount.textContent = "3 дня 20 часов 20 минут 19 секунд";

    timer.append(timerText);
    timerText.append(timerCount);
    document.body.append(timer);
    
    const nextNewYear = new Date(2024, 0, 1, 0, 0 ,0);

    const numAndWord = document.querySelectorAll('.num_and_word');

	// возвращает число и слово
	const declOfNum = (n, titles) => {
    return n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
	0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
    }

    const startTimer = () => {

        const timeNow = new Date();

        let timeStamp = (nextNewYear - timeNow) / 1000;

        const secondsLeft = Math.floor(timeStamp % 60);
        timeStamp /= 60;
        const minutesLeft = Math.floor(timeStamp % 60);
        timeStamp /= 60;
        const hoursLeft = Math.floor(timeStamp % 60);
        timeStamp /= 24;
        const daysLeft = Math.floor(timeStamp);

        const s = declOfNum(secondsLeft,['секунда','секунды','секунд']);
        const m = declOfNum(minutesLeft,['минута','минуты','минут']);
        const h = declOfNum(hoursLeft,['час','часа','часов']);
        const d = declOfNum(daysLeft,['день','дня','дней']);
        
        
        timerCount.textContent = `${d} ${h} ${m} ${s}`;
        setTimeout(startTimer, 1000)
    };

    startTimer();
    // setInterval(startTimer,1000)
};

timerFun();