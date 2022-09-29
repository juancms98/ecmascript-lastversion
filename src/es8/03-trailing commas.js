// Trailing commas, nos permite agregar elementos en un array aun así estando vacios y los toma como referencia.
const arrayOfAges = [23, 20, 25, 23, 55, 55];

console.log(arrayOfAges); // [ 23, 20, 25, 23, 55, 55 ]
console.log(arrayOfAges.length); // 6

// Creamos un arreglo con campos vacíos y veremos cuál será el resultado:
const arrayWithEmptyItems = [23, 20, , , , ]

console.log(arrayWithEmptyItems); // [ 23, 20, <3 empty items> ]
console.log(arrayWithEmptyItems.length); // 5, los espacios cuentan como longitud del arreglo

// const arrayWithEmptyItems = [23, 20, , , , 25;

// console.log(arrayWithEmptyItems); // [ 23, 20, <3 empty items>, 25 ]
// console.log(arrayWithEmptyItems.length); 6: también se puede seguir agregando elementos.