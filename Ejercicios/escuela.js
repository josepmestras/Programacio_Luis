class Alumno {
    constructor(nombre, apellido, email) {
        this.nombre = nombre; // String
        this.apellido = apellido; // String
        this.email = email; // String
        this.asignaturas = []; // Array
    }

    matricular(asignatura) {
        this.asignaturas.push(asignatura);
    }

    nombreCompleto() {
        return `${this.nombre} ${this.apellido} (${this.email})`;
    }
}

class Profesor { // String
    constructor(nombre, apellido, email, web) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.web = web;
    }

    nombreCompleto() {
        return `${this.nombre} ${this.apellido} (${this.email})`;
    }
}

let alumno1 = new Alumno('Josep', 'Mestras', 'jmestras@gmail.com', ['Catalan', 'Castellano', 'Mates']);
let profesor1 = new Profesor('Luis', 'Crespo', 'lcrespo@gmail.com', 'lcrespo.com');

console.log(alumno1.nombreCompleto());
console.log(profesor1.nombreCompleto());