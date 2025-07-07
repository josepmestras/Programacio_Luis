function arraymax(items) {
  let numActual = 0;

  for (let i = 0; i <= items.length; i++) {
    if (items[i] > numActual) {
      numActual = items[i];
    }
  }

  return numActual;
}

function pruebaArrayMax(items, esperado) {
  let obtenido = arraymax(items);

  if (obtenido != esperado) {
    console.error(`Valor esperado: ${esperado}, valor obtenido: ${obtenido}`);
  } else {
    console.log(obtenido);
  }
}

pruebaArrayMax([7, 2, 9, 4, 1], 9);
