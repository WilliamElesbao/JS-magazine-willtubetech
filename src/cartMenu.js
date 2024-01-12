/** @format */

import {
  catalogProducts,
  saveLocalStorage,
  getLocalStorage,
} from "./utilities";

const idsProductCartQnt = getLocalStorage("cart") ?? {};

function openCart() {
  document.getElementById("cart").classList.add("right-[0px]");
  document.getElementById("cart").classList.remove("right-[-360px]");
}

function closeCart() {
  document.getElementById("cart").classList.remove("right-[0px]");
  document.getElementById("cart").classList.add("right-[-360px]");
}

function goToCheckout() {
  if(Object.keys(idsProductCartQnt).length === 0){
    return;
  }
  window.location.href ='./checkout.html';
}

export function initCart() {
  const closeCartButton = document.getElementById("close-cart");
  const openCartButton = document.getElementById("open-cart");
  const buttonGoToCheckout = document.getElementById("finish-order");

  closeCartButton.addEventListener("click", closeCart);
  openCartButton.addEventListener("click", openCart);
  buttonGoToCheckout.addEventListener("click", goToCheckout);
}

function deleteFromCart(productId) {
  delete idsProductCartQnt[productId];
  saveLocalStorage("cart", idsProductCartQnt);
  updatePriceCart();
  renderProductsCart();
}

function incrementQntProduct(productId) {
  idsProductCartQnt[productId]++;
  saveLocalStorage("cart", idsProductCartQnt);
  updatePriceCart();
  updateQnt(productId);
}

function decrementQntProduct(productId) {
  if (idsProductCartQnt[productId] === 1) {
    deleteFromCart(productId);
    return;
  }
  idsProductCartQnt[productId]--;
  saveLocalStorage("cart", idsProductCartQnt);
  updatePriceCart();
  updateQnt(productId);
}

function updateQnt(productId) {
  document.getElementById(`qnt${productId}`).innerText =
    idsProductCartQnt[productId];
}

function renderProductOnCart(productId) {
  // .find "ache"
  // produto p, tal que (seta)
  // esse produto p.id seja igual ao productId que recebo como parametro da funcao
  const product = catalogProducts.find((p) => p.id === productId);
  const containerProductCart = document.getElementById("cart-products");

  const elementArticle = document.createElement("article"); //<article></article>
  const articleClasses = [
    "flex",
    "bg-slate-100",
    "rounded-lg",
    "p-1",
    "relative",
  ];
  for (const articleClass of articleClasses) {
    // pega o elemento article e vem na lista de classe e adiciona a classe da vez
    elementArticle.classList.add(articleClass);
  }
  //<article class=" flex bg-slate-100 rounded-lg p-1 relative"></article>
  const cardProductCart = `
    <button id="remove-product-${product.id}"
    class="
    absolute 
    top-0 
    right-2"
    >
    <i class="fa-solid fa-circle-xmark
    text-slate-700 
    hover:text-slate-800
    ">
    </i>
    </button>
    <img
    src="${product.productImg}" 
    alt="${product.name}" 
    class="
    h-24
    rounded-lg
    "
    >
    <div class="p-2 flex flex-col justify-between">
    <p 
    class="
    text-slate-900
    text-sm"
    >
    ${product.name}
    </p>
    <p class="text-slate-400 text-xs">Size: L</p>
    <p class="text-green-700 text-lg">$${product.price}</p>
    </div>
    
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
    <button id='decrement-product-${
      product.id
    }' class='hover:text-slate-700'><i class="fa-solid fa-square-minus"></i></button>
    <p id='qnt${product.id}' class='ml-2'>${idsProductCartQnt[product.id]}</p>
    <button id='increment-product-${
      product.id
    }' class='ml-2 hover:text-slate-700'><i class="fa-solid fa-square-plus"></i></button>
    </div>
    `;
  elementArticle.innerHTML = cardProductCart;
  containerProductCart.appendChild(elementArticle);

  // aguarda o evento do click, e quando acontecer ele ja ta engalinhado a funcao
  // ()=>decrementQntProduct(product.id)
  document
    .getElementById(`decrement-product-${product.id}`)
    .addEventListener("click", () => decrementQntProduct(product.id));
  document
    .getElementById(`increment-product-${product.id}`)
    .addEventListener("click", () => incrementQntProduct(product.id));
  document
    .getElementById(`remove-product-${product.id}`)
    .addEventListener("click", () => deleteFromCart(product.id));
}

export function renderProductsCart() {
  const containerProductCart = document.getElementById("cart-products");
  containerProductCart.innerHTML = ``;

  for (const idProduct in idsProductCartQnt) {
    renderProductOnCart(idProduct);
  }
}

export function addToCart(productId) {
  if (productId in idsProductCartQnt) {
    incrementQntProduct(productId);
    return; // chegou até aqui saia da função ou "retorne"
  }
  idsProductCartQnt[productId] = 1;
  saveLocalStorage("cart", idsProductCartQnt); // chave é 'carrinho' e como valor passei o dicionário
  renderProductOnCart(productId);
  updatePriceCart();
}

export function updatePriceCart() {
  const priceCart = document.getElementById("total-price");
  let totalPriceCart = 0;
  for (const idProductInCart in idsProductCartQnt) {
    totalPriceCart +=
      catalogProducts.find((p) => p.id === idProductInCart).price *
      idsProductCartQnt[idProductInCart];
  }
  priceCart.innerText = `Total: $${totalPriceCart}`;
}
