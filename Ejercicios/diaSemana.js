let diasSemana = [null, 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
let dia = process.argv[2];
if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7) {
    console.log(diasSemana[dia])
}
else if (isNaN(dia)) {
    console.log('Error: no has proporcionado un numero.')
} else {
    console.log('No hay tantos dias en una semana.')
}