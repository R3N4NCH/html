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
});
// Função para criar corações caindo
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Posicionamento aleatório
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Entre 2s e 5s

    document.body.appendChild(heart);

    // Remover o coração após a animação
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Criar corações a cada 500ms
setInterval(createHeart, 500);
