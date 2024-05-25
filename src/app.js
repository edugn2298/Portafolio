const toggleButton = document.getElementById('toggle-mode');

toggleButton.addEventListener('click', () => {
  document.documentElement.classList.toggle("dark"); // Cambia la clase para el modo oscuro
});