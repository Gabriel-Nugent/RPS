function playRound(player_move){
    const event_text = document.getElementById('event_text')
    const possible_moves = ['rock','paper','scissors'];
    const computer_move = possible_moves[Math.floor(Math.random()*possible_moves.length)]
    if(player_move == computer_move){
        event_text.textContent="Computer chose " + computer_move + "... it's a tie! :o";
    }
    else if(player_move == 'rock' && computer_move == 'paper' 
        || player_move == 'paper' && computer_move == 'scissors'
        || player_move == 'scissors' && computer_move == 'rock'){
            event_text.textContent="Computer chose " + computer_move + "... you lose! :(";
        }
    else{
        event_text.textContent="Computer chose " + computer_move + "... you win! :)"  ;
    }
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click',function () {playRound('rock','event_text');});
paper.addEventListener('click',function () {playRound('paper','event_text');});
scissors.addEventListener('click',function () {playRound('scissors','event_text');});


