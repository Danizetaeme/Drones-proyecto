//menu hamburgesa
function openNav(){
  document.getElementById('sidenav').style.display = 'block';
  document.getElementById('sidenav').style.width = '50%';
}
function closeNav(){
  document.getElementById('sidenav').style.width = '0%';
}

const btnCart = document.querySelector('.container_icon');
const containerCartProductos = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
    containerCartProductos.classList.toggle('hidden-cart');

})



////filtro\\\\
// Obtener todos los botones de filtro
const filterButtons = document.querySelectorAll(".btnf");

// Agregar un event listener a cada botón de filtro
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filterValue = button.textContent;
    // Obtener todos los productos
    const products = document.querySelectorAll(".dron");
    products.forEach(product => {
      // Si el producto tiene la clase correspondiente al filtro seleccionado, mostrarlo; de lo contrario, ocultarlo
      if (product.classList.contains(filterValue) || filterValue === "Show All") {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// Obtener el botón de ordenar
const sortButton = document.querySelector(".sort-btn");

// Agregar un event listener al botón de ordenar
sortButton.addEventListener("click", () => {
  const sortValue = sortButton.getAttribute("data-sort");
  // Obtener todos los productos
  const products = document.querySelectorAll(".dron");
  // Convertir la lista de productos a un array
  const productsArray = Array.from(products);
  // Ordenar los productos según el valor de "data-price"
  productsArray.sort((a, b) => {
    const aPrice = parseFloat(a.getAttribute("data-price").replace(",", ""));
    const bPrice = parseFloat(b.getAttribute("data-price").replace(",", ""));
    if (sortValue === "asc") {
      return aPrice - bPrice;
    } else {
      return bPrice - aPrice;
    }
  });
  // Eliminar los productos existentes del contenedor
  products.forEach(product => {
    product.remove();
  });
  // Agregar los productos ordenados al contenedor
  const productSection = document.querySelector("#product-section");
  productsArray.forEach(product => {
    productSection.appendChild(product);
  });
});

///filtro ascendente y descendenteº\\\
// Obtener los botones de ordenamiento
const sortButtons = document.querySelectorAll('.sort-btn');

// Obtener la sección de productos
const productSection = document.getElementById('product-section');

// Agregar un evento click a cada botón
sortButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Obtener el valor del atributo data-sort del botón
    const sortOrder = button.dataset.sort;
    
    // Obtener todos los productos y convertir la colección en un arreglo
    const products = Array.from(productSection.querySelectorAll('.dron'));
    
    // Ordenar los productos por el atributo data-price
    products.sort((a, b) => {
      const aPrice = parseFloat(a.dataset.price.replace(',', ''));
      const bPrice = parseFloat(b.dataset.price.replace(',', ''));
      
      if (sortOrder === 'asc') {
        return aPrice - bPrice;
      } else {
        return bPrice - aPrice;
      }
    });
    
    // Vaciar la sección de productos
    productSection.innerHTML = '';
    
    // Agregar los productos ordenados a la sección de productos
    products.forEach(product => {
      productSection.appendChild(product);
    });
  });
});
