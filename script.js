                    
            let round = 0;
            let humanScore = 0;
            let computerScore = 0;

            const buttons = document.querySelectorAll("button");
            const resultDiv = document.getElementById("result");
            const humanDiv = document.getElementById("human");
            const computerDiv = document.getElementById("computer");
            const finalScore = document.getElementById("final");
            const playerInput = document.getElementById("pl");
            const computerInput = document.getElementById("pc");

                    // we use the .forEach method to iterate through each button
        buttons.forEach((button) => {
                        // and for each one we add a 'click' listener
                button.addEventListener("click", () => {
                        playRound(button.id);
                });


        });
                        // round++;    

                function playRound(playerSelection){

                    const input = ['ROCK', 'PAPER','SCISSOR']
                    const randomString = input[Math.floor(Math.random() * 3)];

                    playerInput.textContent = playerSelection;
                    computerInput.textContent = randomString;
                    
                    if (playerSelection === randomString){
                        resultDiv.textContent = "No point!";

                    } else if((playerSelection === 'ROCK' && randomString === 'SCISSOR') ||
                        (playerSelection === 'PAPER' && randomString === 'ROCK') ||
                        (playerSelection === 'SCISSOR' && randomString === 'PAPER')){
                        humanScore++;
                        resultDiv.textContent = "Your point!";

                    }else if((playerSelection === 'SCISSOR' && randomString === 'ROCK') ||
                        (playerSelection === 'ROCK' && randomString === 'PAPER') ||
                        (playerSelection === 'PAPER' && randomString === 'SCISSOR'))
                    {
                        computerScore++;
                        resultDiv.textContent = "Computer's point!";
                    }
                        humanDiv.textContent = `${humanScore}`; 
                        computerDiv.textContent = `${computerScore}`;

                    if(humanScore == 5){
                        finalScore.textContent = "You win!";
                        resultDiv.textContent = "Game over! No more rounds.";
                        disableButtons()
                        return;                         
                    }else if(computerScore == 5) {
                        resultDiv.textContent = "Game over! No more rounds.";    
                        finalScore.textContent = "You Lost!!";
                        disableButtons()
                        return;                            
                    }
    
                }
    
               // Disable buttons when game is over
                    function disableButtons() {
                        buttons.forEach(button => button.disabled = true);
                    } 

                    
  