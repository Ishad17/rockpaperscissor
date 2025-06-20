                    
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

                        console.log(button.id);

                        const input = ['ROCK', 'PAPER','SCISSOR']
                        const randomIndex = Math.floor(Math.random() * 3);
                        const randomString = input[randomIndex];

                        console.log(randomString);

                            if (button.id === randomString){
                                console.log("It's a tie")
                                console.log("You: ", humanScore)
                                console.log("Computer: ", computerScore);
                                resultDiv.textContent = "No point!";


                            } else if((button.id === 'ROCK' && randomString === 'SCISSOR') ||
                                    (button.id === 'PAPER' && randomString === 'ROCK') ||
                                    (button.id === 'SCISSOR' && randomString === 'PAPER')){
                                humanScore++;
                                console.log("You: ", humanScore)
                                console.log("Computer: ", computerScore);
                                console.log(`Round : ${round}`);  
                                console.log("Your point!");
                                resultDiv.textContent = "Your point!";

                            }else if((button.id === 'SCISSOR' && randomString === 'ROCK') ||
                                    (button.id === 'ROCK' && randomString === 'PAPER') ||
                                    (button.id === 'PAPER' && randomString === 'SCISSOR'))
                            {
                                     computerScore++;
                                console.log("You: ", humanScore)
                                console.log("Computer: ", computerScore);
                                console.log(`Round : ${round}`);  
                                console.log("Computer's point!");
                                resultDiv.textContent = "Computer's point!";

                            }

                            humanDiv.textContent = `${humanScore}`; 
                            computerDiv.textContent = `${computerScore}`;

                        if((round >= 5) && (humanScore > computerScore)){
                        finalScore.textContent = "You win!";
                        resultDiv.textContent = "Game over! No more rounds.";
                                    
                        // resultElement.textContent = "Result: You win!";
                    }else if((round >= 5) && (humanScore == computerScore)){
                        finalScore.textContent = "Draaaaaw!";
            resultDiv.textContent = "Game over! No more rounds.";
                                            
                }else if(round >= 5) {
                    resultDiv.textContent = "Game over! No more rounds.";    
                    finalScore.textContent = "You kost!!";

                }
                                    return;
                                


                            // if(button.id != 'ROCK' && button.id != 'PAPER' && button.id != 'SCISSOR'){
                                 
                            //     console.log("Wrong Input")
                            //     playRound();
                                
                            // }else{

                            // }





                        });

                        document.getElementById("human");


                    });
                    console.log("hi!!! line 103")
