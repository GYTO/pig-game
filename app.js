let questionButtons = document.getElementsByClassName('btn-flip'),
    rules = document.getElementsByClassName('game-rules-wrapper')[0];

let height = 0,
    width = 0,
    radius = 0;

function setSize() {

    height = window.innerHeight;

    if (innerWidth > 1200) {
        width = 1200;
    } else {
        width = window.innerWidth;
    }

    rules.style.width = width - 40 + "px";
    rules.style.height = height - 40 + "px";
}
window.addEventListener('resize', function () {
    setSize()
});

for (let i = 0; i < questionButtons.length; i++) {
    questionButtons[i].addEventListener('click', function () {
        rules.classList.toggle('active');
        setSize();
    });
}
