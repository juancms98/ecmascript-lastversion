const functionPromise = () => {
  return new Promise((resolve, reject) => {
    (true) ? setTimeout(() => {
      resolve('Async!!');
    }, 3000): reject(new Error('error'));
  });
};

// La función asíncrona se crea mediante la palabra reservada async y retorna una promesa.
const functionAsync = async () => {
  const esperarAQueSeResuelva = await functionPromise();
  console.log(esperarAQueSeResuelva);
  console.log('Mensaje que sigue después que se cumpla la promesa');
}

console.log('Mensaje que aparecerá antes de que se cumpla la promesa');
functionAsync()
console.log('Mensaje que se tendría que cumplir cuando se termine la promesa');