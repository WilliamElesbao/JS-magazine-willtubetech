/** @format */

const catalogProducts = document.getElementById("container__product");
function showAll() {
  const hiddenProducts = Array.from(
    catalogProducts.getElementsByClassName("hidden")
  );

  for (const product of hiddenProducts) {
    product.classList.remove("hidden");
  }
}
function hiddenMale() {
  showAll();
  const maleProducts = Array.from(
    catalogProducts.getElementsByClassName("male")
  );

  for (const product of maleProducts) {
    product.classList.add("hidden");
  }
}

function hiddenFemale() {
  showAll();
  const maleProducts = Array.from(
    catalogProducts.getElementsByClassName("female")
  );

  for (const product of maleProducts) {
    product.classList.add("hidden");
  }
}

export function filtersInit() {
  document.getElementById("show-all").addEventListener("click", showAll);
  document.getElementById("show-male").addEventListener("click", hiddenFemale);
  document.getElementById("show-female").addEventListener("click", hiddenMale);
}
