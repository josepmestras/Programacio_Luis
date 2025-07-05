function arrayMinPos(arrayCortado) {
    let minPos;
    let min = 'zz';

    for (let i = 0; i < arrayCortado.length; i++) {
        if (min != null && arrayCortado[i] != null) {
            if (arrayCortado[i] < min) {
                min = arrayCortado[i];
                minPos = i;
            }
        }
    }

    return minPos;
}

function cortaArray(arrayCompleto) {
    let arrayCortado = [];

    for(let i = 2; i < arrayCompleto.length; i++){
        arrayCortado[arrayCortado.length] = arrayCompleto[i];
    }

    return arrayCortado;
}

function ordenaArray(arrayCortado) {
    let result = [];

    for (let i = 0; i < arrayCortado.length; i++) {
        let minPos = arrayMinPos(arrayCortado);

        result[result.length] = arrayCortado[minPos];
        arrayCortado[minPos] = null;
    }

    return result;
}

console.log(ordenaArray(cortaArray(process.argv)));