//El método flat devuelve un array donde los sub-arrays han sido propagados hasta una profundidad especificada.
//Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.
const arrayFlat = [1, 1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11, 12, 13]]];
console.log(arrayFlat.flat(1)); // Aplana al nivel uno: [ 1, 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11, 12, 13 ] ]
console.log(arrayFlat.flat(2));
/* aplana al nivel dos:
[ 1, 1, 2, 3, 4, 5,
6, 7, 8, 9, 10, 11,
12, 13 ]*/
// Y así continua sucesivamente... Y si desea mejor, utilizar como argumento (infinity);

// Flatmap, nos permite aplanar una matriz de números y además nos permite realizar cualquier lógica de los valores obtenidos.
const arrayFlatMap = [1, 2, 3, 4, 5];
// Después de obtener el valor, podemos realizar la lógica qué queremos hacer, en este caso, multiplicar el valor por dos.
//Recordad que siempre va a ser utilizados para los array.
console.log(arrayFlatMap.flatMap(getValue => [getValue, getValue * 2]));

// En este caso podemos utilizar el método flat y después flatmap
const arrayFlatMap2 = [1, 1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11, 12, 13]]];
const array = arrayFlatMap2.flat(2);
console.log(array.flatMap(getValue => [getValue, getValue * 2]));