document.addEventListener("DOMContentLoaded", () => {
    let timer = document.getElementById('timer');
    let countdownCard = document.querySelector('.countdown-card');
    let time = 600; // 5 minutos em segundos

    const countdown = setInterval(() => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        timer.textContent = `${minutes}:${seconds}`;
        time--;

        if (time < 0) {
            clearInterval(countdown);
            timer.textContent = "00:00";
        }
    }, 1000);

    // Move o ícone de contagem regressiva para a esquerda do temporizador
    let timerIcon = document.createElement('span');
    timerIcon.classList.add('timer-icon');
    timerIcon.textContent = '⏳';
    countdownCard.insertBefore(timerIcon, timer);
});
