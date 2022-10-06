// En este archivo, vendría toda la lógica para poder importar los módulos
const button = document.getElementById('btnDynamicImport'); //obtenemos el elemento por id

// Creamos una función asíncrona para obtener el módulo dinámico
const importModuleJS = async () => {
  const module = await import('./module.js');
  console.log(module);
  module.hello();
}

// y realizamos el evento. (Lo realizo de último porque no puedo invocar una funcion declarada por tema de hoisting)
button.addEventListener('click', importModuleJS);