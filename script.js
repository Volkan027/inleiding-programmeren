const poppetje = document.querySelector('.poppetje');
const barrel = document.querySelector('.barrel');
const audioJump = document.querySelector('.audiojump');
const gameOver = document.querySelector('.gameover');
const textStart = document.querySelector('#text-start')

document.addEventListener("keydown", function (event) {
    if (event.key === ' ') {
        console.log("spatie gedrukt");
    } else {
        console.log("andere knop ingedrukt");
    }
});

const loop = setInterval(() => {
    const barrelPosition = barrel.offsetLeft;
    const poppetjePosition = +window.getComputedStyle(poppetje).bottom.replace('px', '');

    /* code die botsing maakt */
    if (barrelPosition <= 130 && barrelPosition > 0 && poppetjePosition < 90) {
        barrel.style.animation = 'none';

        poppetje.style.animation = 'none';

        poppetje.src = 'dead.gif';
        poppetje.style.width = '200px';
        poppetje.style.marginLeft = '50px'
        /* Activeert het Game over-geluid*/
        gameOver.currentTime = 0.1;
        gameOver.volume = 0.9;
        gameOver.play();

        document.getElementById("text-start").style.color = "black";
        document.getElementById("text-start").innerHTML = "<strong>GAME OVER</strong>";
        clearInterval(loop);
    }
}, 10);

const spring = () => {
    poppetje.classList.add('jump');
    audioJump.currentTime = 0.1;
    audioJump.volume = 0.5;
    audioJump.play();
    setTimeout(() => {
        poppetje.classList.remove('jump');
    }, 500);
}
document.addEventListener('keydown', spring);
//eventuele errors kan ik toelichten//
//https://github.com/codigoennuvem/mario-jumpfor2dsites/blob/main/js/script.js//