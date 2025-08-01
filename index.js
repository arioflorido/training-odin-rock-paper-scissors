const Choices = {
  Rock: "rock",
  Paper: "paper",
  Scissors: "scissors",
};

const Players = {
  Player: "player",
  Computer: "computer",
};

function getComputerChoice() {
  let randomNumber = Math.random() * 10;
  if (randomNumber > 0 && randomNumber <= 3.66) {
    return Choices.Rock;
  }
  if (randomNumber > 3.66 && randomNumber <= 6.66) {
    return Choices.Paper;
  }
  if (randomNumber > 6.66 && randomNumber <= 10) {
    return Choices.Scissors;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return { winner: undefined };
  }

  if (humanChoice === Choices.Rock) {
    if (computerChoice === Choices.Paper) {
      return { winner: Players.Computer };
    }
    if (computerChoice === Choices.Scissors) {
      return { winner: Players.Player };
    }
  }

  if (humanChoice === Choices.Paper) {
    if (computerChoice === Choices.Scissors) {
      return { winner: Players.Computer };
    }
    if (computerChoice === Choices.Rock) {
      return { winner: Players.Player };
    }
  }

  if (humanChoice === Choices.Scissors) {
    if (computerChoice === Choices.Rock) {
      return { winner: Players.Computer };
    } else if (computerChoice === Choices.Paper) {
      return { winner: Players.Player };
    }
  }

  // TODO: It would be nice to throw an error here just in case the code above fail to cover some scenarios
  console.error("Failed to identify who's the winner. Please check.");
  return { winner: undefined };
}

const container = document.querySelector(".container");
let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

const playerScoreContainer = document.createElement("p");
const computerScoreContainer = document.createElement("p");

playerScoreContainer.textContent = "Player : " + playerScore;
computerScoreContainer.textContent = "Computer : " + computerScore;

const roundResultContainer = document.createElement("p");
const gameResultContainer = document.createElement("p");

container.appendChild(playerScoreContainer);
container.appendChild(computerScoreContainer);
container.appendChild(roundResultContainer);
container.appendChild(gameResultContainer);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    const humanChoice = button.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    const winner = playRound(humanChoice, computerChoice)["winner"];
    gameResultContainer.textContent = "";

    if (winner === Players.Player) {
      playerScore++;
      roundResultContainer.textContent = "Result : Player wins the round!";
    } else if (winner === Players.Computer) {
      computerScore++;
      roundResultContainer.textContent =
        "Round result : Computer wins the round!";
    } else {
      roundResultContainer.textContent = "Round result : Draw!";
    }
    playerScoreContainer.textContent = "Player : " + playerScore;
    computerScoreContainer.textContent = "Computer : " + computerScore;

    if (playerScore === winningScore) {
      gameResultContainer.textContent = "Player wins the game!";
    } else if (computerScore === winningScore) {
      gameResultContainer.textContent = "Computer wins the game!";
    }

    if (playerScore === winningScore || computerScore === winningScore) {
      // Reset score
      playerScore = 0;
      computerScore = 0;
    }
  });
});

// TODOs
// add constants and string templates
// make code more DRY
// add setup() function, will setup scoreboard
// organize items to classes?
