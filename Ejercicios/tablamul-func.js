let num = process.argv[2];

if(isNaN(num)) {
    console.log('Error: no has proporcionado un numero')
} else {
    muestraTabla(num)
}

function muestraTabla(numero) {
    for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero*i}`);
    }
}