function cortaArray(arrayCompleto) {
    let arrayCortado = [];

    for(let i = 2; i < arrayCompleto.length; i++){
        arrayCortado[arrayCortado.length] = arrayCompleto[i];
    }

    return arrayCortado;
}


function ordenaArray(arrayCortado) {
    let finalResult = [];

    for (let i = 0; i < arrayCortado.length; i++) {
        finalResult[finalResult.length] = arrayCortado[arrayMinPos(arrayCortado)];
        arrayCortado[arrayMinPos(arrayCortado)] = null;
    }

    return finalResult;
}


function arrayMinPos(arrayCortado) {
    let valorActual = 'zz';

    for(let i = 0; i <= arrayCortado.length; i++) {
        if (arrayCortado[i] != null && arrayCortado[i] < valorActual) {
            valorActual = i;
        }
    }

    return valorActual;
}

console.log(ordenaArray(cortaArray(process.argv)));