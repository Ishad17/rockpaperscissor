                    
            let round = 0;
            let humanScore = 0;
            let computerScore = 0;

            const buttons = document.querySelectorAll("button");
            const resultDiv = document.getElementById("result");
            const humanDiv = document.getElementById("human");
            const computerDiv = document.getElementById("computer");
            const finalScore = document.getElementById("final");

                    // we use the .forEach method to iterate through each button
        buttons.forEach((button) => {
                        // and for each one we add a 'click' listener
                button.addEventListener("click", () => {

                        round++;    

                    const input = ['ROCK', 'PAPER','SCISSOR']
                    const randomString = input[Math.floor(Math.random() * 3)];
                    
                    if (button.id === randomString){
                        resultDiv.textContent = "No point!";

                    } else if((button.id === 'ROCK' && randomString === 'SCISSOR') ||
                        (button.id === 'PAPER' && randomString === 'ROCK') ||
                        (button.id === 'SCISSOR' && randomString === 'PAPER')){
                        humanScore++;
                        resultDiv.textContent = "Your point!";

                    }else if((button.id === 'SCISSOR' && randomString === 'ROCK') ||
                        (button.id === 'ROCK' && randomString === 'PAPER') ||
                        (button.id === 'PAPER' && randomString === 'SCISSOR'))
                    {
                        computerScore++;
                        resultDiv.textContent = "Computer's point!";
                    }
                        humanDiv.textContent = `${humanScore}`; 
                        computerDiv.textContent = `${computerScore}`;

                if((round >= 5) && (humanScore > computerScore)){
                    finalScore.textContent = "You win!";
                    resultDiv.textContent = "Game over! No more rounds.";
                    return;
                }else if((round >= 5) && (humanScore == computerScore)){
                    finalScore.textContent = "Draaaaaw!";
                    resultDiv.textContent = "Game over! No more rounds.";
                    return;                                                    
                }else if(round >= 5) {
                    resultDiv.textContent = "Game over! No more rounds.";    
                    finalScore.textContent = "You kost!!";
                    return;                            
                }
    
                });

        });
                    
  