// Definimos el radio y el valor de pi
const radio = 4;
const PI = 3.14;

// Función flecha para calcular el volumen: V = (4/3) * PI * r^3
const calcularVolumenEsfera = (r) => {

    const volumen = (4 / 3) * PI * (r * r * r);
    return volumen;
};

// Mostramos por consola
const volumenFinal = calcularVolumenEsfera(radio);

console.log(`Calculando el volumen para una esfera de radio: ${radio}m`);
console.log(`El volumen resultante es: ${volumenFinal.toFixed(2)} m3`);