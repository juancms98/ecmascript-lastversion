// El separador de números, vino a EcmaScript 12 (2021) para visualizar mejor los números de alto tamaño. Los separadores numéricos ayudan a la legibilidad de cantidades con varias cifras. Se utiliza el caracter guion bajo ( _ ) para separar las cifras, y no afecta a la ejecución del programa.

const numbers = 100000000000000; //en este caso, se ve una cifra muy grande y difícil de leer.

//const numbersSeparator = 100_000_000_000_000; Por problemas en mi editor, me separa los valores.

console.log(numbers)
console.log(numbersSeparator);

console.log(numbers === numbersSeparator); // true