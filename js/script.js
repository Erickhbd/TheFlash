const mario = document.querySelector(".super-flash");
const pipe = document.querySelector(".flash-reverso");

const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
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

    mario.src = "./images/flash-game-over.png";
    mario.style.width = "180px";
    mario.style.marginLeft = "-100/*px";
    
    

    clearInterval(loopGame);
  }
}, 10);

document.addEventListener("keydown",  jump);
document.addEventListener("click", jump);
 