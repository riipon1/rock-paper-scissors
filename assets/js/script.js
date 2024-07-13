// Select DOM elements
const computerImages = document.querySelectorAll(".computer img");
const playerImages = document.querySelectorAll(".player img");
const computerPoint = document.querySelector(".computerPoint");
const playerPoint = document.querySelector(".playerPoint");
const resultDisplay = document.querySelector(".resultDisplay");
const options = document.querySelectorAll(".options button");
const resetButton = document.querySelector(".reset-btn");

// Add event listeners to option buttons
options.forEach(option => {
    option.addEventListener("click", () => {
        playRound(option.textContent.toUpperCase());
    });
});

// Function to play a round
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    addShakeAnimations();
    setTimeout(() => {
        updateImages(playerChoice, computerChoice);
        updateScore(playerChoice, computerChoice);
        displayResult(playerChoice, computerChoice);
    }, 900);
}

// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * 3)];
}

// Function to update the displayed images
function updateImages(playerChoice, computerChoice) {
    const choiceIndex = choice => ["ROCK", "PAPER", "SCISSORS"].indexOf(choice.toUpperCase());
    computerImages.forEach((image, index) => image.style.display = index === choiceIndex(computerChoice) ? "block" : "none");
    playerImages.forEach((image, index) => image.style.display = index === choiceIndex(playerChoice) ? "block" : "none");
}

// Function to add shake animations
function addShakeAnimations() {
    const shakeComputer = () => computerImages.forEach(image => image.classList.add("shakeComputer"));
    const shakePlayer = () => playerImages.forEach(image => image.classList.add("shakePlayer"));
    const clearShake = () => {
        computerImages.forEach(image => image.classList.remove("shakeComputer"));
        playerImages.forEach(image => image.classList.remove("shakePlayer"));
    };

    shakeComputer();
    shakePlayer();
    setTimeout(clearShake, 900);
}

// Function to update the score
function updateScore(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return;
    const winner = (
        (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (playerChoice === "PAPER" && computerChoice === "ROCK") ||
        (playerChoice === "SCISSORS" && computerChoice === "PAPER")
    ) ? playerPoint : computerPoint;

    winner.textContent = parseInt(winner.textContent) + 1;
}

// Function to display the result of the round
function displayResult(playerChoice, computerChoice) {
    const resultText = (
        playerChoice === computerChoice ? "IT'S A TIE!" :
        (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (playerChoice === "PAPER" && computerChoice === "ROCK") ||
        (playerChoice === "SCISSORS" && computerChoice === "PAPER") ? "PLAYER WINS!" : "COMPUTER WINS!"
    );

    resultDisplay.textContent = resultText;
}

// Add event listener to reset button
resetButton.addEventListener("click", resetGame);

// Function to reset the game
function resetGame() {
    computerPoint.textContent = "0";
    playerPoint.textContent = "0";
    resultDisplay.textContent = "";

    computerImages.forEach((image, index) => image.style.display = index === 0 ? "block" : "none");
    playerImages.forEach((image, index) => image.style.display = index === 0 ? "block" : "none");
}