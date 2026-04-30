// Ejercicio 5:Horas y ,imutos a segundos
const horas = 2;
const minutos = 30;

const convertirASegundos = (h, m) => (h * 3600) + (m * 60);

const total = convertirASegundos(horas, minutos);

console.log(`Horas: ${horas}, Minutos: ${minutos}`);
console.log(`Resultado en segundos: ${total}`);