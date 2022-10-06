// El operador nullish coalescing (??) consiste en evaluar una variable si es undefined o null para asignarle un valor.
const getValueOfTheDB = null; //'Soy un valor obtenido de la Base de Datos.'

// creamos una variable que valide y asigne los valores con el operador Nullish Coalescing (??).
const nullValidate = getValueOfTheDB ?? 'Soy un valor que se asigna si viene nulo.';

// *También sirve con funciones u otro valor que quieras asignar si el valor principal viene nulo.
const nullValidate2 = getValueOfTheDB ?? hello();
console.log(nullValidate);
console.log(nullValidate2);

function hello() {
  return 'Hello!'
}