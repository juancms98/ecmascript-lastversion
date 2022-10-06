//En este caso, nos permite mostrar la primera respuesta efectiva de las promesas
const promise1 = new Promise((resolve, reject) => reject('i am a reject'));
const promise2 = new Promise((resolve, reject) => resolve('i am a resolve 1'));
const promise3 = new Promise((resolve, reject) => resolve('i am a resolve 2'));

Promise.any([promise1, promise2, promise3])
  .then(response => console.log(response));