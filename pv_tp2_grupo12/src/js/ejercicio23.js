// 1. Obtener referencias a los elementos del DOM [cite: 25]
const inputField = document.getElementById('userInput');
const displayBox = document.getElementById('displayArea');
const displayText = document.getElementById('displayText');

// 2. Definir la función que manejará la lógica (Función Flecha) [cite: 46, 128]
const manejarEscritura = () => {
    const valor = inputField.value; // Obtener el valor actual del input [cite: 29]

    // Actualizar el texto en pantalla en tiempo real [cite: 33]
    displayText.innerText = valor || "Esperando texto...";

    // 3. Evaluar la condición de longitud de caracteres [cite: 135, 220]
    if (valor.length > 20) {
        // Manipulación programática de estilos mediante clases 
        displayBox.classList.add('warning-bg');
    } else {
        displayBox.classList.remove('warning-bg');
    }
};

// 4. Asociar el evento 'input' al campo de texto [cite: 37, 39]
// El evento 'input' se dispara cada vez que el contenido cambia.
inputField.addEventListener('input', manejarEscritura);