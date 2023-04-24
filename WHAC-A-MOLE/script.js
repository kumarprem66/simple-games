"use strict";

const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeleft = document.querySelector('#time_left');
const score = document.querySelector('#score');
const startGame = document.getElementById('start');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
let countDownTimerID;

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', ()=>{
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole(){
   
    timerId = setInterval(randomSquare, 500);
    countDownTimerID = setInterval(countDown, 1000);
    
}
startGame.addEventListener('click',moveMole);


function countDown(){
    currentTime--
    timeleft.innerHTML = currentTime;
    if(currentTime == 0){
        clearInterval(countDownTimerID);
        clearInterval(timerId);
        alert('Game over! Your final score is '+result)
    }

}

