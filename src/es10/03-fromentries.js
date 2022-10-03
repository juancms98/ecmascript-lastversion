// Como poder pasar un array a objeto. Se considera la operación inversa de Object.entries().
const entries = new Map([
  ["username", "juancms98"],
  ["name", "Juan"],
  ["age", 23],
]);

console.log(entries);
console.log(Object.fromEntries(entries));

// Recuerda que con Object.entries nos permite pasar objetos a Arrays
const entriesObject = {
  "username": "juancms98",
  "name": "Juan",
  "age": 23,
};