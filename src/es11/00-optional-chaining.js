// El optional Chaining, nos permite hacer consultas en objetos evitando que se rompa nuestra aplicación o no nos muestre ningún error y nos muestre la aplicación en blanco.
// Cuando intentas acceder a propiedades de un objeto que no existen, JavaScript te retornará undefined.
const users = {
  juancms98: {
    name: "Juan",
    country: 'VE'
  },
  ccreicas: {
    name: "Cynthia",
    country: "VE"
  }
}

console.log(users.juancms98.name); // Juan, nos muestra el valor obtenido.

// ¿Pero qué pasa si el objeto que queremos consultar no existe el valor u objecto?
console.log(users.ccreicas.age); // undefined, claramente este valor no existe o no lo encuentra.

//- Para eso tenemos que acompañar a lo que vamos a consultar con un signo de interrogación (?), indicando si el valor existe o no.

console.log(users?.juancms98?.age);

/**Tampoco es recomendado abusar del encadenamiento opcional
  Por ejemplo, en un objeto usuario que siempre existe, pero la propiedad contact es opcional, entonces se debería escribir usuario.contact?.cellphone y no usuario?.contact?.cellphone.

  * Si abusas del encadenamiento opcional y existe un error en un objeto, el programa podría“ ocultarlo” por un undefined, provocando que el debugging sea más complicado.
  */