document.addEventListener("DOMContentLoaded", function() {
    const computerImages = document.querySelectorAll(".computer img");
    const playerImages = document.querySelectorAll(".player img");
    const computerPoint = document.querySelector(".computerPoint");
    const playerPoint = document.querySelector(".playerPoint");
    const resultDisplay = document.querySelector(".resultDisplay");
    const options = document.querySelectorAll(".options button");
    const resetButton = document.querySelector(".reset-btn");

    options.forEach(Option => {
        options.addEventListener("click", () => {
            playRound(option.textContent.toUpperCase());
        });
    });

});