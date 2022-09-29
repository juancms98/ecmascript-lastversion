//Relleno de string, nos permite agregar al principio (derecha a izquierda) contenido o al final (izquierda a derecha) contenido.

//Si la longitud a rellenar es menor que la longitud del string actual, entonces no agregará nada.

//Creamos las variables que contenga un string
const cadenaDeTexto = '"Hello"';

//Tenemos que tener en cuenta la longitud del string, ya que después o antes de su longitud va a funcionar el string padding
console.log(cadenaDeTexto.padStart(32, 'Comienzo desde el inicio '));

// Se toma en cuenta la cantidad de letras y espacio que vas a agregar y desde ahí vas a contar.

console.log(cadenaDeTexto.padEnd(30, ', comienzo desde el fin'))