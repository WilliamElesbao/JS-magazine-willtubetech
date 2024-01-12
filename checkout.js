import { renderProductOnCartSimple, getLocalStorage, destroyDatasFromLocalStorage, saveLocalStorage } from "./src/utilities";
import { updatePriceCart } from './src/cartMenu';

function renderProductsCheckout() {
  const idsProductCartQnt = getLocalStorage("cart") ?? {};
  for (const idProduct in idsProductCartQnt) {
    renderProductOnCartSimple(
      idProduct,
      "container-products-checkout",
      idsProductCartQnt[idProduct]
    );
  }
  updatePriceCart();
}

function finishOrder(event) {
    event.preventDefault(); //interrompe a acao padrao, foi definido que após o submit ele redireciona para a pagina de orders.html
    const idsProductCartQnt = getLocalStorage("cart") ?? {};
    if(Object.keys(idsProductCartQnt).length === 0){
        return;
    }

    const currentDate = new Date();
    const orderDone = {
        dateOrder: currentDate,
        order: idsProductCartQnt
    }
    const historyOrders = getLocalStorage('history') ?? [];
    const historyOrdersUpdated = [orderDone, ...historyOrders] // operador spread- pega o pedido 1, 2 e 3.....

    saveLocalStorage('history', historyOrdersUpdated);

    destroyDatasFromLocalStorage('cart');

    window.location.href = './orders.html';
}

renderProductsCheckout();

// o evt está pegando as informacoes e passando para a funcao finishOrder
document.addEventListener('submit', (evt) => finishOrder(evt));