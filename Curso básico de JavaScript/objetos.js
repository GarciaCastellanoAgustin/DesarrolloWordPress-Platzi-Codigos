// como declarar un objeto

let miAuto = {

    marca: "Toyota",
    modelo: "Etios",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`); // this hace referencia 
                                                           //la objeto global EN ESTE CASO
    }

};

miAuto.modelo; // metodos
miAuto.detalleDelAuto(); // metodo con funcion


/* funciones constructoras */

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let autoNuevo = new auto("testla", "Model y", 2021);
autoNuevo

// --------

let autoNuevo2 = new auto("Testla", "Model X", 2022);
let autoNuevo3 = new auto("Toyota", "Etios", 2018);