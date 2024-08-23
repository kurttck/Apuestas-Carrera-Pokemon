document.querySelector(".btnstart").addEventListener("click", (event) => {
  event.preventDefault();
  const scene1 = document.querySelector(".scena1");
  const scene2 = document.querySelector(".scena2");

  // Difumina la primera escena
  scene1.style.opacity = "0";
  scene1.style.visibility = "hidden";

  // Espera a que la primera escena se difumine antes de mostrar la segunda escena
  setTimeout(() => {
    scene2.style.opacity = "1";
    scene2.style.visibility = "visible";
  }, 500);
});
