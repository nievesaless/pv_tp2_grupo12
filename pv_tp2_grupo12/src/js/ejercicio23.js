// Obtenemos los elementos del DOM usando sus IDs
const inputElement = document.getElementById('userInput');
const parrafoElement = document.getElementById('textoMostrado');

// Escuchamos el evento 'input' en tiempo real
inputElement.addEventListener('input', () => {
    
    // Leemos el texto escrito
    let texto = inputElement.value;
    
    // Mostramos el texto en el párrafo
    parrafoElement.innerText = texto;

    // Evaluamos la longitud
    if (texto.length > 20) {
        parrafoElement.classList.add('alerta-fondo');
    } else {
        parrafoElement.classList.remove('alerta-fondo');
    }
});