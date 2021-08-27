'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
console.log(secretNumber);
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = 'No number !';
    }
    else if(guess !== secretNumber){
        if(score>1){
            score --;
            document.querySelector('.score').textContent = score;
            if(guess < secretNumber){
                document.querySelector('.message').textContent = 'Too low !';
            }
            else{
                document.querySelector('.message').textContent = 'Too high !';
            }
        }
        else{
            document.querySelector('.message').textContent = 'You lost the game !';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = "red";
            document.querySelector('.number').style.width = "300px";
        }
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'You won !';
        document.querySelector('body').style.backgroundColor = "green";

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
 });
 document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = "";

    secretNumber = Math.trunc(Math.random()*20)+1;
    console.log(secretNumber);

    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
   })
