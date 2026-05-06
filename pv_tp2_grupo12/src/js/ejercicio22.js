import { servicioPunto22 } from "../service/serviceCamilaMansilla.js";

const inputTexto = document.querySelector('#inputTexto');
const resultado = document.querySelector('#resultado');
inputTexto.addEventListener('input', () => {
    const textoVal= inputTexto.value;
    resultado.textContent=servicioPunto22(textoVal);
    console.log("Texto actual:", textoVal)
});