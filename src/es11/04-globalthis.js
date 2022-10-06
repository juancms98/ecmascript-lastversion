// Este objeto nos permite indicar exactamente en qué contexto se encuentra JavaScript y evitar el conflicto entre contextos.

console.log(window) // Este objeto es representado en el contexto del navegador.
console.log(global) // Este objeto es representado en el contexto del servidor.
console.log(self) // Este objeto es representado en el contexto del webworker (segundo plano).
console.log(globalThis) // Este objecto es representado para evitar los conflictos de los diferentes contextos.