                    
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





                            if(button.id != 'ROCK' && button.id != 'PAPER' && button.id != 'SCISSOR'){
                                 
                                console.log("Wrong Input")
                                playRound();
                                
                            }else{

                            }
                        });

                        document.getElementById("human");

                    });

                if(humanScore > computerScore){
                        // humanScoreElement.textContent = "Your score: " + humanScore;
                        // computerScoreElement.textContent = "Computer score: " + computerScore;
                        finalScore.textContent = "You win!";

                        // resultElement.textContent = "Result: You win!";
                    }else if(humanScore < computerScore){
                        // humanScoreElement.textContent = "Your score: " + humanScore;
                        // computerScoreElement.textContent = "Computer score: " + computerScore;                        
                        finalScore.textContent = "You lost!";
                        // resultElement.textContent = "Result: You lost!";
                    
                }else if (humanScore =! 0 && computerScore == humanScore){
                        // humanScoreElement.textContent = "Your score: " + humanScore;
                        // computerScoreElement.textContent = "Computer score: " + computerScore;
                        finalScore.textContent = "Draww!!";
                                            console.log("hi!!! line 103")


                        // resultElement.textContent = "Result: Draw!";
                }


        // let humanScore = 0;
        // let computerScore = 0;

        // function playRound(){

            // let playerInput = 'saaw';


                    // function getHumanChoice(){

                        // const btn = document.querySelector("#rock");
                        //     btn.onclick = () => alert('ROCK');

                            // const btn = document.querySelector("#rock");
                            //     btn.addEventListener("click", () => {
                            //     playerInput = 'ROCK';
                            //     console.log(playerInput)
                            
                            // });

            // const button.id = getHumanChoice();

            // let humanScoreElement = document.getElementById("human")
            // let computerScoreElement = document.getElementById("computer")
               


            // humanScoreElement.textContent = "Your score: " + humanScore;
            // computerScoreElement.textContent = "Computer score: " + computerScore;
                     

            // let scoreElement = document.getElementById("score");



               
                // {
                //     humanScore++   
                //     console.log("You get the point")
                //     console.log("You:", humanScore)
                //     console.log("Computer:", computerScore)
                //     // return scoreElement.textContent = "You get the point!";
                //     computerScore++
                //     console.log("Computer gets the point")
                //     console.log("Computer:", computerScore)
                //     console.log("You:", humanScore)        
                //     // scoreElement.textContent = "Computer gets the point!";

                // }


        

        // }


    // <button onclick="displayString()">Press Me</button>
    // <div id="result"></div>



                    
    //     function displayString() {
    //         const predefinedString = "Hello, World!";
    //         const resultElement = document.getElementById("result");
    //         resultElement.textContent = predefinedString;
    //         console.log(predefinedString)
    //     }






    //     function playGame(){
            

    //        playRound();
      
    //         // for (i = 0; i < 5; i++){
    //         //     playRound();
    //         //     console.log(`Round ${i}`);
    //         // }
      
                // let humanScoreElement = document.getElementById("human")
                // let computerScoreElement = document.getElementById("computer")
                // let resultElement = document.getElementById("result");

                

              

    //     }

    //     playGame()

    // }

// );

    
//   for (let i = 0; i < 1_000_000_000; i++);
  