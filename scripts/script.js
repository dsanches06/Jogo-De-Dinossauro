const dino = document.querySelector(".dino");

function handleKeyUP(event) {
  if (event.keyCode === 32) {
    jump();
  }
}

function jump() {
  let position = 0;
  let upInterval = setInterval(() => {
    if (position >= 150) {
      //resetar intervalo
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if (position <= 0) {
          //resetar intervalo
          clearInterval(downInterval);
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

document.addEventListener("keyup", handleKeyUP);
