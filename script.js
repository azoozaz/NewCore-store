
async function loadProducts() {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  const container = document.querySelector('.products');
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>السعر: ${p.price} ريال</p>
      <button onclick="addToCart('${p.name}', ${p.price})">أضف للسلة</button>
    `;
    container.appendChild(div);
  });
}

loadProducts();

let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} تمت إضافته للسلة`);
}
