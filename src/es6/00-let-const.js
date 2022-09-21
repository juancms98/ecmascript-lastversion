var lastName = 'David'; //initialization
lastName = 'Montilla'; //re-initialization
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat'
console.log(animal);

const fruits = () => {
  if (true) {
    var fruit1 = 'Apple'; // function scope
    let fruit2 = 'Orange'; // block scope
    const fruit3 = 'Pea'; // block scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

fruits();