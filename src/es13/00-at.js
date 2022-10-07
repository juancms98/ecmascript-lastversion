/* Este método de los arreglos nos permite buscar el último valor del arreglo sin saber su posición.
Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array.El índice 0 es la primera posición.*/

const array = ['Juan', 'Carlos', 23, 'Cynthia', 'Reina', 23, 'Vicente', 'Andrés', 26];

console.log(array[array.length - 1]); // Esta forma funciona para conseguir el último de un array

// Pero vino at( como argumento recibe la posición, en negativo comienza de atrás para adelante) para cambiarlo
//La utilidad más importante de este método es para manejar índices negativos. Algo que no se puede con la notación de corchetes.

console.log(array.at(-1));