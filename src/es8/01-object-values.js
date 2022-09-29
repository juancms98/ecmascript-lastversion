//En este caso, podemos obtener el valor de los objetos como un array
const countries = {
  VE: 'Venezuela',
  CO: 'Colombia',
  BR: 'Brasil',
  CL: 'Chile',
  AR: 'Argentina',
}

console.log(Object.values(countries)); // [ 'Venezuela', 'Colombia', 'Brasil', 'Chile', 'Argentina' ]

//Podemos guardar los valores en una variable y poder utilizar los métodos que contiene un array

const objectInArray = Object.values(countries);

objectInArray.push('Perú');

console.log(objectInArray); // [ 'Venezuela', 'Colombia', 'Brasil', 'Chile', 'Argentina', 'Perú' ]