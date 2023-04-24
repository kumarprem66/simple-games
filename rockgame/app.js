const cc = document.getElementById('computer_choice');
const yc = document.getElementById('your_choice');
const result = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userSelected;
let computerChoice;
let conclusion;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{

    userSelected = e.target.id;
    yc.innerHTML = userSelected;
    generateComputerChoice();
    getResult();
}))


function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*possibleChoices.length)+1;

    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'paper'
    }

    cc.innerHTML = computerChoice;
}

function getResult(){
    if(computerChoice === userSelected){
        conclusion = 'its a draw!';
    }
    if(computerChoice === 'rock' && userSelected === 'paper'){
        conclusion = 'you win!';
    }
    if(computerChoice === 'rock' && userSelected === 'scissors'){
        conclusion = 'you lose!';
    }

    if(computerChoice === 'paper' && userSelected === 'scissors'){
        conclusion = 'you win!';
    }

    if(computerChoice === 'paper' && userSelected === 'rock'){
        conclusion = 'you lose!';
    }

    if(computerChoice === 'scissors' && userSelected === 'rock'){
        conclusion = 'you win!';
    }

    if(computerChoice === 'scissors' && userSelected === 'paper'){
        conclusion = 'you lose!';
    }

    result.innerHTML = conclusion;
}