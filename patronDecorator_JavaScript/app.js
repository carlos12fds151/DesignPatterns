// Ejecutar Archivo en la terminal con el comando: node app.js

class CarWash {

    constructor(nombre, lavado, precio){
        this.nombre = nombre;
        this.lavado = lavado;
        this.precio = precio;
    }

    getPedido(){
        return `El señor ${this.nombre} quiere un ${this.lavado} y tiene un costo de ${this.precio} `;
    }

    lavadoaMano(nombre){

       this.nombre = nombre;
       this.lavado = "lavado a mano"; 
       this.precio = 200;

    }
    
    lavadoDeLlantas(nombre){

        this.nombre = nombre;
        this.lavado = "lavado de llantas"; 
        this.precio = 400;
 
     }

     lavadoManoLlantas(nombre){
         this.nombre = nombre;
         this.lavado = "lavado a mano y lavado de llantas";
         this.precio = 600;
     }

  
}

const cliente1 = new CarWash();
const cliente2 = new CarWash();
const cliente3 = new CarWash();

cliente1.lavadoDeLlantas("Carlos");
console.log(cliente1.getPedido());
console.log("---------------------------------------------");
cliente2.lavadoaMano("Juan");
console.log(cliente2.getPedido());
console.log("---------------------------------------------");
cliente3.lavadoManoLlantas("Francisco");
console.log(cliente3.getPedido());

