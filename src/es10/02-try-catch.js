// El try catch nos permite manejar los errores que recibimos del sistema de errores de Javascript
function helloWord() {
  console.log('Hey!');
}

//Probamos nuestra lógica o funciones dentro de nuestro try y si funciona sin problema nos mostrará el resultado.
try {
  hello();
} catch (error) {
  console.log(error);
} // En este caso, no se encuentra definida la función hello y por eso pasa directamente al catch para representar el error.


// El parámetro opcional de catch permite omitir el error si es necesario.

try {
  hello();
} catch {
  console.log('Soy el error personalizado del catch');
} // No es muy recomendado personalizar el error, ya que no sabrás cuál es el problema en específico y poder solucionarlo

// *Aunque puedes concatenar un mensaje personalizado con el error del sistema de errores de JS*

try {
  hello()
} catch (error) {
  console.log(`Soy un ejemplo de un catch personalizado, el error es: ${error}`);
}