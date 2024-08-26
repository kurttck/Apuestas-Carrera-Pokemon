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

document.querySelectorAll(".selection a").forEach((select) => {
  select.addEventListener("click", function (event) {
    event.preventDefault();
    const scene2 = document.querySelector(".scena2");
    const scene3 = document.querySelector(".scena3");

    scene2.style.opacity = "0";
    scene2.style.visibility = "hidden";

    setTimeout(() => {
      scene3.style.opacity = "1";
      scene3.style.visibility = "visible";
    }, 500);
  });
});

document.getElementById("starRace").addEventListener("click", starRace);

function starRace() {
  pokeElements = [
    document.querySelector(".pikachu"),
    document.querySelector(".nidorino"),
    document.querySelector(".bulbasaur"),
  ];
  const trackWidth = document.querySelector(".track").offsetWidth;
  const pokemons = ["pikachu", "nidorino", "bulbasaur"];
  let position = [0, 0, 0];

  document.getElementById("starRace").disabled = true;

  const raceInterval = setInterval(() => {
    for (let i = 0; i < pokemons.length; i++) {
      const randomMove = Math.floor(Math.random() * 10);
      position[i] += randomMove;
      pokeElements[i].style.marginLeft = position[i] + "px";

      if (position[i] >= trackWidth - pokeElements[i].offsetWidth) {
        clearInterval(raceInterval);
        declareWinner(pokemons[i]);
        break;
      }
    }
  }, 100);
}

function declareWinner(winner) {
  document.getElementById("result").innerText = `el ganador es ${winner}`;
  document.getElementById("starRace").disabled = false;
}
