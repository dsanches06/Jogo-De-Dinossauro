const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let position = 0;
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
  //saltou
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
  let positionCactus = 1000;
  let randomTime = Math.random() * 6000;

  //adicionar uma class ao div
  cactus.classList.add("cactus");
  //posicionar na direita
  cactus.style.left = positionCactus + "px";
  //adicionar um elemento html
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {
    //mover para esquerda
    positionCactus -= 5;
    cactus.style.left = positionCactus + "px";
    //se for menor que -60
    if (positionCactus < -60) {
      //reseta o intervalo
      clearInterval(leftInterval);
      //remove o elemento catcus
      background.removeChild(cactus);
      //se a posição de cactus for maior que zero e menor que 60 e ainda posição do dino for  menor que 60
    } else if (positionCactus > 0 && positionCactus < 60 && position < 60) {
      //limpa o intervalo
      clearInterval(leftInterval);
      //limpa o body e mostra a mensagem
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      //mover para esquerda
      positionCactus -= 5;
      cactus.style.left = positionCactus + "px";
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
