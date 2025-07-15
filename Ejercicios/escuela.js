class Persona {
  constructor(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
  }

  nombreCompleto() {
    return `${this.nombre} ${this.apellido} (${this.email})`;
  }
}

class Alumno extends Persona {
  constructor(nombre, apellido, email) {
    super(nombre, apellido, email);
    this.asignaturasAñadidas = [];
  }

  añadirAsignaturas(asignaturasPorAñadir) {
    for (let asignatura of asignaturasPorAñadir) {
      this.asignaturasAñadidas.push(asignatura);
    }
  }
}

class Profesor extends Persona {
  constructor(nombre, apellido, email, web) {
    super(nombre, apellido, email);
    this.web = web;
  }
}

let alumnos = [
  new Alumno("Josep", "Mestras", "jmestras@gmail.com"),
  new Alumno("Juan", "Pérez", "jperez@gmail.com"),
  new Alumno("Alberto", "Gómez", "agomez@gmail.com"),
];

let profesor = new Profesor(
  "Luis",
  "Crespo",
  "lcrespo@gmail.com",
  "lcrespo.com"
);

for (let alumno of alumnos) {
  alumno.añadirAsignaturas(["Catalan", " Mates"]);
  console.log(`${alumno.nombreCompleto()}:`);
  console.log(`  ${alumno.asignaturasAñadidas}`);
}

console.log(profesor.nombreCompleto());
