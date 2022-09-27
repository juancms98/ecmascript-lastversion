//Set para guardar datos dentro de un Objeto
const list = new Set();

list.add('items 1').add('items 2').add('items 3'); // Set(3) { 'items 1', 'items 2', 'items 3' }
list.add('items 1').add('items 2').add('items 3').add('items 3'); // Set(3) { 'items 1', 'items 2', 'items 3' }

// Returna un valor si se cumple la condición y si encuentra el valor a comparar.
if (list.has('items 3')) {
  console.log('true');
} else {
  console.log('false');
}

list.add('items 1').add('items 2').add('items 3').add('items 3').add('items 4');

list.delete('items 2'); // Elimina el valor indicado como argumento

list.size; // Te muestra el número de elementos que componen la instancia de la clase Set();

console.log(list); // Set(3) { 'items 1', 'items 2', 'items 3' } Me muestra un objeto con una lista de 3 elementos. Pero adicional a eso, la clase Set(), nos permite evitar elementos repetidos como es el caso