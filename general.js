if (true) {
    console.log("hola");
}

var numero = 1;
var resultado = numero === 1 ? "Soy el numero 1" : "No soy el numero 1";

//-----------------------------------------------------------------------

var articulos = [
    { nommbre: "Bici", costo: 3000 },
    { nommbre: "TV", costo: 4000 },
    { nommbre: "Carro", costo: 2500 },
    { nommbre: "Moto", costo: 5600 },
    { nommbre: "Casco", costo: 2000 },
    { nommbre: "Computador", costo: 2100 },
    { nommbre: "Buseta", costo: 8700 },
    { nommbre: "Cuaderno", costo: 6500 },
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 2500
}); // Retorna todos los elementos con un costo menor a 2500 y los pone en un nuevo array

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
}); //Trae en un nuevo array con solo los nombres de los articulos

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Carro"
}); // Retorna los elementos que tienen como nombre "Carro"

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
}); //Imprime todos los nombres de los articulos

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo < 2000;
}); //Retorna un Booleano diciendo si hay al menos un elemento cumple con la condición