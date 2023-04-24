const grid = document.querySelector('.grid')
let currentShooterIndex = 202
let width  = 15
let direction = 1
let invadorId
let goingright = true;
let aliensRemoved = []
let results = 0
const resultDisplay = document.querySelector('.results')
const buttonStart = document.getElementById('start_button');

for(let i =0; i< 225; i++){
    const square = document.createElement('div')
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))
const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,32,33,34,35,36,37,38,39
]

function draw(){
   for (let i = 0; i < alienInvaders.length; i++) {

    if(!aliensRemoved.includes(i)){
        squares[alienInvaders[i]].classList.add('invador')
    }
       
   }
}

function remove(){
    for (let i = 0; i < alienInvaders.length; i++) {
         squares[alienInvaders[i]].classList.remove('invador')
     
    }
 }

draw()

squares[currentShooterIndex].classList.add('shooter')

function moveShooter(e){
    squares[currentShooterIndex].classList.remove('shooter')
    switch(e.key){
        case 'ArrowLeft':
            if(currentShooterIndex % width !== 0) currentShooterIndex -=1
            break

        case 'ArrowRight':
            if(currentShooterIndex % width < width-1) currentShooterIndex +=1
            break

    }
    squares[currentShooterIndex].classList.add('shooter')
}

document.addEventListener('keydown',moveShooter)

function moveInvador(){
    const leftEdge = alienInvaders[0] % width === 0
    const rigthEdge = alienInvaders[alienInvaders.length - 1]% width === width -1
    remove()

    if(rigthEdge && goingright){
        for(let i = 0; i< alienInvaders.length; i++){
            alienInvaders[i] += width+1
            direction =-1
            goingright = false
        }
    }

    if(leftEdge && !goingright){
        for(let i=0; i<alienInvaders.length; i++){
            alienInvaders[i] += width-1
            direction = 1
            goingright = true


        }
    }
    for(let i =0; i<alienInvaders.length; i++){
        alienInvaders[i] += direction
    }

    draw()

    if(squares[currentShooterIndex].classList.contains('invador','shooter')){
        resultDisplay.innerHTML = 'GAME 0VER'+": "+results
        clearInterval(invadorId)
    }

    for (let i = 0; i < alienInvaders.length; i++) {
        if(alienInvaders[i] > squares.length){
            resultDisplay.innerHTML = 'GAME 0VER'+": "+results
            clearInterval(invadorId)
        }
        
    }

    if(aliensRemoved.length === alienInvaders.length){
        resultDisplay.innerHTML = 'YOU WIN'
        clearInterval(invadorId)
    }
}


// document.getElementsByTagName('button').addEventListener('click',function(){

// invadorId =  setInterval(moveInvador, 500)
// })

function shoot(e){
    let laserId
    let currentLaserIndex = currentShooterIndex
    function moveLaser(){
        squares[currentLaserIndex].classList.remove('laser')
        currentLaserIndex -= width
        squares[currentLaserIndex].classList.add('laser')


        if(squares[currentLaserIndex].classList.contains('invador')){
            squares[currentLaserIndex].classList.remove('laser')
            squares[currentLaserIndex].classList.remove('invador')
            squares[currentLaserIndex].classList.add('boom')


            setTimeout(() => squares[currentLaserIndex].classList.remove('boom'),300)
            clearInterval(laserId)

            const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
            aliensRemoved.push(alienRemoved)
            results++
            resultDisplay.innerHTML = results


        }
    }

    switch(e.key){
        case 'ArrowUp':
            laserId = setInterval(moveLaser, 100)
    }
}

document.addEventListener('keydown', shoot)


buttonStart.addEventListener('click', (() => {
    invadorId =  setInterval(moveInvador, 500)
}))