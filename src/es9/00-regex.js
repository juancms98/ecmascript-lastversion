// Nueva forma de obtener el índice y el valor de unas expreciones regulares.
const regex = /(\d{4})-(\d{2})-(\d{2})/; //Expresión regular para calcular las fechas
const matchers = regex.exec('2022-09-29'); // se utiliza métodos para hacer coincidir la búsqueda.
console.table(matchers);

/* Podemos observar que se separan según su índice y su valor

┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │ '2022-09-29' │
│    1    │    '2022'    │
│    2    │     '09'     │
│    3    │     '29'     │
│  index  │      0       │
│  input  │ '2022-09-29' │
│ groups  │  undefined   │
└─────────┴──────────────┘

*/