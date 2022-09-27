const listNumber = [1, 2, 3, 15, 20, 200, 1000, 1024];

console.log(listNumber.includes(20)); // true
console.log(listNumber.includes(10)); // false
console.log(listNumber.includes(200, 5)); // true: También se puede buscar por el índice y su valor

// También se puede aplicar a un arreglo con string

const names = ['Juan', 'Carlos', 'Cynthia', 'Carolina'];

console.log(names.includes('Cynthia')); // true
console.log(names.includes('juan')); // false: aunque exista el nombre no coincide con la letra, ya que se aplica la sensibilidad de mayúsculas y minúsculas

// [0,1,2,3, ...., lenght-1] Para la búsqueda del índice positivo

// [-lenght, ...,  -3, -2, -1] Para la búsqueda del índice negativo