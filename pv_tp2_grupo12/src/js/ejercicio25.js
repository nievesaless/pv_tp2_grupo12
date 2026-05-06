import { cambiarColorFondo } from "../service/servicesEjercicio25.js";

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById('btnColor');

    boton.addEventListener('click', () => {
        alert("FUNCIONA");
        cambiarColorFondo();
        console.log('Color de fondo cambiado');
    });
});