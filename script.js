const circulo = document.querySelector(".circulo");
const boton = document.querySelector("button");
const hexaColores = "0123456789ABCDEF";

function generarColorAleatorio() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      const indiceRandom = Math.floor(Math.random() * hexaColores.length);
      color += hexaColores[indiceRandom];
    }
    return color;
  }
  
  boton.addEventListener("click", () => {
    circulo.style.backgroundColor = generarColorAleatorio();
  });