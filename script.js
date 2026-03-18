const products = [
    { id: 1, name: "Zephyr Pro Studio", category: "electronics", price: 24999, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600" },
    { id: 2, name: "Titan Smartwatch v2", category: "electronics", price: 42000, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600" },
    { id: 3, name: "Leica Noir Edition", category: "electronics", price: 145000, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600" },
    { id: 4, name: "Aura Desk Sculpture", category: "lifestyle", price: 12500, img: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=600" },
    { id: 5, name: "Mechanical Zen KB", category: "electronics", price: 18500, img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=600" },
    { id: 6, name: "Napa Leather Tote", category: "fashion", price: 8900, img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600" },
    { id: 7, name: "Urban Nomad Pack", category: "fashion", price: 15999, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600" },
    { id: 8, name: "Aviator Gold Lenses", category: "fashion", price: 22500, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600" },
    { id: 9, name: "Silk Midnight Set", category: "fashion", price: 32000, img: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=600" },
    { id: 10, name: "Cloud-Walk Sneakers", category: "fashion", price: 18900, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600" }
];

let cart = [];

// Helper for Indian Currency Formatting
const formatINR = (amount) => "₹" + Number(amount).toLocaleString('en-IN');

function render(data) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = data.map((p, i) => `
        <div class="product-card" style="animation: reveal 0.6s ease forwards ${i * 0.1}s; opacity: 0;">
            <div class="img-container">
                <img src="${p.img}" class="product-img" alt="${p.name}">
            </div>
            <div class="p-info">
                <small style="color:var(--primary); font-weight:bold; text-transform:uppercase">${p.category}</small>
                <h3>${p.name}</h3>
                <div class="price-tag">${formatINR(p.price)}</div>
                <button class="add-btn" onclick="addToCart(${p.id})">Add to Bag</button>
            </div>
        </div>
    `).join('');
}

function filter() {
    const s = document.getElementById('searchInput').value.toLowerCase();
    const c = document.getElementById('categorySelect').value;
    const p = document.getElementById('priceRange').value;
    document.getElementById('priceVal').innerText = formatINR(p);

    const filtered = products.filter(item => {
        return (item.name.toLowerCase().includes(s)) &&
               (c === 'all' || item.category === c) &&
               (item.price <= p);
    });
    render(filtered);
}

window.addToCart = (id) => {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCart();
    const t = document.getElementById('toast');
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
};

function updateCart() {
    document.getElementById('cartCount').innerText = cart.length;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cartTotal').innerText = formatINR(total);
    
    document.getElementById('cartItems').innerHTML = cart.map(item => `
        <div style="display:flex; justify-content:space-between; margin-bottom:1rem; border-bottom:1px solid var(--border); padding-bottom:0.5rem">
            <span>${item.name}</span>
            <b>${formatINR(item.price)}</b>
        </div>
    `).join('');
}

// Listeners
document.getElementById('searchInput').oninput = filter;
document.getElementById('categorySelect').onchange = filter;
document.getElementById('priceRange').oninput = filter;
document.getElementById('cartTrigger').onclick = () => document.getElementById('cartDrawer').classList.add('active');
document.getElementById('closeCart').onclick = () => document.getElementById('cartDrawer').classList.remove('active');
document.getElementById('themeToggle').onclick = () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
};

// Start
render(products);