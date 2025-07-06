function creaCliente(nombre, apellido, email) {
    let nuevoCliente = {
        nombre: nombre,
        apellido: apellido,
        email: email
    };

    return nuevoCliente;
}

function muestraCliente(cliente) {
    console.log('Cliente:');
    console.log(`   Nombre: ${cliente.nombre}`);
    console.log(`   Apellido: ${cliente.apellido}`);
    console.log(`   e-mail: ${cliente.email}`);
}

let josep = creaCliente('Josep', 'Mestras', 'josep.mestrasv@gmail.com');

muestraCliente(josep);