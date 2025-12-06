document.addEventListener("DOMContentLoaded", () => {
  const cantidadFlores = 20; // Número de flores en pantalla

  for (let i = 0; i < cantidadFlores; i++) {
    crearFlor();
  }
});

function crearFlor() {
  const flor = document.createElement("div");
  flor.classList.add("flor-blanca");

  // Posición aleatoria en pantalla
  flor.style.left = Math.random() * 100 + "vw";
  flor.style.top = Math.random() * 100 + "vh";

  // Tamaño mediano aleatorio
  let size = 30 + Math.random() * 20;
  flor.style.width = size + "px";
  flor.style.height = size + "px";

  document.body.appendChild(flor);

  // Cambio de opacidad aleatorio para que aparezcan y desaparezcan
  setInterval(() => {
    flor.style.opacity = Math.random();
  }, 2000 + Math.random() * 2000);
}
