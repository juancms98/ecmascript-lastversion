// Para obtener una finalización de una promesa, podemos utilizar el método finally.

const promiseWithFinally = () => {
  return new Promise((resolve, reject) => {
    (true) ?
    resolve('Yeah!!, i am a resolve'): reject('Upss!!');
  });
};

/* Forma de ejecutar las promesas con más líneas de códigos

promiseWithFinally()
  .then((response) => {
    console.log(response)
  })
  .catch((error)=>{
    console.log(error);
  })
  .finally(()=>{
    console.log('mensaje de finalización');
  }); */

// Forma resumida
promiseWithFinally()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('finally'));