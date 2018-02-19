let scores, roundScores, activePlayer;

scores = [0, 0];
roundScores = 0;
activePlayer = 1;



document.querySelector('#current-' + activePlayer).textContent = dice;

let x = document.querySelector('#score-0').textContent;
console.log(x);


document.querySelector('.dice').style.display = 'none';
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + "</em>";


document.querySelector('.btm-roll').addEventListener('click', function () {

  // 1. Random Button
  let dice = Math.floor(Math.random() * 6) + 1;
  // 2. Display Result
  document.querySelector('.dice').style.display = 'block';

  // 3.Update the round score IF the rolled number was not a 1
});
