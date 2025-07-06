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

function comparaClientes(cliente1, cliente2) {
    if (cliente1.nombre == cliente2.nombre
        && cliente1.apellido == cliente2.apellido
        && cliente1.email == cliente2.email) {
            return true;
    } else {
        return false;
    }
}

let josep = creaCliente('Josep', 'Mestras', 'josep.mestrasv@gmail.com');
let josep1 = creaCliente('Josep', 'Mestras', 'josep.mestrasv@gmail.com');
let jordi = creaCliente('Jordi', 'Mestras', 'jordimestras@gmail.com');

console.log(comparaClientes(josep, jordi));