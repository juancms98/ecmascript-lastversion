// Cuando los números son muy altos, se necesita agregar la n.
const aBigNumber = 75214568795123112548912n
console.log(aBigNumber)

// Esta es la nueva forma que trae ES11 para representar los números muy altos.
const anotherBigNumber = BigInt(75214568795123112548912);
console.log(anotherBigNumber);