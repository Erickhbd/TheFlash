let musica=document.getElementById("musica");
let pulo=document.getElementById("pulo");
let morte=document.getElementById("morte");
let fim=document.getElementById("somGameover");

const mario = document.querySelector(".super-flash");
const pipe = document.querySelector(".flash-reverso");

const gameOver = document.getElementById('over');
const btn = document.querySelector('#button')

const score = document.querySelector('.score');
var count = 0;
const time = setInterval(() => {
  count++;

  document.getElementById('count').innerHTML = count;
}, 1);

musica.play();



function jump() {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 600);
}

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./imagens/flash-game-over.png";
    mario.style.width = "140px";
    mario.style.marginRight = "0/*px";
    morte.play();
    musica.pause();


    const loop2 = setInterval(() => {
      document.getElementById('countEnd').innerHTML = count;
  })

    gameOver.classList.add('over')
    gameOver.classList.remove('hidden')

    clearInterval(time);
    clearInterval(loopGame);

    btn.classList.add('over')
    btn.classList.remove('hidden')

    
    btn.addEventListener('click', function() {

      location.reload()
    })
  }
}, 10);

document.addEventListener("keydown",  jump);
document.addEventListener("click", jump);
 