/** @format */

import { addToCart } from "./cartMenu";
import { catalogProducts } from "./utilities";

export function catalogRender() {
  for (const catalogProduct of catalogProducts) {
    const productCard = `<div class='border-solid w-48 mx-2 my-2 flex flex-col pb-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${
      catalogProduct.female ? "female" : "male"
    }' id="card-product-${catalogProduct.id}">
            <img src='${catalogProduct.productImg}'
            alt="produto 1 do magazine hashtag" 
            class='group-hover:scale-110 duration-300 mb-3 rounded-lg' 
            />
            <p class='text-sm'>${catalogProduct.brand}</p>
            <p class='text-sm'>${catalogProduct.name}</p>
            <p class='text-sm'>$ ${catalogProduct.price}</p>
            <button
                id='add-${catalogProduct.id}'
                class="bg-slate-950 text-slate-200 hover:bg-gradient-to-r from-sky-500 to-indigo-500"
            ><i class="fa-solid fa-cart-plus"></i>
            </button>
        </div>
    `;

    // pega a pagina = document
    // agora pega o elemento que tenho o id xxxx = getElementById('element-name-id')
    // agora acrescenta no html deste elemento a variavel cardProduct = innerHTML += cardProduct
    document.getElementById("container__product").innerHTML += productCard;
  }

  for (const catalogProduct of catalogProducts) {
    document
      .getElementById(`add-${catalogProduct.id}`)
      .addEventListener("click", () => addToCart(catalogProduct.id));
  }
}
