const Choices = {
  Rock: "Rock",
  Paper: "Paper",
  Scissors: "Scissors",
};

const Players = {
  Player: "Player",
  Computer: "Computer",
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

function getHumanChoice() {
  let input;
  const validChoices = [0, 1, 2];

  while (!input) {
    input = parseInt(
      prompt(
        `Choose: \n[0] - ${Choices.Rock} \n[1] - ${Choices.Paper} \n[2] - ${Choices.Scissors}`
      )
    );

    // Reset input and display prompt if input is not valid
    if (!validChoices.includes(input)) {
      console.log("Invalid choice. Please try again.  ");
      input = undefined;
    }

    switch (input) {
      case 0:
        return Choices.Rock;
      case 1:
        return Choices.Paper;
      case 2:
        return Choices.Scissors;
    }
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

function playGame() {
  console.log("Let's play rock, paper, scissors!");
  let humanScore = 0;
  let computerScore = 0;
  let rounds = 5;

  for (let round = 1; round <= rounds; round++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);

    console.log(`--- Round ${round} ---`);
    if (!roundResult.winner) {
      console.log(`It's a draw!`);
    } else {
      if (roundResult.winner === Players.Computer) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
      } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);

        humanScore++;
      }
    }
  }

  if (humanScore > computerScore) {
    console.log(`${Players.Player} is the winner!`);
  } else if (humanScore < computerScore) {
    console.log(`${Players.Computer} is the winner!`);
  } else {
    console.log("It's a draw");
  }
}

playGame();
