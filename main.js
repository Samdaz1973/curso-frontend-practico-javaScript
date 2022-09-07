// !para activar el menú flotante, primero seleccionamos el elemento li de donde se despliega el menú flotante y también la clase del descktop-menu

const menuEmail = document.querySelector('.navbar-email');
const descktopMenu = document.querySelector('.desktop-menu');

// *selector del ícono de menú de mobile
const menuMobiHambur = document.querySelector('.menu')

// *selector de la barra vertical de menú de mobile
const mobileMenu = document.querySelector('.mobile-menu')

// utilizamos el método Listener para provocar una acción ver u ocultar
menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobiHambur.addEventListener('click', toggleMobileMenu);

// creamos la función para ejecutar el método anterior
function toggleDesktopMenu() {
    //*el código falló; una manera de probarlo es haciendo un console.log para ver si está escuchando el click
    //  console.log('click');
    //la clase inactive está en el css y es lo que permite ocultar el descktop-menu; con esta función la activamos o desactivamos
    descktopMenu.classList.toggle('inactive');
}

// este otro console es para ver si el archivo está conectado y funcionando
//  console.log('JS funcionando'); 
//  el archivo no estataba conectado en la etiqueta script en el html

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}