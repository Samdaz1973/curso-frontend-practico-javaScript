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
    shoppingCartContainer.classList.add('inactive');//esta linea se incluyó para que no se superponga la ventana de la cuenta de usuario; si se abre el aside, se le agrega la clase inactive a este y se cierra
    productDetailContainer.classList.add('inactive');

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
    shoppingCartContainer.classList.add('inactive');//esta linea se incluyó para que no se superponga con la orden de compra del carrito; si se abre el aside, se le agrega la clase inactive a este y se cierra
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

// *SELECTOR CARRITO Y VENTANA ORDEN DE COMPRA
// 1.
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

// 2.
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

// 3.
function toggleCarritoAside() {
    productDetailContainer.classList.add('inactive');
    descktopMenu.classList.add('inactive'); //si se abre la ventana de cuenta de usuario la orden de compra se cierra 
    mobileMenu.classList.add('inactive');//esta linea se incluyó para que no se superponga con la barra del menú lateral; si se abre el mobilMenu, se le agrega la clase inactive a este y se cierra.
    shoppingCartContainer.classList.toggle('inactive');
    
}
//  *selector y función para abrir ventana de producto al hacer click en las fotos
const productDetailContainer = document.querySelector('#productDetail');
function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive')
    descktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
//  *selector y función para cerrar ventana de producto al hacer click en las fotos
const productDetailCloseIcon = document.querySelector('.product-detail-close')

productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

//*si el código falla; una manera de probarlo es haciendo un console.log para ver si está escuchando el click; hacemos un  console.log('click');


// * CÓDIGO PARA ACOPLAR LA VENTANA DE PRODUCTOS:

// creamos un array con varios objetos
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Monitor',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

//* este código de html lo maquetamos en JS dentro del for
/*
    <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/
// createElement nos permite crear cada elemento desde JS; adentro creamos el contenedor html

// para insertarlo en el html, tenemos que recorrer el array; podemos hacer un ciclo for; hay una sintaxis que simplifica el for; otra opción dentro del for es con in en vez del of, funciona imprimiendo el índice no las propiedades
/*
 for (product in productList) {
     
 }
 */
// este es el contenedor más general; la función append mete un contenedor en otro; se hace desde el más interior hasta el más general o exterior
const cardsContainer = document.querySelector('.cards-container');
/*
for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
}
*/

// otra manera de trabajar el for dentro de una función
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
// Luego llamamos esa función; incluso la podríamos accionar desde un click en la página
renderProducts(productList);

