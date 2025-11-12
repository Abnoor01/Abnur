const buttons = document.querySelectorAll(".choice");
const userChoiceText = document.getElementById("userChoice");
const computerChoiceText = document.getElementById("computerChoice");
const winnerText = document.getElementById("winner");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        const winner = getWinner(userChoice, computerChoice);

        // Display results
        userChoiceText.textContent = userChoice;
        computerChoiceText.textContent = computerChoice;
        winnerText.textContent = winner;
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getWinner(user, computer) {
    if (user === computer) {
        return "It's a Draw!";
    }

    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "You Win! 🎉";
    }

    return "Computer Wins!";
}
