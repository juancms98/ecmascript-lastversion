// De la misma manera, for await es un ciclo repetitivo que se maneja asíncronamente. El ciclo siempre debe estar dentro de una función con async.

async function forAwaitOfNames(array) {
  for await (let value of array) {
    console.log(value);
  }
}

forAwaitOfNames(['Juan', 'Cynthia', 'Maria', 'Vicente']);
console.log('Validando que no sea bloqueante');