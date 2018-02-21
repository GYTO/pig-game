let scores, roundScores, activePlayer, gamePlaying;

let scoreZero = document.getElementById('score-0'),
    scoreOne = document.getElementById('score-1');

let currentZero = document.getElementById('current-0'),
    currentOne = document.getElementById('current-1');

let dice = document.querySelector('.dice');

let playerZeroPanel = document.querySelector('.player-0-panel'),
    playerOnePanel = document.querySelector('.player-1-panel');

init();

document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {
        // 1. Random Button
        let dice = Math.floor(Math.random() * 6) + 1;
        // 2. Display Result
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'images/dice-' + dice + '.png';

        // 3.Update the round score IF the rolled number was not a 1
        if (dice !== 1) {
            // add score
            roundScores += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;
        } else {
            // next player
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {
        //add current score to global score
        scores[activePlayer] += roundScores;
        //update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //check if player won the game

        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            dice.style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

            document.getElementById('canvas').style.display = 'block';
            firework();

        } else {
            // next player
            nextPlayer();
        }
    }

});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScores = 0;

    currentZero.textContent = '0';
    currentOne.textContent = '0';
    playerZeroPanel.classList.toggle('active');
    playerOnePanel.classList.toggle('active');

    dice.style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScores = 0;

    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    scoreZero.textContent = '0';
    scoreOne.textContent = '0';
    currentZero.textContent = '0';
    currentOne.textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    playerZeroPanel.classList.remove('winner');
    playerOnePanel.classList.remove('winner');
    playerZeroPanel.classList.remove('active');
    playerOnePanel.classList.remove('active');

    playerZeroPanel.classList.add('active');

}
