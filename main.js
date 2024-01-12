/** @format */

import { catalogRender } from "./src/cardProduct";
import { initCart, renderProductsCart, updatePriceCart } from "./src/cartMenu";
import { filtersInit } from "./src/catalogFilters";

catalogRender();
initCart();
renderProductsCart();
updatePriceCart();
filtersInit();

