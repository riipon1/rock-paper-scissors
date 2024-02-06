//Rock Paper Scissors

const choicesDiv = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultdisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){

    const computerChoice = choicesDiv[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice){
        result = "It's a Tie!"
    }
    else{
        switch(playerChoice){
            case "rock":
              result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
              break;
            case "paper":
              result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
              break;
            case "scissors":
              result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
              break;
          }
        }

        
        playerDisplay.textContent = `PLAYER: ${playerChoice}`
        computerChoice.textContent = `Computer: ${computerChoice}`;
        resultdisplay.textContent = result;
    }
