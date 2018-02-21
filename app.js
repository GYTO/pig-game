const questionButtons = document.getElementsByClassName('btn-flip');

for (let i = 0; i < questionButtons.length; i++){
  questionButtons[i].addEventListener('click', function () {
    document.querySelector('.card_wrapper').classList.toggle('flipped');
  })
}
