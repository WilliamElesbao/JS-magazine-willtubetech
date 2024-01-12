/** @format */

import { getLocalStorage, renderProductOnCartSimple } from "./src/utilities";

function createOrderHistory(orderWithDate) {
  const elementOrder = `
        <p class="text-xl text-bold my-4">${new Date(orderWithDate.dateOrder).toLocaleDateString('pt-br',{hour:'2-digit', minute: '2-digit', second:'2-digit'})}</p>
        <section id='container-orders-${orderWithDate.dateOrder}}' class="bg-slate-300 p-3 rounded-md"></section>
    `;
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML += elementOrder;

  for (const productId in orderWithDate.order) {
    renderProductOnCartSimple(
      productId,
      `container-orders-${orderWithDate.dateOrder}}`,
      orderWithDate.order[productId]
    );
  }
}

// of > usado para lista - vai no valor (nao pega o indice)
// in > usado para objeto - in vai na chave
function renderHistoryOrders() {
    const history = getLocalStorage('history');
    for (const orderWithDate of history){
        createOrderHistory(orderWithDate);
    }
}

renderHistoryOrders();