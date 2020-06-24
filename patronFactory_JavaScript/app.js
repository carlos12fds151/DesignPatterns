class Chef {
    preparar() {
        console.log('La comida esta lista');
    }
}

class PicaPollo extends Chef {
    constructor(){
    console.log('Nuevo pica pollo preparado');
    super();
    this.preparar();
    }
}

class Chofan extends Chef{
    constructor() {
        console.log('Nuevo Chofan preparado');
        super();
        this.preparar();
    }
}

class Despacho{
    constructor (pedido) {
        switch(pedido) {
            case "picapollo":
                return new PicaPollo();

            case "chofan":
                return new Chofan();
                
            default: 
                return null;
        }
    }
}

const cliente1 = new Despacho("picapollo");
console.log("--------------------------------------");
const cliente2 = new Despacho("chofan");