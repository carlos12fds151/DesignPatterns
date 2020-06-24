// Ejecutar Archivo en la terminal con el comando: node app.js

class Nacimiento {
  constructor(fecha) {
    this.fecha = fecha;

    if (typeof Nacimiento.instancia === "object") {
      return Nacimiento.instancia;
    }

    Nacimiento.instancia = this;
    return this;
  }
}
// Instancia unica
const instancia1 = new Nacimiento("12/03/1998");
console.log(instancia1);
/* Segunda instancia para prueba de que solo nos 
permite tener una y nos devolvera solo los datos de la primera*/
const instancia2 = new Nacimiento("15/09/1995");
console.log(instancia2);