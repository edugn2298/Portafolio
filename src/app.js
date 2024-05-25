const toggleButton = document.getElementById('toggle-mode');
const contentContainer = document.getElementById('content');

toggleButton.addEventListener('click', () => {
  contentContainer.classList.toggle('dark:bg-neutral-800'); // Cambia la clase para el modo oscuro
});