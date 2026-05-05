import { obtenerMensaje } from "../service/ejercicio24.js";

const radios = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.getElementById("resultado");

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const valor = radio.value;

    // actualizar texto en pantalla
    resultado.textContent = obtenerMensaje(valor);

    // mostrar en consola
    console.log("Lenguaje seleccionado:", valor);
  });
});