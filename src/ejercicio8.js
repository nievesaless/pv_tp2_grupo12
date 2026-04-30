const notas = [8, 6, 2, 1, 7, 3, 6, 5, 10, 9]
const verNotas = () => {

  // primera forma
  // notas.forEach((nota) => {
  //   console.log(nota);
  // })

  for (i = 0; i < notas.length; i++) {
    console.log(notas[i]);
  }
  return notas
}

// verNotas();

const notasAprobadas = () => {
  notas.forEach((nota) => {
    if (nota >= 6) {
      console.log(`Las Notas aprobadas son ${nota}`);
    }
  })
}
// notasAprobadas()

const notasDesaprobadas = () => {
  for (i = 0; i < notas.length; i++) {
    if (notas[i] < 6) {
      console.log(`Notas desaprobadas ${notas[i]}`);
    }
  }
}
// notasDesaprobadas();

const promedioGeneral = () => {
  suma = 0
  for (i = 0; i < notas.length; i++) {
    suma = suma + notas[i]
  }
  promedio = suma / notas.length
  console.log(`El promedio es ${promedio}`);
}
// promedioGeneral();

const cantidadNotasAprobadas = () => {
  let contador = 0;
  notas.forEach((nota) => {
    if (nota >= 6) {
      contador += 1
    }
  })
  console.log(contador);

}
// cantidadNotasAprobadas();