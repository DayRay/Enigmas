const targetDate = new Date('2024-08-18T10:00:00');
function updateTimer() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        document.getElementById('timer').innerText = "Tempo esgotado!";
        clearInterval(timerInterval);
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        document.getElementById('timer').innerText =
            `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
    }
}
const timerInterval = setInterval(updateTimer, 1000);
updateTimer();