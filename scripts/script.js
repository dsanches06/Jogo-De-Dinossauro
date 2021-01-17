const dino = document.querySelector(".dino");

function handleKeyUP(event) {
  if (event.keyCode === 38) {
      console.log("Pressionou espaço")
  }
}

document.addEventListener("keyup", handleKeyUP);
