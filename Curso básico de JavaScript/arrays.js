let frutas = ["manzanas", "peras", "bananas"];

let masFrutas = frutas.push("Uvas"); // para agregar cosas a un array

let sacarUltimo = frutas.pop("Uvas"); // para sacar el ultimo elemento

let nuevaLongitud = frutas.unshift("Uvas"); // agrega algo pero adelante de todo

let borrarFruta = frutas.shift("Uvas"); // elimina el primero del array

let posicion = frutas.indexOf("Cereza"); // trae la posicion (index) de un elemento




//-------------------------------------------------------------------------------




/*  recorrido de arrays con filter */

let articulos = [

    {nombre: "bici", costo: 300},
    {nombre: "tele", costo: 2500},
    {nombre: "Libro", costo: 230},
    {nombre: "Celular", costo: 10000},
    {nombre: "Teclado", costo: 500}

];

let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

articulosFiltrados; // forma de flitrar objetos dentro de arrays con FILTER


/* recorrido de arrays con map  */

let nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

nombreArticulos;  // el map trae TODOS los campos seleccionados.
// mapea todo el contenido y trae lo que se busca




/*    metodos para recorrer y encontrar con find   */


let encontrarArticulos = articulos.find(function(articulo){
    return articulo.nombre === "tele";  //el find buysca exactamente el array que buscaba
});

encontrarArticulos;






/*   forEach   */

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});  // con el forEach se trae exacatmente 
//  lo que uno quiere filtrar.




/* some   */

let articulosEconomicos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

articulosEconomicos; // el some trae un boolean aformando o negando la peticion


