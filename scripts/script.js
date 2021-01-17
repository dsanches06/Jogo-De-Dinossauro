const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let isJumping = false;

/**
 *  Função que captura o evento do teclado ao ser pressionado
 */
function handleKeyUP(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

/**
 *  Função jump que pernite o dinossauro saltar
 */
function jump() {
  //em baixo
  let position = 0;
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      //resetar intervalo
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if (position <= 0) {
          //resetar intervalo
          clearInterval(downInterval);
          isJumping = false;
        } else {
          //Descendo
          position -= 20;
          dino.style.bottom = position + "px";
        }
      }, 20);
    } else {
      //subindo
      position += 20;
      dino.style.bottom = position + "px";
    }
  }, 20);
}

/**
 * Função que cria o cactus
 */
function createCactus() {
  const cactus = document.createElement("div");
  //na direita
  let position = 1000;
  let randomTime = Math.random() * 6000;

  //adicionar uma class ao div
  cactus.classList.add("cactus");
  //posicionar na direita
  cactus.style.left = position + "px";
  //adicionar um elemento html
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {
    //mover para esquerda
    position -= 5;
    cactus.style.left = position + "px";
    //se for menor que -60
    if (position < -60) {
      //reseta o intervalo
      clearInterval(leftInterval);
      //remove o elemento catcus
      background.removeChild(cactus);
    } else {
      //mover para esquerda
      position -= 5;
      cactus.style.left = position + "px";
    }
  }, 20);

  //serve para executar uma função de um certo tempo
  setTimeout(createCactus, randomTime);
}

/**
 * Funções
 */
createCactus();
document.addEventListener("keyup", handleKeyUP);
