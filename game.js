let displayScore={
    wins:0,
    losses:0,
    ties:0
};
let store='';
    
    let result= '';
    function movement(playerMove){
      let computerMove=pickcomputerMove();
      if(playerMove === 'rock'){
        if(computerMove === 'rock'){
          result='tie';
        }else if(computerMove === 'paper'){
          result = 'you lose';
        }else if(computerMove === 'scisors'){
          result = 'you win';
        }
      }else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
          result='you win';
        }else if(computerMove === 'paper'){
          result = 'tie';
        }else if(computerMove === 'scisors'){
          result = 'you lose';
        }
      }else if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
          result='you lose';
        }else if(computerMove === 'paper'){
          result = 'you win';
        }else if(computerMove === 'scisors'){
          result = 'tie';
        }
      }

      if(result=== 'you win'){
        displayScore.wins+= 1;
      }else if(result=== 'you lose'){
        displayScore.losses+= 1;
      }else if(result === 'tie'){
        displayScore.ties+= 1;
      }

      document.querySelector('.js-result').innerHTML =(`you have picked ${playerMove} , the computer has picked ${computerMove}. ${result}`);

      document.querySelector('.counter').innerHTML=(`wins=${displayScore.wins},losses=${displayScore.losses}, ties=${displayScore.ties}`);

    }
    function pickcomputerMove(){
      let computerMove= '';
      const randomNumber= Math.random();
      if(randomNumber >=0 && randomNumber <= 1/3){
        computerMove ='rock';
      }else if(randomNumber >= 1/3 && randomNumber <= 2/3){
        computerMove = 'paper';
      }else if(randomNumber >= 2/3 && randomNumber < 1 )
      {
        computerMove = 'scisors';
      }
      return computerMove;

    }
     