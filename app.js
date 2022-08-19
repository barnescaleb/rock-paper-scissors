let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input')

function getComputerChoice() {
        let choose = ['Rock', 'Paper', 'Scissors'];
        return choose[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    let result = ""
    
    
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {

        playerScore += 1
        result = ('You Win! ' + playerSelection + ' beats ' + computerSelection
        + '<br><br>Player Score: ' + playerScore + '<br><br>Computer Score: ' + computerScore)

        if (playerScore == 5) {
            result += 'You Won, Rock, Raper, Scissors Champ!'
        }

    } 
    else if (playerSelection == computerSelection) {
        result = ('Tie! ' 
        + '<br><br>Player Score: ' + playerScore + '<br><br>Computer Score: ' + computerScore)
    }
    else {
        computerScore += 1
        result = ('Computer Wins! ' + computerSelection + ' beats ' + playerSelection
        + '<br><br>Player Score: ' + playerScore + '<br><br>Computer Score: ' + computerScore)

        if (computerScore == 5) {
            result += '<br><br>You lose, best of luck next time!'
        }
    }

    document.getElementById('result').innerHTML = result
    return

};

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
        })
    });

