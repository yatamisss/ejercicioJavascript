"use strict"

/*
Hacer las funciones que sean necesarias para:

Obtener el promedio de notas de un alumno considerando que la suma de notas debe ser el retorno de una función
y el promedio el retorno de otra funcion. Las notas son: 6, 8, 9, 2, 5, 10.

*/

//Primero había hecho esto para hacer el calculo del promedio 

function sumaNotas(nota1, nota2, nota3, nota4, nota5, nota6) {
    return nota1 + nota2 + nota3 + nota4 + nota5 + nota6;
}
console.log("La suma de las notas 6, 8, 9, 2, 5, 10 es: " + sumaNotas(6, 8, 9, 2, 5, 10));

function promedio(sumaNotas, cantidadNotas) {
    return sumaNotas / cantidadNotas;
}
console.log("por lo tanto, el promedio de las notas es de: " + promedio(40, 6));


//Luego intente poniendo las notas en un array y de igual forma con ambas se obtiene el resultado 

let notas = [6, 8, 9, 2, 5, 10];

function calcularPromedio(notas) {
    const sumaNotas = notas.reduce((total, nota) => total + nota, 0);
    console.log("La suma de las notas 6, 8, 9, 2, 5, 10 es: ", sumaNotas)

    const promedio = sumaNotas / notas.length;
    console.log("por lo tanto, el promedio de las notas es de: ", promedio.toFixed(2))
}
calcularPromedio(notas);


