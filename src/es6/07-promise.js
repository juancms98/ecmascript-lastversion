// Las promesas sirven para esperar un resultado de forma asíncrona sin saber cuándo pasará pero que nuestra aplicación funcione sin detenerse a esperar un resultado.

const showPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Yes!!');
    } else {
      reject('Ugs!!!')
    }
  });
};

showPromise()
  .then(response => console.info(response))
  .catch(err => console.error(err));