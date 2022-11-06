function endGame(){
    const player_score = 
        parseInt(document.getElementById('player_score').textContent);
    const computer_score = 
        parseInt(document.getElementById('computer_score').textContent);
    const message_container = document.getElementById('container');

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.remove();
    });

    const end_message = document.createElement("div");

    if (player_score > computer_score){
        end_message.textContent = "You've won! Good job!";
    }
    else if (computer_score > player_score){
        end_message.textContent = "You've lost... better luck next time!";
    }
    else if (player_score == computer_score){
        end_message.textContent = "I can't believe it... it's a tie!";
    }

    message_container.append(end_message);
}

function updateRound(outcome){
    const round_number = document.getElementById('round_number');
    let current_round = parseInt(round_number.textContent);
    current_round += 1;

    if (outcome == 'win'){
        player_score = 
            parseInt(document.getElementById('player_score').textContent);
        player_score += 1;
        document.getElementById('player_score').textContent = player_score;
    }
    else if (outcome == 'lose'){
        computer_score = 
            parseInt(document.getElementById('computer_score').textContent);
        computer_score += 1;
        document.getElementById('computer_score').textContent = computer_score;
    }
    if (current_round == 6){
        endGame();
        round_number.textContent = "Game Finished";
        return;
    }
    round_number.textContent = current_round;
}

function playRound(player_move){
    const event_text = document.getElementById('event_text')
    const possible_moves = ['rock','paper','scissors'];
    const computer_move = possible_moves[Math.floor(Math.random()*possible_moves.length)]
    
    if(player_move == computer_move){
        event_text.textContent="Computer chose " + computer_move + "... it's a tie! :o";
        updateRound('tie');
    }
    else if(player_move == 'rock' && computer_move == 'paper' 
        || player_move == 'paper' && computer_move == 'scissors'
        || player_move == 'scissors' && computer_move == 'rock'){
            event_text.textContent="Computer chose " + computer_move + "... you lose! :(";
            updateRound('lose');
        }
    else{
        event_text.textContent="Computer chose " + computer_move + "... you win! :)";
        updateRound('win');
    }
}

const moves = document.querySelectorAll('button');

moves.forEach((move) => {
    move.addEventListener('click', function () {playRound(move.id);})
});

