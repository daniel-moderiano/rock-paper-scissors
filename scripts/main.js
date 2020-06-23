        // computerPlay - function to randomly return either "Rock", "Paper" or "Scissors"
     
        function selectComputerChoice() {
            let rand = Math.random();
            if (rand <= 1/3) {
                return "rock";
            } else if (rand > 1/3 && rand <= 2/3) {
                return "paper";
            } else {
                return "scissors";
            }
        }

        function selectPlayerChoice() {
            let playerSelection = window.prompt("Rock, Paper, or Scissors?");
            return playerSelection.toLowerCase();
        }
        

        function playRound(playerSelection, computerSelection) {
            console.log((`You chose: ${playerSelection} \nThe computer chose: ${computerSelection}`));

            if (playerSelection === computerSelection) {
                return "It's a draw!";
            }

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
        
        // EventListener for each button that calls the playRound function on each click

        // const buttonRock = document.querySelector(".button--rock");
        // const buttonPaper = document.querySelector(".button--paper");
        // const buttonScissors = document.querySelector(".button--scissors");
        const buttons = document.querySelectorAll(".button");

        // Add function on click with the following code, using "function" syntax

        buttons.forEach(function(button) {
            button.addEventListener('click', function (e) {
                if (button.className.includes("rock")) {
                    console.log(("rock selected"));
                } else if (button.className.includes("paper")) {
                    console.log(("paper selected"));
                } else {
                    console.log("scissors selected");
                }     
            });
        });

        // The same function using arrow syntax

        // buttons.forEach(button => {
        //     button.addEventListener('click', function (e) {
        //         console.log(e);
        //     });
        // });
        

        function game() {
            let roundCount = 1;
            let compScore = 0;
            let playerScore = 0;
            for (i = 0; i < 5; i++) {
                console.log(`ROUND ${roundCount}`);
                let result = playRound(selectPlayerChoice(), selectComputerChoice());
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