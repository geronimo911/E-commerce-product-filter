/* ── NexStore Script ── */

/* ── LocalStorage Keys ── */
const LS_CART     = 'nexstore_cart';
const LS_WISHLIST = 'nexstore_wishlist';
const LS_ORDERS   = 'nexstore_orders';
const LS_THEME    = 'nexstore_theme';

/* ── Restore Theme Immediately ── */
const savedTheme = localStorage.getItem(LS_THEME) || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

/* ── Products ── */
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

/* ── State (hydrated from localStorage) ── */
let cart     = loadLS(LS_CART,     []);
let wishlist = new Set(loadLS(LS_WISHLIST, []));
let orders   = loadLS(LS_ORDERS,   []);
let isListView = false;

/* ── LocalStorage Helpers ── */
function loadLS(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
}
function saveLS(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

/* ── Helpers ── */
const formatINR = (n) => "₹" + Number(n).toLocaleString('en-IN');
const $ = (id) => document.getElementById(id);

/* ── Render Products ── */
function renderProducts(data) {
    const grid    = $('productGrid');
    const noRes   = $('noResults');
    const countEl = $('productCount');

    countEl.textContent = `${data.length} product${data.length !== 1 ? 's' : ''}`;

    if (data.length === 0) {
        grid.classList.add('hidden');
        noRes.classList.remove('hidden');
        return;
    }
    noRes.classList.add('hidden');
    grid.classList.remove('hidden');

    grid.innerHTML = data.map((p, i) => {
        const badgeHTML = p.badge ? `<div class="card-badge badge-${p.badge}">${p.badge}</div>` : '';
        const isWished  = wishlist.has(p.id);
        const inCart    = cart.some(c => c.id === p.id);
        return `
        <div class="product-card" style="animation-delay:${i * 55}ms">
            ${badgeHTML}
            <div class="img-container">
                <img src="${p.img}" class="product-img" alt="${p.name}" loading="lazy">
                <div class="img-actions">
                    <button class="wishlist-btn ${isWished ? 'liked' : ''}"
                        onclick="toggleWishlist(event,${p.id},this)" aria-label="Wishlist">
                        ${isWished ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
            <div class="p-info">
                <span class="category-tag">${p.category}</span>
                <h3 class="product-name">${p.name}</h3>
                <div class="card-footer">
                    <div class="price-tag">${formatINR(p.price)}</div>
                    <button class="add-btn ${inCart ? 'in-cart' : ''}" onclick="addToCart(event,${p.id})">
                        ${inCart ? '✓ In Bag' : 'Add to Bag'}
                    </button>
                </div>
            </div>
        </div>`;
    }).join('');
}

/* ── Filters & Sort ── */
function applyFilters() {
    const searchTerm = $('searchInput').value.toLowerCase().trim();
    const cat        = $('categorySelect').value;
    const maxPrice   = Number($('priceRange').value);
    const sort       = $('sortSelect').value;

    $('priceVal').textContent    = formatINR(maxPrice);
    $('rangeFill').style.width   = (maxPrice / 150000 * 100) + '%';

    let filtered = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm) &&
        (cat === 'all' || p.category === cat) &&
        p.price <= maxPrice
    );

    if (sort === 'price-asc')  filtered.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    if (sort === 'name')       filtered.sort((a, b) => a.name.localeCompare(b.name));

    renderProducts(filtered);
}

/* ── Add to Cart ── */
window.addToCart = (e, id) => {
    e.stopPropagation();
    if (cart.some(c => c.id === id)) { openCart(); return; }
    const product = products.find(p => p.id === id);
    cart.push({ ...product, cartId: Date.now() + Math.random() });
    saveLS(LS_CART, cart);
    updateCartUI();
    animateCartCount();
    applyFilters();
    showToast(`${product.name} added to bag`, 'success');
};

/* ── Remove from Cart ── */
window.removeFromCart = (cartId) => {
    const el = document.querySelector(`[data-cart-id="${cartId}"]`);
    const doRemove = () => {
        cart = cart.filter(i => i.cartId !== cartId);
        saveLS(LS_CART, cart);
        updateCartUI();
        applyFilters();
    };
    if (el) {
        Object.assign(el.style, { transition:'all 0.28s ease', opacity:'0', transform:'translateX(30px)' });
        setTimeout(doRemove, 280);
    } else doRemove();
};

/* ── Wishlist ── */
window.toggleWishlist = (e, id, btn) => {
    e.stopPropagation();
    if (wishlist.has(id)) {
        wishlist.delete(id);
        btn.textContent = '🤍';
        btn.classList.remove('liked');
        showToast('Removed from wishlist', 'info');
    } else {
        wishlist.add(id);
        btn.textContent = '❤️';
        btn.classList.add('liked');
        btn.style.transform = 'scale(1.5)';
        setTimeout(() => btn.style.transform = '', 300);
        showToast('Added to wishlist ❤️', 'success');
    }
    saveLS(LS_WISHLIST, [...wishlist]);
};

/* ── Cart UI ── */
function updateCartUI() {
    const count = cart.length;
    $('cartCount').textContent        = count;
    $('drawerSub').textContent        = `${count} item${count !== 1 ? 's' : ''}`;
    count > 0
        ? $('cartPulse').classList.add('active')
        : $('cartPulse').classList.remove('active');

    const empty = $('emptyCart');
    const list  = $('cartItems');

    if (count === 0) {
        list.innerHTML = '';
        empty.classList.remove('hidden');
    } else {
        empty.classList.add('hidden');
        list.innerHTML = cart.map(item => `
            <div class="cart-item" data-cart-id="${item.cartId}">
                <img class="cart-item-img" src="${item.img}" alt="${item.name}" loading="lazy">
                <div class="cart-item-info">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-cat">${item.category}</p>
                    <p class="cart-item-price">${formatINR(item.price)}</p>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.cartId})" aria-label="Remove">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>`).join('');
    }

    $('cartTotal').textContent = formatINR(cart.reduce((s, i) => s + i.price, 0));

    const btn = document.querySelector('.checkout-btn');
    if (btn) { btn.disabled = count === 0; btn.style.opacity = count === 0 ? '0.5' : '1'; }
}

function animateCartCount() {
    const el = $('cartCount');
    el.style.transform = 'scale(1.6)';
    setTimeout(() => el.style.transform = '', 300);
}

/* ── Toast ── */
let toastTimer;
function showToast(msg = 'Done', type = 'success') {
    const t   = $('toast');
    const map = { success:'✓', info:'ℹ', error:'✕', order:'🎉' };
    t.dataset.type = type;
    // rebuild inner content
    t.innerHTML = `<span class="toast-icon">${map[type] || '✓'}</span><span id="toastMsg">${msg}</span>`;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

/* ── Checkout Flow ── */
function handleCheckout() {
    if (cart.length === 0) return;

    const order = {
        id:        'ORD' + Date.now(),
        date:      new Date().toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }),
        time:      new Date().toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' }),
        items:     [...cart],
        total:     cart.reduce((s, i) => s + i.price, 0),
        itemCount: cart.length,
    };

    orders.unshift(order);
    if (orders.length > 10) orders.pop();
    saveLS(LS_ORDERS, orders);

    cart = [];
    saveLS(LS_CART, cart);
    closeCartDrawer();

    setTimeout(() => showSuccessModal(order), 320);
    updateCartUI();
    applyFilters();
}

/* ── Success Modal ── */
function showSuccessModal(order) {
    document.getElementById('successModal')?.remove();

    const modal = document.createElement('div');
    modal.id = 'successModal';
    modal.innerHTML = `
        <div class="modal-overlay" id="modalOverlay">
            <div class="modal-box" id="modalBox">
                <div class="modal-confetti" id="confettiContainer"></div>
                <div class="modal-icon-wrap">
                    <div class="modal-icon">✓</div>
                    <div class="modal-ring modal-ring-1"></div>
                    <div class="modal-ring modal-ring-2"></div>
                </div>
                <h2 class="modal-title">Order Placed! 🎉</h2>
                <p class="modal-subtitle">Your curated selection is on its way.</p>
                <div class="modal-order-id">Order #${order.id}</div>
                <div class="modal-meta">
                    <div class="modal-meta-item">
                        <span class="modal-meta-label">Items</span>
                        <span class="modal-meta-val">${order.itemCount}</span>
                    </div>
                    <div class="modal-meta-divider"></div>
                    <div class="modal-meta-item">
                        <span class="modal-meta-label">Total Paid</span>
                        <span class="modal-meta-val">${formatINR(order.total)}</span>
                    </div>
                    <div class="modal-meta-divider"></div>
                    <div class="modal-meta-item">
                        <span class="modal-meta-label">Date</span>
                        <span class="modal-meta-val">${order.date}</span>
                    </div>
                </div>
                <div class="modal-delivery">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m0 0h4l3 3v4h-7m0-7v7"/>
                        <circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
                    </svg>
                    Estimated delivery: <strong>3–5 business days</strong>
                </div>
                <div class="modal-actions">
                    <button class="modal-btn modal-btn-outline" onclick="showOrderHistory()">View Orders</button>
                    <button class="modal-btn modal-btn-primary" onclick="closeSuccessModal()">Continue Shopping</button>
                </div>
            </div>
        </div>`;
    document.body.appendChild(modal);

    requestAnimationFrame(() => {
        modal.querySelector('#modalBox').classList.add('modal-enter');
        spawnConfetti(modal.querySelector('#confettiContainer'));
    });

    modal.querySelector('#modalOverlay').addEventListener('click', (e) => {
        if (e.target.id === 'modalOverlay') closeSuccessModal();
    });

    showToast('Order placed successfully! 🎉', 'order');
}

window.closeSuccessModal = () => {
    const m = document.getElementById('successModal');
    if (!m) return;
    const box = m.querySelector('#modalBox');
    box.classList.add('modal-exit');
    setTimeout(() => m.remove(), 400);
};

/* ── Confetti ── */
function spawnConfetti(container) {
    const colors = ['#6366f1','#f472b6','#10b981','#f59e0b','#818cf8','#34d399','#fb923c'];
    for (let i = 0; i < 65; i++) {
        setTimeout(() => {
            const p = document.createElement('div');
            p.className = 'confetti-piece';
            const rotate = Math.random() * 720;
            const drift  = (Math.random() - 0.5) * 80;
            const dur    = 0.9 + Math.random() * 1.1;
            p.style.cssText = `
                left:${Math.random()*100}%;
                background:${colors[Math.floor(Math.random()*colors.length)]};
                width:${4+Math.random()*8}px; height:${4+Math.random()*8}px;
                border-radius:${Math.random()>.5?'50%':'3px'};
                --rotate:${rotate}deg; --drift:${drift}px;
                animation:confettiFall ${dur}s ease-in forwards;
                animation-delay:${Math.random()*0.2}s;
            `;
            container.appendChild(p);
            setTimeout(() => p.remove(), (dur + 0.3) * 1000);
        }, i * 16);
    }
}

/* ── Order History Modal ── */
window.showOrderHistory = () => {
    closeSuccessModal();
    document.getElementById('ordersModal')?.remove();

    const rows = orders.length === 0
        ? `<div class="orders-empty">No orders yet — start shopping!</div>`
        : orders.map(o => `
            <div class="order-row">
                <div class="order-row-header">
                    <span class="order-row-id">#${o.id}</span>
                    <span class="order-row-date">${o.date} · ${o.time}</span>
                </div>
                <div class="order-row-items">${o.items.map(i => i.name).join(', ')}</div>
                <div class="order-row-footer">
                    <span class="order-row-count">${o.itemCount} item${o.itemCount!==1?'s':''}</span>
                    <span class="order-row-total">${formatINR(o.total)}</span>
                </div>
            </div>`).join('');

    const modal = document.createElement('div');
    modal.id = 'ordersModal';
    modal.innerHTML = `
        <div class="modal-overlay" id="ordOverlay">
            <div class="modal-box orders-modal-box" id="ordBox">
                <div class="modal-header-row">
                    <h2 class="modal-title" style="font-size:1.3rem;margin:0">Order History</h2>
                    <button class="close-btn" onclick="closeOrdersModal()" aria-label="Close">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>
                </div>
                <div class="orders-list">${rows}</div>
            </div>
        </div>`;
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.querySelector('#ordBox').classList.add('modal-enter'));
    modal.querySelector('#ordOverlay').addEventListener('click', (e) => {
        if (e.target.id === 'ordOverlay') closeOrdersModal();
    });
};

window.closeOrdersModal = () => {
    const m = document.getElementById('ordersModal');
    if (!m) return;
    m.querySelector('#ordBox').classList.add('modal-exit');
    setTimeout(() => m.remove(), 400);
};

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
$('closeCart').onclick   = closeCartDrawer;
$('cartOverlay').onclick = closeCartDrawer;
document.querySelector('.checkout-btn').addEventListener('click', handleCheckout);

/* ── Theme Toggle (persisted) ── */
$('themeToggle').onclick = () => {
    const html  = document.documentElement;
    const next  = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    saveLS(LS_THEME, next);
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
    $('searchInput').value     = '';
    $('categorySelect').value  = 'all';
    $('priceRange').value      = 150000;
    $('sortSelect').value      = 'default';
    $('rangeFill').style.width = '100%';
    applyFilters();
}
$('resetBtn').onclick   = resetFilters;
$('emptyReset').onclick = resetFilters;

/* ── Filter Listeners ── */
$('searchInput').addEventListener('input', applyFilters);
$('categorySelect').addEventListener('change', applyFilters);
$('priceRange').addEventListener('input', applyFilters);
$('sortSelect').addEventListener('change', applyFilters);

/* ── Keyboard Shortcuts ── */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeCartDrawer(); closeSuccessModal(); closeOrdersModal(); }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault(); $('searchInput').focus(); $('searchInput').select();
    }
});

/* ── Inject Modal & Extra CSS ── */
const xCSS = document.createElement('style');
xCSS.textContent = `
/* ── Modal base ── */
#successModal, #ordersModal {
    position: fixed; inset: 0; z-index: 9000;
    font-family: var(--font-body);
}
.modal-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.55);
    backdrop-filter: blur(10px);
    display: flex; align-items: center; justify-content: center;
    padding: 20px;
    animation: overlayIn 0.3s ease both;
}
@keyframes overlayIn { from { opacity:0; } to { opacity:1; } }

.modal-box {
    background: var(--card);
    backdrop-filter: var(--glass);
    border: 1px solid var(--border);
    border-radius: 28px;
    padding: 2.5rem 2rem;
    max-width: 440px; width: 100%;
    text-align: center;
    position: relative; overflow: hidden;
    box-shadow: 0 40px 100px rgba(0,0,0,0.5);
    transform: scale(0.85) translateY(30px); opacity: 0;
    transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease;
}
.modal-box.modal-enter { transform: scale(1) translateY(0); opacity: 1; }
.modal-box.modal-exit  { transform: scale(0.9) translateY(20px); opacity: 0; transition-duration: 0.35s; }

/* Confetti */
.modal-confetti { position:absolute; inset:0; pointer-events:none; overflow:hidden; }
.confetti-piece { position:absolute; top:-12px; }
@keyframes confettiFall {
    0%   { transform: translateY(0) rotate(0deg) translateX(0); opacity: 1; }
    100% { transform: translateY(420px) rotate(var(--rotate)) translateX(var(--drift)); opacity: 0; }
}

/* Icon */
.modal-icon-wrap {
    position:relative; width:80px; height:80px;
    margin: 0 auto 1.5rem;
    display:flex; align-items:center; justify-content:center;
}
.modal-icon {
    width:68px; height:68px; border-radius:50%;
    background: linear-gradient(135deg, var(--primary), #7c3aed);
    color: white; font-size: 1.9rem; font-weight:800;
    display:flex; align-items:center; justify-content:center;
    box-shadow: 0 8px 32px var(--primary-glow);
    position: relative; z-index:1;
    animation: iconPop 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.2s both;
}
@keyframes iconPop { from { transform:scale(0) rotate(-30deg); } to { transform:scale(1) rotate(0deg); } }
.modal-ring {
    position:absolute; border-radius:50%; border:2px solid var(--primary);
    opacity:0; animation: ringPulse 2s ease-out 0.6s infinite;
}
.modal-ring-1 { width:68px; height:68px; }
.modal-ring-2 { width:68px; height:68px; animation-delay:1s; }
@keyframes ringPulse { 0%{transform:scale(1);opacity:0.5;} 100%{transform:scale(2.4);opacity:0;} }

/* Content */
.modal-title {
    font-family: var(--font-display);
    font-size:1.7rem; font-weight:800; letter-spacing:-0.5px; margin-bottom:0.4rem;
}
.modal-subtitle { color:var(--text-muted); font-size:0.9rem; margin-bottom:1.4rem; }
.modal-order-id {
    display:inline-block;
    font-size:0.7rem; font-weight:700; letter-spacing:1.5px; text-transform:uppercase;
    color:var(--primary); background:rgba(99,102,241,0.1);
    border:1px solid var(--border-strong);
    padding:5px 14px; border-radius:20px; margin-bottom:1.4rem;
}
.modal-meta {
    display:flex; justify-content:center; align-items:center; gap:1.5rem;
    background:rgba(0,0,0,0.04); border-radius:16px; padding:1.2rem;
    margin-bottom:1.2rem; border:1px solid var(--border);
}
[data-theme="dark"] .modal-meta { background:rgba(255,255,255,0.04); }
.modal-meta-item { text-align:center; }
.modal-meta-label { display:block; font-size:0.63rem; text-transform:uppercase; letter-spacing:1px; color:var(--text-muted); margin-bottom:4px; }
.modal-meta-val { font-family:var(--font-display); font-size:1.05rem; font-weight:800; }
.modal-meta-divider { width:1px; height:36px; background:var(--border); }

.modal-delivery {
    display:flex; align-items:center; justify-content:center; gap:8px;
    font-size:0.82rem; color:var(--text-muted); margin-bottom:1.8rem;
}
.modal-delivery strong { color:var(--success); }

.modal-actions { display:flex; gap:10px; }
.modal-btn {
    flex:1; padding:13px; border-radius:14px;
    font-family:var(--font-body); font-weight:700; font-size:0.88rem;
    cursor:pointer; border:none;
    transition:all 0.25s cubic-bezier(0.34,1.56,0.64,1);
}
.modal-btn:hover  { transform:translateY(-2px); }
.modal-btn:active { transform:scale(0.97); }
.modal-btn-outline {
    background:transparent; border:1.5px solid var(--border); color:var(--text);
}
.modal-btn-outline:hover { border-color:var(--primary); color:var(--primary); background:rgba(99,102,241,0.07); }
.modal-btn-primary {
    background:linear-gradient(135deg,var(--primary),#7c3aed);
    color:white; box-shadow:0 6px 20px var(--primary-glow);
}
.modal-btn-primary:hover { box-shadow:0 12px 32px var(--primary-glow); }

/* Orders Modal */
.orders-modal-box {
    text-align:left; padding:1.75rem;
    max-height:85vh; overflow-y:auto;
}
.modal-header-row { display:flex; justify-content:space-between; align-items:center; margin-bottom:1.2rem; }
.orders-list { display:flex; flex-direction:column; gap:12px; }
.order-row {
    background:rgba(0,0,0,0.03); border:1px solid var(--border);
    border-radius:14px; padding:14px 16px;
    transition:border-color 0.2s, background 0.2s;
}
[data-theme="dark"] .order-row { background:rgba(255,255,255,0.03); }
.order-row:hover { border-color:var(--primary); background:rgba(99,102,241,0.04); }
.order-row-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; }
.order-row-id { font-family:var(--font-display); font-weight:800; font-size:0.85rem; color:var(--primary); }
.order-row-date { font-size:0.7rem; color:var(--text-muted); }
.order-row-items { font-size:0.78rem; color:var(--text-muted); margin-bottom:10px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.order-row-footer { display:flex; justify-content:space-between; align-items:center; }
.order-row-count { font-size:0.72rem; color:var(--text-faint); }
.order-row-total { font-family:var(--font-display); font-weight:800; font-size:1rem; }
.orders-empty { text-align:center; padding:2.5rem; color:var(--text-muted); font-size:0.9rem; }

/* Toast types */
.toast[data-type="order"]   { background:linear-gradient(135deg,var(--primary),#7c3aed); color:white; }
.toast[data-type="success"] { background:var(--text); }
.toast[data-type="info"]    { background:var(--text); }
.toast-icon { font-style:normal; font-weight:700; }

/* In-cart state */
.add-btn.in-cart {
    background:linear-gradient(135deg,var(--success),#059669) !important;
    box-shadow:0 6px 20px rgba(16,185,129,0.35) !important;
}

/* Mobile */
@media (max-width:480px) {
    .modal-box  { padding:2rem 1.2rem; border-radius:22px; }
    .modal-actions { flex-direction:column; }
    .modal-meta { gap:1rem; padding:1rem; }
    .modal-meta-val { font-size:0.95rem; }
    .orders-modal-box { padding:1.4rem; max-height:92vh; }
}
`;
document.head.appendChild(xCSS);

/* ── Init ── */
$('rangeFill').style.width = '100%';
updateCartUI();
applyFilters();