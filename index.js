const choices = ["rock", "paper", "scissors"];
const playerDiplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDsiplay");

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(computerChoice);


}