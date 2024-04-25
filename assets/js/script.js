document.addEventListener("DOMContentLoaded", function() {
    const computerImages = document.querySelectorAll(".computer img");
    const playerImages = document.querySelectorAll(".player img");
    const computerPoint = document.querySelector(".computerPoint");
    const playerPoint = document.querySelector(".playerPoint");
    const resultDisplay = document.querySelector(".resultDisplay");
    const options = document.querySelectorAll(".options button");
    const resetButton = document.querySelector(".reset-btn");

    options.forEach(option => {
        option.addEventListener("click", () => {
            playRound(option.textContent.toUpperCase());
        });
    });

    function playRound (playerChoice) {
        const computerChoice = getComputerChoice();
        addShakeAnimations();
        setTimeout(() => {
            updateImages(playerChoice, computerChoice);
            updateScore(playerChoice, computerChoice);
            resultDisplay(playerChoice, computerChoice);
        }, 900);
    }

    function getComputerChoice() {
        const choices = ["ROCK", "PAPER", "SCISSORS"];
        return choices[Math.floor(Math.random() * 3)];
    }

    function updateImages(playerChoice, computerChoice) {
        const choiceIndex = choice => ["ROCK", "PAPER", "SCISSORS"].indexOf(choice.toUpperCase());
        computerImages.forEach((image, index)=> image.style.display = index === choiceIndex(computerChoice)? "block" : "none");
        playerImages.forEach((image, index)=> image.style.display = index === choiceIndex(playerChoice)? "block" : "none");
    }

    function addShakeAnimations() {
        const shakeComputer = () => computerImages.forEach(image => image.classList.add("shakeComputer"));
        const shakePlayer = () => playerImages.forEach(image => image.classList.add("shakePlayer"));
        const clearShake = () => {
            computerImages.forEach(image => classList.remove("shakeComputer"));
            playerImages.forEach(image => classList.remove("shakePlayer"));
        };

        shakeComputer();
        shakePlayer();
        setTimeout(clearShake, 900);
    }

    function updateScore(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) return;
        const winner = (
            (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
            (playerChoice === "PAPER" && computerChoice === "ROCK") ||
            (playerChoice === "SCISSORS" && computerChoice === "PAPER") 
        ) ? playerChoice : computerChoice;

        winner.textContent = parseInt(winner.textContent) + 1;
    }

});