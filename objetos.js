// Listas, array o arreglo
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(2, "hola", true, undefined, null);
const lista3 = new Array (3);
lista3[0] = "soy el primer elemento, index 0";
const lista4 = [Lista, Lista2, Lista3];

console.log(Lista);
console.log(Lista2);
console.log(Lista3);
console.log(Lista4);





// Objetos
const movil = {
     altura: 10,
     anchura: 5,
     marca: "Xiaomi",
     isWhite: false,
     contactos: ["Bautista", "Martin", "Raul"],
     tarjeta: {
        marca: "Sandisk"
        almacenamiento: 32

     },
     "altura-tarjeta": 4



     }


     movil.anyo = 2022;
     movil.marca = "Samsung"


     console.log(movil.marca)





}




// Fecha
// Librerias de apoyo Moment.js

    const ahora = new Date();
    console.log(ahora);

    const fecha_milis = new Date(10)  // Utilizando los milisegundos
    console.log(fecha_milis)

    const fecha_cadena = new Date("march 25 2020");
    console.log(fecha_cadena)

    const fecha_valores = new Date(2022, 2, 15)
    console.log(fecha_valores)

    const dia = ahora.getDate()
    const mes = ahora.getMonth() + 1
    const anyo = ahora.getFullYear()

    console.log(dia, mes, anyo)