import { obtenerNuevoTexto } from './funciones19.js';
document.addEventListener('DOMContentLoaded', () => {
    
    const parrafo = document.querySelector('#miParrafo');
    const boton = document.querySelector('#btnCambiar');

    boton.addEventListener('click', () => {
    
        parrafo.textContent = obtenerNuevoTexto();
        
    });
});