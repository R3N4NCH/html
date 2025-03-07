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
            this.innerText = "⏸Pausar Música";
        } else {
            music.pause();
            this.innerText = "Tocar Música";
        }
    });
});

// Função corações caindo
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s"; 

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const images = document.querySelectorAll(".carousel-track img");
    let index = 0;

    function moveSlide() {
        index++;
        if (index >= images.length) {
            index = 0; 
        }
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveSlide, 3000); // Troca de imagem a cada 3 segundos
});
