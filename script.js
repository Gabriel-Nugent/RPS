function computerPlay()
{
    let computer_moves = ["rock","paper","scissors"];
    return computer_moves[Math.floor(Math.random()*computer_moves.length)];
}

function playRound()
{
    let outcome = "not tie";
    
    do{
        let player_choice = prompt("Enter RPS move choice: ");
        player_choice = player_choice.toLowerCase();

        let computer_choice = computerPlay();
        
        if (computer_choice == player_choice)
        {
            outcome = "tie";
        }
        else if((computer_choice == "paper" && player_choice == "rock") 
        || (computer_choice == "rock" && player_choice == "scissors") 
        || (computer_choice == "scissors" && player_choice == "paper"))
        {
            outcome = "computer wins";
        }
        else{
            outcome = "player wins";
        }

        console.log("computer chose: " + computer_choice + "\nplayer chose: " + player_choice
            + "\nresult was: " + outcome + "\n");
    }
    while(outcome == "tie");

    return outcome;
}

function game()
{
    let player_wins = 0;
    let computer_wins = 0;

    for(let i = 0; i < 5; i++)
    {
        let round_outcome = playRound();
        
        if (round_outcome == "computer wins")
        {
            computer_wins++;
        }
        else
        {
            player_wins++;
        }

        console.log("~CURRENT SCORE~\n\nComputer: " + computer_wins + "\nPlayer: " + player_wins + "\n");
    }

    if(player_wins > computer_wins)
    {
        console.log("PLAYER WINS!");
    }
    else
    {
        console.log("COMPUTER WINS!");
    }
}

game();