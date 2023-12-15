const Dado = document.getElementById("dado");

const botonLanzar = document.getElementById("tirar-btn");

// Función para generar un número aleatorio entre 1 y 6
function tirarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Función para actualizar el resultado en la interfaz
function actualizarDado(result) {
  Dado.textContent = result;
}

// Agregar un evento de click al botón de lanzamiento

botonLanzar.addEventListener("click", () => {
  const result = tirarDado(); // Lanzar el dado
  actualizarDado(result); // Actualizar el resultado en la interfaz
});
