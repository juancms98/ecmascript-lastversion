// Arrays destructuring
const fruit = ['Apple', 'Banana', 'Orange'];
const [a, b, o] = fruit;
console.log(a, b, o); // Apple, Banana, Orange

// Objects destructuring
const user = {
  username: 'Juan',
  age: 23,
}

const {
  username,
  age
} = user;
console.log(username, age); // Juan 23

// SPREAD OPERATION
const newUser = {
  username: 'Juan',
  age: 23
};
const country = 'VE';
// El operador de propagación, se encarga de desempaquetar los datos de unos arreglos y objetos.
const data = {
  id: 1,
  ...newUser,
  country
}
console.log(data); // { username: 'Juan', age: 23, country: 'VE' }

// REST OPERATOR

// El operador de resto: nos comprime los argumentos recibidos de una función
function sumarValores(numero, ...valores) {
  console.log(`Esto son los valores que estoy recibiendo como argumentos ${valores}`);
  console.log(`Esto es la suma de numero: ${numero} + el primer valor de valores: ${valores[0]} = `, numero + valores[0]);
  return numero + valores[0];
}

sumarValores(20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0); // 21