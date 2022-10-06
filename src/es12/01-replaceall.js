// Este método me permite reemplazar todos los valores que coincidan en la búsqueda.
const string = 'Hola a todos, yo soy Juan Carlos. Mi lenguaje favorito de programación es JavaScript. Con Javascript puedes hacer cosas increíbles desde el navegador como en el servidor, JavaScript llegó para quedarse.';
console.log(string);
/*
Hola a todos, yo soy Juan Carlos.Mi lenguaje favorito de programación es JavaScript.Con Javascript puedes hacer cosas increíbles desde el navegador como en el servidor, JavaScript llegó para quedarse.
*/

const replaceString = string.replaceAll('JavaScript', 'TypeScript');
console.log(replaceString);
/*
Hola a todos, yo soy Juan Carlos.Mi lenguaje favorito de programación es TypeScript.Con Javascript puedes hacer cosas increíbles desde el navegador como en el servidor, TypeScript llegó para quedarse.
*/