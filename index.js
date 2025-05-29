const Choices = {
  Rock: "Rock",
  Paper: "Paper",
  Scissors: "Scissors",
};

function getComputerChoice() {
  let randomNumber = Math.random() * 10;

  console.log(randomNumber);

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

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
