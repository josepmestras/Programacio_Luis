function creaCliente(nombre, apellido, email) {
    let nuevoCliente = {
        nombre: nombre,
        apellido: apellido,
        email: email
    };

    return nuevoCliente;
}

let josep = creaCliente('Josep', 'Mestras', 'josep.mestrasv@gmail.com');

console.log(josep);