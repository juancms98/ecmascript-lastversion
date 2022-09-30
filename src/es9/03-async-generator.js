// Podemos tener generadores de forma asíncrona
async function* asyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const readyFunction = asyncGenerator()
readyFunction.next().then(response => console.log(response.value));
readyFunction.next().then(response => console.log(response.value));
readyFunction.next().then(response => console.log(response.value));
// Se ejecuta primero, ya que en el momento en que se carga la función en memoria, inmediatamente avanza la lectura del código y sigue su curso hasta que se cumpla la promesa.
console.log('Validando que no sea bloqueante');