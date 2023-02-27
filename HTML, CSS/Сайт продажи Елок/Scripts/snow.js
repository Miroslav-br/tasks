const createSnow = (n) => {
    const snowStyle = document.createElement('style');
    snowStyle.textContent = `
        body {
            position: relative;
        }
        body:after {
            content: '';
            position: absolute;
            inset: 0;
            background-repeat: no-repeat;
            background-position: 0 0;
            top: 66px;
            background-image: url(../Sources/elkavugol.png);
            z-index: 10;
        }
        .snow {
            position: fixed;
            width: 30px;
            height: 30px;
            top: 60px;
            z-index: 11;
            background-repeat: no-repeat;
            animation: fall linear;
        }

        @keyframes fall {
            100% {
                transform: translateY(100vh);
            }
        }
    `;
    document.head.append(snowStyle);
        const createSnowItem = () => {
            const snowItem = document.createElement('div');
            snowItem.classList.add('snow');

            const timeDuration = (((Math.random() * 10) +2)+n)*1000;

            document.body.append(snowItem);
            snowItem.style.cssText = `
                left: ${Math.random() * document.documentElement.clientWidth}px;
                background-image: url(../Sources/snow/snowflake${getRandomIntInclusive(1,4)}.svg);
                animation-duration: ${timeDuration}ms;
            `

            setTimeout(() => {
                snowItem.remove();
            }, timeDuration);
        };

    setInterval(createSnowItem, 150);
};

createSnow(1);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}