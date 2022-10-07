import fetch from "node-fetch"; // importamos el módulo de fetch a nuestro proyecto

const response = await fetch('https://api.escuelajs.co/api/v1/products'); // Aquí obtenemos el resultado en texto plano

const products = await response.json(); // Aquí convertimos a json con su método .json()

export {
  products
};