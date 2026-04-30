const calcularMayor = (numero1, numero2) => {
  if (numero1 > numero2) {
    console.log(`${numero1} es mayor que ${numero2}`);
  } else if (numero1 < numero2) {
    console.log(`${numero2} es mayor que ${numero1}`);
  } else {
    console.log(`${numero1} y ${numero2} son iguales`);

  }
}

calcularMayor(5, 5);