//6. Crear un array denominado edades con al menos 8 edades distintas. 
//Recorrer el array, mostrar las edades y mostrar el promedio de las edades. 
const edades = [15, 18, 20, 22, 25, 30, 28, 35];

let suma = 0;

for (let i = 0; i < edades.length; i++) {
  console.log(edades[i]);
  suma += edades[i];
}

const promedio = suma / edades.length;
console.log("El promedio es:", promedio);