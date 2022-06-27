const mario = document.querySelector(".super-flash");
const pipe = document.querySelector(".flash-reverso");
const game = document.querySelector(".game");

//tentativaplacar 1
/*function criaPlacar(){
  const placar = {
    pontuacao: 0,
    desenha(){
      contexto.font = '30px "VT323"';
      contexto.fillStyle = 'black';
      contexto.fillStyle('placar: ${placar.pontuacao}');
    },
    atualiza(){
    }
  }
  return placar;
}*/

//tentativa de placar #2
/*let scoreValue = 0;
let counter = true;
const loopGame = function (){
  const loopGame = setInterval(()=> {
    const pipePosition = pipeOffsetLeft;
    const characterPosition = +window
    .getComputedStyle(character)
    .bottom.replace("px", "")

    if (pipePosition = pipe.offsetLeft <=-120 && counter ) {
      scoreValue += 10;
      score.textContent = scoreValue;
      counter = false;
    }
    else if ( pipePosition - characterPosition >0) {
      counter = true;
    }
    else {

    }
    
  })
  
}*/

const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 600);
};

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 180 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/flash-game-over.png";
    mario.style.width = "180px";
    mario.style.marginLeft = "100px";
    
     clearInterval(loopGame);
  }
}, 10);

document.addEventListener("keydown",  jump);
document.addEventListener("click", jump);
 