const luffy = document.querySelector('.luffy');
const pipe = document.querySelector('.pipe');


const jump = () => {
    luffy.classList.add('jump');

    setTimeout(() => {

        luffy.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePostion = pipe.offsetLeft;
    const luffyPostition = +window.getComputedStyle(luffy).bottom.replace('px', '');
    console.log(luffyPostition);

    if(pipePostion <= 120 && pipePostion > 0 && luffyPostition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePostion}px`;

        luffy.style.animation = 'none';
        luffy.style.bottom = `${luffyPostition}px`;
        
        luffy.src = 'luffyperde.png';
        luffy.style.width='200px';
        luffy.style.height='200px';

        clearInterval(loop);
    }
}, 10);
let seconds = 0
const time = setInterval(() => {
    seconds++;
    document.getElementById("time").innerHTML = "segundos: " + seconds;
}, 1000);
document.addEventListener('keydown', jump);