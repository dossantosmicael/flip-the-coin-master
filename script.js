document.addEventListener("DOMContentLoaded", () => {
    const coin = document.getElementById("coin");
    const resultText = document.getElementById("result");
    const flipBtn = document.getElementById("flip-btn");

    function flipCoin() {
        const isHeads = Math.random() < 0.5;
        const newSrc = isHeads ? "resources/heads.svg" : "resources/tails.svg";
        
        coin.style.transform = "rotateY(180deg)";
        
        setTimeout(() => {
            coin.src = newSrc;
            coin.style.transform = "rotateY(0deg)";
            resultText.textContent = isHeads ? "Heads" : "Tails";
        }, 300);
    }

    coin.addEventListener("click", flipCoin);
    flipBtn.addEventListener("click", flipCoin);
});
