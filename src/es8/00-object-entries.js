// Creación de las keys y values de los objectos con el método entries para los objetos

const countries = {
  VE: 'Venezuela',
  CO: 'Colombia',
  BR: 'Brasil',
  CL: 'Chile',
  AR: 'Argentina',
}

console.log(Object.entries(countries));
/*
Este método nos permite hacer que un objeto sea iterable como un array y poder manipular los datos como el mismo con sus métodos, esto nos facilita a la hora de recibir objetos y necesitamos hacerles cambios
[
  ['VE', 'Venezuela'],
  ['CO', 'Colombia'],
  ['BR', 'Brasil'],
  ['CL', 'Chile'],
  ['AR', 'Argentina']
]

*/