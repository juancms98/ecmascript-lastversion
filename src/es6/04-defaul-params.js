// Anteriormente sin es6 para agregar valores por defecto.
function user(name, age, country) {
  var name = name || 'Juan';
  var age = age || 23;
  var country = country || 'VE';
  console.log(name, age, country);
}

// En este caso, me muestra los valores que nos trae por defecto en tal caso de no recibir argumentos.
user();
// Recibiendo argumentos.
user('Carlos', 24, 'CO');

// Nueva modalidad a la hora de utilizar es6 valores por defecto en una función más amigables.
function newAdmin(name = 'Cynthia', age = 23, country = 'VE') {
  console.log(name, age, country);
}

newAdmin(); // Cynthia 23 VE
newAdmin('María', 54, 'CO'); // María 54 CO