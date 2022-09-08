// para activar y desactivar las ventanas flotantes, ponemos en el css la clase inactive con display none; y luego la asignamos a las ventanas que querramos desactivar.

// *DESPLEGABLE MENÚ EMAIL ORDEN Y CUENTA DE USUARIO
//  1. seleccionamos la clase del li del menú de donde se hace click para que se despliegue la ventana flotante y la guardamos en una variable
//  También seleccionamos la clase del contenedor de la ventana que se va a desplegar y la guardamos en otra variable
const menuEmail = document.querySelector('.navbar-email');
const descktopMenu = document.querySelector('.desktop-menu');

// 2. utilizamos el método Listener para provocar una acción ver u ocultar usando la variable const defina anteriormente
menuEmail.addEventListener('click', toggleDesktopMenu);

//  3. creamos la función del toggle para ejecutar dentro, el código que hace aparecer o desaparecer la ventana flotante; el nombre de la función tiene que coincidir con el argumento del Listener (toggleDesktopMenu); hay que ponerle en el html, al contenedor de la ventana desplegable, la clase inactive
function toggleDesktopMenu() {
    aside.classList.add('inactive');//esta linea se incluyó para que no se superponga la ventana de la cuenta de usuario; si se abre el aside, se le agrega la clase inactive a este y se cierra
    descktopMenu.classList.toggle('inactive');
}

// *SELECTOR DEL ICONO DE MENÚ LATERAL MOBILE
// 1.
const menuMobiHambur = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')

// 2.
menuMobiHambur.addEventListener('click', toggleMobileMenu);

// 3.
function toggleMobileMenu() {
    aside.classList.add('inactive');//esta linea se incluyó para que no se superponga con la orden de compra del carrito; si se abre el aside, se le agrega la clase inactive a este y se cierra
    mobileMenu.classList.toggle('inactive');
}

// *SELECTOR CARRITO Y VENTANA ORDEN DE COMPRA
// 1.
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

// 2.
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

// 3.
function toggleCarritoAside() {
    descktopMenu.classList.add('inactive'); //si se abre la ventana de cuenta de usuario la orden de compra se cierra 
    mobileMenu.classList.add('inactive');//esta linea se incluyó para que no se superponga con la barra del menú lateral; si se abre el mobilMenu, se le agrega la clase inactive a este y se cierra.
    aside.classList.toggle('inactive');
}

//*si el código falla; una manera de probarlo es haciendo un console.log para ver si está escuchando el click; hacemos un  console.log('click');
    