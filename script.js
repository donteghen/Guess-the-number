'use strict';

var hidden;
let score = 20;
var getSelected = (selectedClass) => document.querySelector(selectedClass);
var againButton = getSelected('.again');
var guessNumber = getSelected('.number');
var inputNumber = getSelected('input');
var checkButton = getSelected('.check');
var messageText = getSelected('.message')
var scoreText  = getSelected('.score')
var highScore = getSelected('.highscore');
var bodySelect = getSelected('body');
var randomGenerate = () => Math.floor((Math.random() * 20)) + 1;
var resetGame = function () {
    score = 20;
    hidden = randomGenerate();
    inputNumber.value = '';
    guessNumber.textContent = '?';
    messageText.textContent = 'Start guessing...';
    scoreText.textContent = score;
    bodySelect.style.backgroundColor = 'black';
    checkButton.disabled = false;
}

// Reset game before starting
resetGame();

var tryToMatch = function(){
    if(score > 1){
        score--;
        scoreText.textContent = score;
        console.log(inputNumber.value, typeof(inputNumber.value), hidden, typeof(hidden), score)
        if( hidden === parseInt(inputNumber.value)){
            guessNumber.textContent = inputNumber.value;
            messageText.textContent = "🎉✨🧨Winner";
            highScore.textContent = score > parseInt(highScore.textContent) ? score : highScore.textContent
            checkButton.disabled = true;
            bodySelect.style.backgroundColor = 'green';
            
        }
        else{
            if(hidden > parseInt(inputNumber.value)){
                messageText.textContent = '😴Too Low'
            }
            else{
                messageText.textContent = '🤯 Too high'
            }
        }
    }
    else{
        messageText.textContent = "😥 You Lose. Reset Game and try again."
        bodySelect.style.backgroundColor = 'red';
    }    
}

inputNumber.addEventListener('change', (e)=>{
    inputNumber.value = e.target.value
});
checkButton.addEventListener('click', ()=>{
    tryToMatch()
  });
againButton.addEventListener('click', () => resetGame())

