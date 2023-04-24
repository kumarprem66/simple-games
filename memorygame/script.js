"use strict";

const cardArray = [
    {
        name: 'cheeseburger',
        img: '/memorygame/images/cheeseburger.png'
    },

    {
        name: 'fries',
        img: '/memorygame/images/fries.png'
    },

    {
        name: 'hotdog',
        img: '/memorygame/images/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: '/memorygame/images/ice-cream.png'
    },

    {
        name: 'pizza',
        img: '/memorygame/images/pizza.png'
    },

    {
        name: 'milkshake',
        img: '/memorygame/images/milkshake.png'
    },

    {
        name: 'cheeseburger',
        img: '/memorygame/images/cheeseburger.png'
    },

    {
        name: 'fries',
        img: '/memorygame/images/fries.png'
    },

    {
        name: 'hotdog',
        img: '/memorygame/images/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: '/memorygame/images/ice-cream.png'
    },

    {
        name: 'pizza',
        img: '/memorygame/images/pizza.png'
    },
    {
        name: 'milkshake',
        img: '/memorygame/images/milkshake.png'
    },

  
    
]

cardArray.sort(() => 0.4 - Math.random());
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChoosen = [];
let cardsChoosenIds = [];
const cardsWon = [];

function createBoard(){
    for(let i = 0; i< cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','/memorygame/images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard )
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChoosenIds[0]
    const optionTwoId = cardsChoosenIds[1]
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','/memorygame/images/blank.png');
        cards[optionTwoId].setAttribute('src','/memorygame/images/blank.png');
   
        
    }else if(cardsChoosen[0] == cardsChoosen[1]){
        
        cards[optionOneId].setAttribute('src','/memorygame/images/white.png');
        cards[optionTwoId].setAttribute('src','/memorygame/images/white.png');
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChoosen)
    

    }else{
        cards[optionOneId].setAttribute('src','/memorygame/images/blank.png');
        cards[optionTwoId].setAttribute('src','/memorygame/images/blank.png');

    }

    resultDisplay.innerHTML = cardsWon.length;
    cardsChoosen = []
    cardsChoosenIds = []

    if(cardsWon.length == (cardArray.length/2)){
        resultDisplay.textContent = "Congratulation you found them all!"
    }
}

function flipCard(){

    let cardId = this.getAttribute('data-id');
    cardsChoosen.push(cardArray[cardId].name);
    cardsChoosenIds.push(cardId)

    this.setAttribute('src',cardArray[cardId].img);
    if(cardsChoosen.length == 2){
        setTimeout(checkMatch, 500);
    }
   
}