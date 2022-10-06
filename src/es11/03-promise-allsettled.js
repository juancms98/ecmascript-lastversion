//En alguna situación necesitarás manejar varias promesas y obtener sus resultados. ¿Cómo? Utilizando los métodos Promise.all y Promise.allSettled.
const promise1 = new Promise((resolve, reject) => reject('i am a reject'));
const promise2 = new Promise((resolve, reject) => resolve('i am a resolve'));
const promise3 = new Promise((resolve, reject) => resolve('i am a resolve'));

// El método Promise.all sirve para manejar varias promesas al mismo tiempo.Recibe como argumento un array de promesas.

Promise.all([promesa1, promesa2, promesa3])
  .then(respuesta => console.log(respuesta))
  .catch(error => console.log(error))

// El problema es que Promise.all() se resolverá, si y solo si todas las promesas fueron resueltas.Si al menos una promesa es rechazada, Promise.all será rechazada.

/*
 *Si queremos saber el estatus de cada promesa, podemos utilizar el método .allSetled
 * Promise.allSettled() permite manejar varias promesas, que devolverá un array de objetos con el estado y el valor de cada promesa, haya sido resuelta o rechazada.
 */
const promiseStatus = Promise.allSettled([promise1, promise2, promise3])
  .then(response => console.log(response));
/* Este es el arreglo que me muestra
  [{
      status: 'rejected',
      reason: 'i am a reject'
    },
    {
      status: 'fulfilled',
      value: 'i am a resolve'
    },
    {
      status: 'fulfilled',
      value: 'i am a resolve'
    }
  ]
*/