document.addEventListener('DOMContentLoaded', () =>{

    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    const winninngArray = [
        []
    ]

    function checkBoard(){

    }

    for(let i = 0; i<squares.length; i++){
        squares[i].onclick = () =>{
            if(squares[i + 7].classList.contains('taken')){
               if(currentPlayer == 1){
                console.log("clicked 1")
                squares[i].classList.add('taken')
                squares[i].classList.add('player-one')
                currentPlayer = 2;
                displayCurrentPlayer.innerHTML = currentPlayer
               }else if(currentPlayer == 2){
                console.log("clicked 2")
                squares[i].classList.add('taken')
                squares[i].classList.add('player-two')
                currentPlayer = 1
                displayCurrentPlayer.innerHTML = currentPlayer
                }
            }else alert('cant go here')

           checkBoard();
        }
    }


})