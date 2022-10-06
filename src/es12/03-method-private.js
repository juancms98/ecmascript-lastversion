// Los métodos privados consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral ( #). Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase.
class User {
  constructor(username, name, age, email) {
    this.username = username,
      this.name = name,
      this.age = age,
      this.email = email
  }

  hello() {
    return 'hola ' + this.name;
  }

  get getUsEmail() {
    return this.email;
  }

  set #setUsEmail(correo) {
    this.email = correo;
  }
}

const juan = new User('juancms98', 'Juan', 23, 'montilla@gmail.com');
console.log(juan.hello());
console.log(juan.getUsEmail); // En este caso, podemos solicitar el método getUsEmail
console.log(juan.setUsEmail = 'juancms98@gmail.com'); //no podemos acceder por su estado de privado