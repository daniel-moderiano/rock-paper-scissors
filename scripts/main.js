        // computerPlay - function to randomly return either "Rock", "Paper" or "Scissors"
     
        function selectComputerChoice() {
            let choices = ["rock", "paper", "scissors"];
            return choices[Math.floor(Math.random() * 3)];           
        }

        // Manual input function for player choice selection

        function selectPlayerChoice() {
            let playerSelection = window.prompt("Rock, Paper, or Scissors?");
            return playerSelection.toLowerCase();
        }
        
        // PlayRound uses a player selected input, either by input or button click, and also calls the selectComputerChoice function which returns a random choice. The two choices are then compared using rock, paper scissors rules, and a winner is declared.  

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {return "It's a draw!";}
            if (playerSelection === "rock" && computerSelection === "paper") {
                return "You lose! Paper beats Rock";
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                return "You win! Rock beats Scissors";
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                return "You lose! Scissors beats Paper";
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                return "You win! Paper beats Rock";
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                return "You lose! Rock beats Scissors";
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                return "You win! Scissors beats Paper";
            }
        }

        function capitalise(aString) {
            return aString.replace(aString[0], aString[0].toUpperCase());
        }

        // Initialise all document variables here

        const roundChoices = document.querySelector(".result__choices");
        const buttons = document.querySelectorAll(".button");
        const roundResult = document.querySelector(".result__outcome");
        const playerScore = document.querySelector(".scoreboard__score--player");
        const computerScore = document.querySelector(".scoreboard__score--computer");
        const roundCount = document.querySelector(".scoreboard__round-count");
        const winner = document.querySelector(".result__winner");
        roundCount.textContent = 0;
        computerScore.textContent = 0;
        playerScore.textContent = 0;

    

        // Function to tally and update scoreboard with round count, player score, and computer score

        function scoreCount(roundResult) {
            let roundCount = 1;
            let compScore = 0;
            let playerScore = 0;
            if (roundResult.includes("You win")) {
                playerScore += 1;
            } else if (roundResult.includes("draw")) {
                // pass
            } else {
                compScore +=1;
            }
            roundCount += 1;
            return `Round: ${roundCount} Player score: ${playerScore} Computer score: ${compScore}`
        }

        // Add an event listener for all buttons that inputs the button as the playerSelection arg for playRound, and then uses the result of the round as the new content for the <p> element that shows round result.

        buttons.forEach(function(button) {
            button.addEventListener('click', function (e) {
                let computerChoice = selectComputerChoice();
                let currentRoundCount = parseInt(roundCount.textContent);
                let currentPlayerScore = parseInt(playerScore.textContent);
                let currentComputerScore = parseInt(computerScore.textContent);
                if (button.className.includes("rock")) {
                    roundResult.textContent = playRound("rock", computerChoice);
                    roundChoices.textContent = `Player: Rock Computer: ${capitalise(computerChoice)}`;
           
                } else if (button.className.includes("paper")) {
                    roundResult.textContent = playRound("paper", computerChoice);
                    roundChoices.textContent = `Player: Paper Computer: ${capitalise(computerChoice)}`;
    
                } else {
                    roundResult.textContent = playRound("scissors", computerChoice);
                    roundChoices.textContent = `Player: Scissors Computer: ${capitalise(computerChoice)}`;
                }    
                currentRoundCount += 1;
                roundCount.textContent = currentRoundCount;

                if (roundResult.textContent.includes("You win")) {
                    currentPlayerScore += 1;
                    playerScore.textContent = currentPlayerScore;
                } else if (roundResult.textContent.includes("draw")) {
                    // pass
                } else {
                    currentComputerScore +=1;
                    computerScore.textContent = currentComputerScore;
                }

                if (playerScore.textContent === "5") {
                    alert("GAME OVER! Player Wins!");
                    computerScore.textContent = 0;
                    playerScore.textContent = 0;
                    roundCount.textContent = 0;
                } else if (computerScore.textContent === "5") {
                    alert("GAME OVER! Computer Wins!");
                    computerScore.textContent = 0;
                    playerScore.textContent = 0;
                    roundCount.textContent = 0;
                }

            });
        });

        // The same function using arrow syntax

        // buttons.forEach(button => {
        //     button.addEventListener('click', function (e) {
        //         console.log(e);
        //     });
        // });
        

        // Function to play through 5 consecutive rounds vs computer and announce a winner

        function game() {
            let roundCount = 1;
            let compScore = 0;
            let playerScore = 0;
            for (i = 0; i < 5; i++) {
                console.log(`ROUND ${roundCount}`);
                let result = roundResult.textContent;
                if (result.includes("You win")) {
                    playerScore += 1;
                } else if (result.includes("draw")) {
                    // pass
                } else {
                    compScore +=1;
                }
                roundCount += 1;
                console.log(result + `\nSCORE \nYou: ${playerScore} \nComputer: ${compScore}`);
            }
            if (compScore > playerScore) {
                return "Computer wins! Bad luck.";
            } else if (compScore === playerScore) {
                return "A complete draw!";
            } else {
                return "You win! Well done.";
            }
        }
