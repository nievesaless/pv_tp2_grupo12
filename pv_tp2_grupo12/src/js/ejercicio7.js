// Declaramos los nombres
const nombres = ["Jairo", "Camila", "Ignacio", "Mauricio", "Alejandro", "Gustavo"];

// Función para encontrar el nombre más largo
const obtenerNombreMasLargo = (lista) => {
    let masLargo = lista[0]; // Empieza con el primer nombre

    lista.forEach(nombre => {
        // Si el largo del nombre actual es mayor al que teníamos guardado,se lo reemplaza
        if (nombre.length > masLargo.length) {
            masLargo = nombre;
        }
    });

    return masLargo;
};

// Mostramos los resultados por consola usando Template Strings
console.log(`Lista de nombres: ${nombres.join(", ")}`);
console.log(`El nombre más largo del grupo es: ${obtenerNombreMasLargo(nombres)}`);