'use strict';

var hidden;
var getSelected = (selectedClass) => document.querySelector(selectedClass);
var againButton = getSelected('.again');
var guessNumber = getSelected('.number');
var inputNumber = getSelected('input');
var checkButton = getSelected('.check');
var messageText = getSelected('.message')
var score  = getSelected('.score')
var highScore = getSelected('.highscore');
var bodySelect = getSelected('body');
var randomGenerate = () => Math.floor((Math.random() * 20)) + 1;
var resetGame = function () {
    hidden = randomGenerate();
    inputNumber.value = '';
    guessNumber.textContent = '?';
    messageText.textContent = 'Start guessing...';
    score.textContent = '0'
    checkButton.disabled = false;
}

// Reset game before starting
resetGame();

var tryToMatch = function(value){
    console.log(value, typeof(value), hidden, typeof(hidden))
    if( hidden === parseInt(value)){
        guessNumber.textContent = value;
        score.textContent = value;
        messageText.textContent = "🎉✨🧨Winner";
        highScore.textContent = parseInt(score.textContent) > parseInt(highScore.textContent) ? score.textContent : highScore.textContent
        checkButton.disabled = true;
        bodySelect.style.backgroundColor = 'green'
    }
    else{
        messageText.textContent = 'try again :)'
    }
}

inputNumber.addEventListener('change', (e)=>{
 checkButton.addEventListener('click', ()=>{
    tryToMatch(e.target.value)
  });
});
againButton.addEventListener('click', () => resetGame())

