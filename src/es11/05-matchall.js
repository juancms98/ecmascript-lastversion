// En este caso, nos permite traernos el índice y si coincide la palabra a buscar mediante expresiones regulares.

const regex = /\b(ipsum)+\b/g;

const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, velit. ipsum.';

/* Creamos un ciclo for para iterar y revisar si hace match con el texto.
 Creamos una variable que va a recibir la coincidencia que haya encontrado en la expresión regular y el texto pero el texto le asignamos el método .matchAll(y le pasamos como argumento la expresión regular).
 */
for (const match of text.matchAll(regex)) {
  console.log(match);
}