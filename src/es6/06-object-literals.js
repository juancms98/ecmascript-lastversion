// OBJECT LITERALS

// EcmaScript5
function newUser(username, age, country, uId) {
  return {
    username: username,
    age: age,
    country,
    country,
    uId: uId,
  }
}
console.log(newUser('juancms98', 23, 'VE', 1));

// EcmaScript6
function newUser({
  username,
  age,
  country,
  uId
}) {
  return {
    username,
    age,
    country,
    uId,
  }
}

console.log(newUser('juancms98', 23, 'VE', 1));