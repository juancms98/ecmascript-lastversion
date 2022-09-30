// Las propiedades de propagación consisten en expandir las propiedades de un objeto utilizando el spread operator. Sirve para crear nuevos objetos a partir de otros.

// Creamos un objeto
const user = {
  username: 'juancms98',
  age: 23,
  country: 'VE',
};

// Después realizamos la propagación (spread) de los datos
const {
  username,
  ...values
} = user;

// En esta línea imprimimos el valor obtenido en específico.
console.log(username); // juancms98

// En esta línea, mostramos los valores obtenidos mediante el spread operator
console.log(values); // { age: 23, country: 'VE' }