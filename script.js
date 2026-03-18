/* ── NexStore Script ── */

const products = [
    // Electronics
    { id: 1,  name: "Zephyr Pro Headphones",  category: "electronics", price: 24999, badge: "hot",  img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=700" },
    { id: 2,  name: "Titan Smartwatch Ultra",  category: "electronics", price: 42000, badge: "new",  img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=700" },
    { id: 3,  name: "Leica Noir Camera",       category: "electronics", price: 145000, badge: null, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=700" },
    { id: 4,  name: "Zen Mechanical KB",       category: "electronics", price: 18500, badge: null,  img: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?q=80&w=700" },
    { id: 5,  name: "Pixel Tablet S2",         category: "electronics", price: 68000, badge: "new", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=700" },
    { id: 6,  name: "Obsidian Drone X",        category: "electronics", price: 89000, badge: "hot", img: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=700" },
    
    // Audio
    { id: 7,  name: "Noise-X ANC Buds",        category: "audio",       price: 9999,  badge: "sale", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=700" },
    { id: 8,  name: "Marshall Origin Speaker", category: "audio",       price: 31500, badge: null,  img: "https://images.unsplash.com/photo-1725016934951-5acd118169de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFyc2hhbGwlMjBPcmlnaW4lMjBTcGVha2VyfGVufDB8fDB8fHww" },
    { id: 9,  name: "Vinyl Revival Turntable", category: "audio",       price: 27000, badge: "new", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=700" },
    { id: 10, name: "Studio Monitor Pair",     category: "audio",       price: 54000, badge: null,  img: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=700" },

    // Fashion
    { id: 11, name: "Napa Leather Tote",       category: "fashion",     price: 8900,  badge: null,  img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=700" },
    { id: 12, name: "Urban Nomad Pack",        category: "fashion",     price: 15999, badge: "hot", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=700" },
    { id: 13, name: "Aviator Gold Shades",      category: "fashion",     price: 22500, badge: null,  img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=700" },
    { id: 14, name: "Merino Wool Overcoat",     category: "fashion",     price: 34000, badge: "new", img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=700" },
    { id: 15, name: "Ceramic Dial Chrono",      category: "fashion",     price: 87500, badge: "hot",  img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=700" },
    { id: 16, name: "Minimalist Chelsea Boots", category: "fashion",     price: 12000, badge: null,  img: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=700" },

    // Lifestyle
    { id: 17, name: "Aura Desk Lamp",           category: "lifestyle",   price: 12500, badge: null,  img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=700" },
    { id: 18, name: "Bamboo Pour-Over Kit",    category: "lifestyle",   price: 5400,  badge: "sale", img: "https://images.unsplash.com/photo-1634082981957-2c6969d3d443?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmFtYm9vJTIwUG91ciUyME92ZXIlMjBLaXR8ZW58MHx8MHx8fDA%3D" },
    { id: 19, name: "Monochrome Chess Set",     category: "lifestyle",   price: 19900, badge: null,  img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=700" },
    { id: 20, name: "Marble Desk Organiser",    category: "lifestyle",   price: 7200,  badge: "new", img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=700" },
    { id: 21, name: "Artisan Scented Candle",   category: "lifestyle",   price: 3200,  badge: null,  img: "https://images.unsplash.com/photo-1703254573169-5a424be2d8cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2NlbnRlZCUyMGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 22, name: "Hydro Matte Flask",       category: "lifestyle",   price: 2500,  badge: "sale", img: "https://images.unsplash.com/photo-1616740540792-3daec604777d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHlkcm9mbGFza3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 23, name: "Walnut Wood Speaker",     category: "lifestyle",   price: 45000, badge: "hot",  img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=700" },
    { id: 24, name: "Terrarium Glass Orb",      category: "lifestyle",   price: 4800,  badge: "new",  img: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=700" }
];

let cart = [];
let wishlist = new Set();
let isListView = false;

/* ── Helpers ── */
const formatINR = (n) => "₹" + Number(n).toLocaleString('en-IN');

const $ = (id) => document.getElementById(id);

/* ── Render Products ── */
function renderProducts(data) {
    const grid = $('productGrid');
    const noResults = $('noResults');
    const countEl = $('productCount');

    countEl.textContent = `${data.length} product${data.length !== 1 ? 's' : ''}`;

    if (data.length === 0) {
        grid.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');
    grid.classList.remove('hidden');

    grid.innerHTML = data.map((p, i) => {
        const badgeHTML = p.badge
            ? `<div class="card-badge badge-${p.badge}">${p.badge}</div>`
            : '';
        const isWishlisted = wishlist.has(p.id);
        return `
        <div class="product-card" style="animation-delay:${i * 55}ms">
            ${badgeHTML}
            <div class="img-container">
                <img src="${p.img}" class="product-img" alt="${p.name}" loading="lazy">
                <div class="img-actions">
                    <button class="wishlist-btn ${isWishlisted ? 'liked' : ''}" onclick="toggleWishlist(${p.id}, this)" aria-label="Wishlist">
                        ${isWishlisted ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
            <div class="p-info">
                <span class="category-tag">${p.category}</span>
                <h3 class="product-name">${p.name}</h3>
                <div class="card-footer">
                    <div class="price-tag">${formatINR(p.price)}</div>
                    <button class="add-btn" onclick="addToCart(${p.id})">Add to Bag</button>
                </div>
            </div>
        </div>`;
    }).join('');
}

/* ── Filters & Sort ── */
function applyFilters() {
    const searchTerm = $('searchInput').value.toLowerCase().trim();
    const cat = $('categorySelect').value;
    const maxPrice = Number($('priceRange').value);
    const sort = $('sortSelect').value;

    // update price label
    $('priceVal').textContent = formatINR(maxPrice);

    // update range fill
    const pct = (maxPrice / 150000) * 100;
    $('rangeFill').style.width = pct + '%';

    let filtered = products.filter(p => {
        return (
            p.name.toLowerCase().includes(searchTerm) &&
            (cat === 'all' || p.category === cat) &&
            p.price <= maxPrice
        );
    });

    // Sort
    if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

    renderProducts(filtered);
}

/* ── Cart ── */
window.addToCart = (id) => {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, cartId: Date.now() + Math.random() });
    updateCartUI();
    animateCartCount();
    showToast(`${product.name} added to bag`);
};

window.removeFromCart = (cartId) => {
    const el = document.querySelector(`[data-cart-id="${cartId}"]`);
    if (el) {
        el.style.transition = 'all 0.3s ease';
        el.style.opacity = '0';
        el.style.transform = 'translateX(30px)';
        setTimeout(() => {
            cart = cart.filter(item => item.cartId !== cartId);
            updateCartUI();
        }, 280);
    } else {
        cart = cart.filter(item => item.cartId !== cartId);
        updateCartUI();
    }
};

window.toggleWishlist = (id, btn) => {
    if (wishlist.has(id)) {
        wishlist.delete(id);
        btn.textContent = '🤍';
        btn.classList.remove('liked');
        showToast('Removed from wishlist');
    } else {
        wishlist.add(id);
        btn.textContent = '❤️';
        btn.classList.add('liked');
        btn.style.transform = 'scale(1.4)';
        setTimeout(() => btn.style.transform = '', 300);
        showToast('Added to wishlist ❤️');
    }
};

function updateCartUI() {
    const count = cart.length;
    $('cartCount').textContent = count;
    $('drawerSub').textContent = `${count} item${count !== 1 ? 's' : ''}`;

    const cartPulse = $('cartPulse');
    if (count > 0) cartPulse.classList.add('active');
    else cartPulse.classList.remove('active');

    const emptyCart = $('emptyCart');
    const cartItems = $('cartItems');

    if (count === 0) {
        cartItems.innerHTML = '';
        emptyCart.classList.remove('hidden');
    } else {
        emptyCart.classList.add('hidden');
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-cart-id="${item.cartId}">
                <img class="cart-item-img" src="${item.img}" alt="${item.name}" loading="lazy">
                <div class="cart-item-info">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-cat">${item.category}</p>
                    <p class="cart-item-price">${formatINR(item.price)}</p>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.cartId})" aria-label="Remove">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, i) => sum + i.price, 0);
    $('cartTotal').textContent = formatINR(total);
}

function animateCartCount() {
    const el = $('cartCount');
    el.style.transform = 'scale(1.4)';
    setTimeout(() => el.style.transform = '', 300);
}

/* ── Toast ── */
let toastTimer;
function showToast(msg = 'Added to bag') {
    const t = $('toast');
    $('toastMsg').textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ── Cart Drawer ── */
function openCart() {
    $('cartDrawer').classList.add('active');
    $('cartOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeCartDrawer() {
    $('cartDrawer').classList.remove('active');
    $('cartOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

$('cartTrigger').onclick = openCart;
$('closeCart').onclick = closeCartDrawer;
$('cartOverlay').onclick = closeCartDrawer;

/* ── Theme Toggle ── */
$('themeToggle').onclick = () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
};

/* ── View Toggle ── */
$('gridView').onclick = () => {
    isListView = false;
    $('productGrid').classList.remove('list-mode');
    $('gridView').classList.add('active');
    $('listView').classList.remove('active');
};
$('listView').onclick = () => {
    isListView = true;
    $('productGrid').classList.add('list-mode');
    $('listView').classList.add('active');
    $('gridView').classList.remove('active');
};

/* ── Reset ── */
function resetFilters() {
    $('searchInput').value = '';
    $('categorySelect').value = 'all';
    $('priceRange').value = 150000;
    $('sortSelect').value = 'default';
    $('rangeFill').style.width = '100%';
    applyFilters();
}
$('resetBtn').onclick = resetFilters;
$('emptyReset').onclick = resetFilters;

/* ── Event Listeners ── */
$('searchInput').addEventListener('input', applyFilters);
$('categorySelect').addEventListener('change', applyFilters);
$('priceRange').addEventListener('input', applyFilters);
$('sortSelect').addEventListener('change', applyFilters);

/* ── Keyboard Shortcut ── */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCartDrawer();
});

/* ── Init ── */
$('rangeFill').style.width = '100%';
updateCartUI();
renderProducts(products);