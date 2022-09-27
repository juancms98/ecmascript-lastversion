/* Los generadores son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores.
Estos se utilizan para guardar la totalidad de datos infinitos, a través de una función matemática a valores futuros. De esta manera ocupan poca memoria, con respecto a si creamos un array u objeto.
*/

function* iterator(array) {
  for (let value of array) {
    yield value; // yield detiene la ejecución del código y lo almacena hasta que se vuelva a usar.
  }
}


// El iterador nos permite evitar que se reinicie la iteración y el procede a mostrar los valores hasta donde se haya quedado, algo así como el async / await

const referenciaNombresIterables = iterator(['Juan', 'Cynthia', 'Maria', 'Vicente', 'Andres']);
console.log(referenciaNombresIterables.next().value); // inicio del valor: Juan
console.log(referenciaNombresIterables.next().value); // Siguiente valor: Cynthia
console.log(referenciaNombresIterables.next().value); // Siguiente valor: Maria
console.log(referenciaNombresIterables.next().value); // Siguiente valor: Vicente
console.log(referenciaNombresIterables.next().value); // Último valor: Andres
console.log(referenciaNombresIterables.next().value); // Valor indefinido