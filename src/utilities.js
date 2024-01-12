/** @format */

export const catalogProducts = [
  {
    id: `1`,
    name: `Tech T-Shirt`,
    brand: `Insider`,
    price: 159,
    productImg: `https://www.insiderstore.com.br/cdn/shop/files/CARMENERE-01.jpg?v=1700691687&width=1206`,
    female: false,
  },
  {
    id: `2`,
    name: `Pullover Masculino`,
    brand: `Insider`,
    price: 429,
    productImg: `https://www.insiderstore.com.br/cdn/shop/files/preta01.jpg?v=1692213241&width=1206`,
    female: false,
  },
  {
    id: `3`,
    name: `Tech T-Shirt Gola V`,
    brand: `Insider`,
    price: 165,
    productImg: `https://www.insiderstore.com.br/cdn/shop/files/PRETO-01_4.jpg?v=1699458216&width=1206`,
    female: false,
  },
  {
    id: `4`,
    name: `Spectrum Socks High 2.0`,
    brand: `Insider`,
    price: 62,
    productImg: `https://www.insiderstore.com.br/cdn/shop/files/PRETO-02_2917da9b-ab41-44c7-8fff-1b4dc9cac146.jpg?v=1693761175&width=1206`,
    female: false,
  },
  {
    id: `5`,
    name: `Undershirt Anti Suor`,
    brand: `Insider`,
    price: 149,
    productImg: `https://www.insiderstore.com.br/cdn/shop/files/BRANCO-01_1.jpg?v=1702674245&width=1206`,
    female: false,
  },
  {
    id: `6`,
    name: `Tech T-Shirt Long Sleeve`,
    brand: `Insider`,
    price: 199,
    productImg: `https://www.insiderstore.com.br/cdn/shop/files/PRETO-01_93ba95cb-5abb-4270-9586-ca7200cc2acc.jpg?v=1700601942&width=1206`,
    female: false,
  },
  {
    id: `7`,
    name: `Heavy Hoodie`,
    brand: `Insider`,
    price: 449,
    productImg: `https://www.insiderstore.com.br/cdn/shop/files/BROWN-01.jpg?v=1701196157&width=1206`,
    female: false,
  },
  {
    id: `8`,
    name: `Daily T-Shirt`,
    brand: `Insider`,
    price: 125,
    productImg: `https://www.insiderstore.com.br/cdn/shop/files/PRETO-01_1_acf43370-b89c-4c2c-9d6e-4dc03f347e5b.jpg?v=1698610075&width=1206`,
    female: false,
  },
  {
    id: `9`,
    name: `Turtleneck Feminino`,
    brand: `Insider`,
    price: 375,
    productImg: `https://www.insiderstore.com.br/cdn/shop/files/PRETO-01_91621a86-c35b-4d82-b2b6-6306a2399819.jpg?v=1693406515&width=1100`,
    female: true,
  },
  {
    id: `10`,
    name: `Structure Cropped`,
    brand: `Insider`,
    price: 129,
    productImg: `https://www.insiderstore.com.br/cdn/shop/files/StructureCrop.jpg?v=1700493649&width=1200`,
    female: true,
  },
];

export function saveLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value)); //pega o objeto e transforma em string/texto
}

export function destroyDatasFromLocalStorage(key){
  localStorage.removeItem(key)
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)); //pega a key e transforma em um objeto
}

export function renderProductOnCartSimple(
  productId, 
  idContainerHtml, 
  qntProduct
  ) {
  // .find "ache"
  // produto p, tal que (seta)
  // esse produto p.id seja igual ao productId que recebo como parametro da funcao
  const product = catalogProducts.find((p) => p.id === productId);
  const containerProductCart = document.getElementById(idContainerHtml);

  const elementArticle = document.createElement("article"); //<article></article>
  const articleClasses = [
    "flex",
    "bg-stone-200",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96"
  ];
  for (const articleClass of articleClasses) {
    // pega o elemento article e vem na lista de classe e adiciona a classe da vez
    elementArticle.classList.add(articleClass);
  }
  //<article class=" flex bg-slate-100 rounded-lg p-1 relative"></article>
  const cardProductCart = `
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
      <p id='qnt${product.id}' class='ml-2'>${qntProduct}</p>
    </div>
    `;
  elementArticle.innerHTML = cardProductCart;
  containerProductCart.appendChild(elementArticle); 
}