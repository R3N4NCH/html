document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("revealButton").addEventListener("click", function () {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("content").style.display = "block";
    });

    function startCountdown() {
        const startDate = new Date('2024-02-07T00:00:00');
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('contador-text').innerHTML = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
    }
    setInterval(startCountdown, 1000);
    
    // Tocar música
    document.getElementById("playMusic").addEventListener("click", function() {
        let music = document.getElementById("music");
        if (music.paused) {
            music.play();
            this.innerText = "⏸️ Pausar Música";
        } else {
            music.pause();
            this.innerText = "🎵 Tocar Música";
        }
    });
});
