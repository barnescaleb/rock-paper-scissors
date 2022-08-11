const choose = ['rock', 'paper', 'scissors'];

function getComputerChoice(choose) {
    return choose[Math.floor(Math.random() * choose.length)];
}

console.log(getComputerChoice(choose));