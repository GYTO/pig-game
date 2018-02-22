const questionButtons = document.getElementsByClassName('btn-flip');

let height = 0,
    width = 0,
    radius = 0;

setSize();


function setSize() {
    width = window.innerWidth;
    height = window.innerHeight;
    radius = Math.sqrt(width * width + height * height);
}

window.addEventListener('resize', function () {setSize()});

for (let i = 0; i < questionButtons.length; i++){
  questionButtons[i].addEventListener('click', function (element) {

    let circle = textContent('<div unselectable="on" id="circle"></div>')
    // reference https://codemyui.com/material-design-button-colour-background-colour/
  })
}


