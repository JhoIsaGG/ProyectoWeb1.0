function mostrarJuego() {
  document.getElementById("contenedorJuego").style.display = "flex";
  document.getElementById("btnJuego").style.display = "none";
}


const toggleButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navegacion-principal');

    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('activo');
    });