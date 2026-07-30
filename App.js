/* ============================================
   SUTRIKA – Threads of Tradition, Powered by Innovation
   Application JavaScript
   ============================================ */

// ==================== DATA ====================

const PRODUCTS = [
  {
    id: 1,
    name: "Sambalpuri Ikat Silk Saree",
    artisan: "Padmini Meher",
    origin: "Sambalpur, Odisha",
    price: 8500,
    originalPrice: 12000,
    image: "https://images.pexels.com/photos/10317106/pexels-photo-10317106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "sarees",
    badges: ["handmade", "bestseller"],
    rating: 4.9,
    reviews: 128,
    description: "Authentic Sambalpuri Ikat silk saree with traditional bandha design, handwoven by master artisans."
  },
  {
    id: 2,
    name: "Pipili Appliqué Wall Hanging",
    artisan: "Ranjan Das",
    origin: "Pipili, Odisha",
    price: 2200,
    originalPrice: 3000,
    image: "https://images.pexels.com/photos/29016023/pexels-photo-29016023.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "handicrafts",
    badges: ["handmade", "new"],
    rating: 4.7,
    reviews: 64,
    description: "Vibrant Pipili appliqué wall hanging featuring traditional Odisha motifs and mirror work."
  },
  {
    id: 3,
    name: "Dhokra Brass Dancing Figure",
    artisan: "Bijay Sahu",
    origin: "Dhenkanal, Odisha",
    price: 3800,
    originalPrice: 4500,
    image: "https://images.pexels.com/photos/33489909/pexels-photo-33489909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "handicrafts",
    badges: ["handmade", "ai"],
    rating: 4.8,
    reviews: 89,
    description: "Lost-wax casting Dhokra brass figurine depicting traditional tribal dance forms of Odisha."
  },
  {
    id: 4,
    name: "Kotpad Organic Cotton Dupatta",
    artisan: "Laxmi Muduli",
    origin: "Koraput, Odisha",
    price: 1800,
    originalPrice: 2500,
    image: "https://images.pexels.com/photos/22820077/pexels-photo-22820077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "textiles",
    badges: ["handmade"],
    rating: 4.6,
    reviews: 52,
    description: "GI-tagged Kotpad handloom dupatta made with natural dyes extracted from aal tree roots."
  },
  {
    id: 5,
    name: "Silver Filigree Jewelry Set",
    artisan: "Sudhir Behera",
    origin: "Cuttack, Odisha",
    price: 6500,
    originalPrice: 8000,
    image: "https://images.pexels.com/photos/34056612/pexels-photo-34056612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "jewelry",
    badges: ["bestseller", "handmade"],
    rating: 4.9,
    reviews: 156,
    description: "Exquisite Cuttack silver filigree jewelry set, a GI-tagged art form known as Tarakasi."
  },
  {
    id: 6,
    name: "Pattachitra Painting – Radha Krishna",
    artisan: "Ananta Maharana",
    origin: "Raghurajpur, Odisha",
    price: 4200,
    originalPrice: 5500,
    image: "https://images.pexels.com/photos/36817155/pexels-photo-36817155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "paintings",
    badges: ["handmade", "new"],
    rating: 4.8,
    reviews: 97,
    description: "Traditional Pattachitra painting on treated cloth depicting Radha Krishna, using natural colors."
  },
  {
    id: 7,
    name: "Bomkai Silk Saree – Temple Border",
    artisan: "Sanjukta Patra",
    origin: "Ganjam, Odisha",
    price: 7200,
    originalPrice: 9500,
    image: "https://images.pexels.com/photos/8750030/pexels-photo-8750030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "sarees",
    badges: ["handmade", "ai"],
    rating: 4.7,
    reviews: 73,
    description: "Handwoven Bomkai silk saree with intricate temple border and traditional fish motifs."
  },
  {
    id: 8,
    name: "Terracotta Horse Sculpture",
    artisan: "Manoranjan Pradhan",
    origin: "Keonjhar, Odisha",
    price: 1500,
    originalPrice: 2000,
    image: "https://images.pexels.com/photos/6060946/pexels-photo-6060946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "handicrafts",
    badges: ["handmade"],
    rating: 4.5,
    reviews: 41,
    description: "Hand-sculpted terracotta horse in traditional tribal style from the artisan villages of Keonjhar."
  }
];

const CATEGORIES = [
  {
    name: "Handloom Sarees",
    count: 245,
    icon: "🧣",
    image: "https://images.pexels.com/photos/10317106/pexels-photo-10317106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    filter: "sarees"
  },
  {
    name: "Handicrafts",
    count: 189,
    icon: "🏺",
    image: "https://images.pexels.com/photos/33489909/pexels-photo-33489909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    filter: "handicrafts"
  },
  {
    name: "Textiles",
    count: 167,
    icon: "🧶",
    image: "https://images.pexels.com/photos/22820077/pexels-photo-22820077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    filter: "textiles"
  },
  {
    name: "Silver Jewelry",
    count: 134,
    icon: "💎",
    image: "https://images.pexels.com/photos/34056612/pexels-photo-34056612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    filter: "jewelry"
  },
  {
    name: "Paintings",
    count: 98,
    icon: "🎨",
    image: "https://images.pexels.com/photos/36817155/pexels-photo-36817155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    filter: "paintings"
  },
  {
    name: "Home Decor",
    count: 156,
    icon: "🏠",
    image: "https://images.pexels.com/photos/29016023/pexels-photo-29016023.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    filter: "all"
  }
];

const ARTISANS = [
  {
    name: "Padmini Meher",
    craft: "Sambalpuri Weaving",
    location: "Sambalpur, Odisha",
    products: 34,
    rating: 4.9,
    years: 25,
    avatar: "https://images.pexels.com/photos/28943474/pexels-photo-28943474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    cover: "https://images.pexels.com/photos/24738158/pexels-photo-24738158.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    name: "Bijay Sahu",
    craft: "Dhokra Metal Casting",
    location: "Dhenkanal, Odisha",
    products: 28,
    rating: 4.8,
    years: 30,
    avatar: "https://images.pexels.com/photos/30969805/pexels-photo-30969805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    cover: "https://images.pexels.com/photos/23494589/pexels-photo-23494589.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    name: "Ananta Maharana",
    craft: "Pattachitra Painting",
    location: "Raghurajpur, Odisha",
    products: 42,
    rating: 4.9,
    years: 35,
    avatar: "https://images.pexels.com/photos/13094855/pexels-photo-13094855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    cover: "https://images.pexels.com/photos/28382914/pexels-photo-28382914.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  }
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    title: "Fashion Enthusiast, Mumbai",
    text: "The Sambalpuri saree I purchased is absolutely stunning. The AI recommendations helped me find exactly what I was looking for. The quality and authenticity are remarkable!",
    rating: 5,
    initial: "P"
  },
  {
    name: "Rajesh Kumar",
    title: "Art Collector, Delhi",
    text: "Sutrika has made it incredibly easy to discover authentic Odisha handicrafts. The Pattachitra painting I bought is a masterpiece. Direct connection with artisans is amazing!",
    rating: 5,
    initial: "R"
  },
  {
    name: "Sarah Mitchell",
    title: "Interior Designer, London",
    text: "I discovered Sutrika through the AI-powered search and was blown away by the craftsmanship. The Dhokra brass pieces are now centerpieces in my client's home. Truly exceptional!",
    rating: 5,
    initial: "S"
  }
];

// ==================== STATE ====================

let cart = [];
let wishlist = new Set();
let activeFilter = 'all';
let currentSearchQuery = '';

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  renderCategories();
  renderProducts(PRODUCTS);
  renderArtisans();
  renderTestimonials();
  initNavigation();
  initSearch();
  initCart();
  initScrollAnimations();
  initBackToTop();
  initNewsletter();
  initFilterTabs();
  initAIDemo();
  animateCounters();
});

// ==================== LOADER ====================

function initLoader() {
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 500);
    }, 1200);
  });
  // Fallback
  setTimeout(() => {
    loader.classList.add('hidden');
    setTimeout(() => {
      if (loader.parentNode) loader.remove();
    }, 500);
  }, 3000);
}

// ==================== NAVIGATION ====================

function initNavigation() {
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  // Scroll handler
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('mobile-active');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      navLinks.classList.remove('mobile-active');
    });
  });

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = navLinks.querySelector(`a[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          navLinks.querySelectorAll('a').forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });
}

// ==================== SEARCH ====================

function initSearch() {
  const searchBtn = document.getElementById('navSearchBtn');
  const modal = document.getElementById('searchModal');
  const backdrop = modal.querySelector('.search-modal-backdrop');
  const input = document.getElementById('searchModalInput');
  const resultsContainer = document.getElementById('searchResults');
  const aiSearchInput = document.getElementById('aiSearchInput');
  const aiSearchBtn = document.getElementById('aiSearchBtn');

  searchBtn.addEventListener('click', () => {
    modal.classList.add('active');
    setTimeout(() => input.focus(), 300);
  });

  backdrop.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('active');
  });

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    performSearch(query, resultsContainer);
  });

  // AI Search bar
  aiSearchBtn.addEventListener('click', () => {
    const query = aiSearchInput.value.trim();
    if (query) {
      performAISearch(query);
    }
  });

  aiSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const query = aiSearchInput.value.trim();
      if (query) performAISearch(query);
    }
  });

  // Search tags
  document.querySelectorAll('.search-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      aiSearchInput.value = tag.textContent;
      performAISearch(tag.textContent);
    });
  });
}

function performSearch(query, container) {
  if (!query) {
    container.innerHTML = '<p style="text-align:center;color:var(--muted);padding:2rem;">Start typing to search products...</p>';
    return;
  }

  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.artisan.toLowerCase().includes(query) ||
    p.origin.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    container.innerHTML = `<p style="text-align:center;color:var(--muted);padding:2rem;">No results found for "${query}"</p>`;
    return;
  }

  container.innerHTML = results.map(p => `
    <div class="search-result-item" onclick="scrollToProducts()">
      <div class="search-result-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
      <div>
        <div class="search-result-name">${highlightText(p.name, query)}</div>
        <div class="search-result-category">${p.artisan} · ${p.origin}</div>
      </div>
      <div class="search-result-price">₹${p.price.toLocaleString()}</div>
    </div>
  `).join('');
}

function highlightText(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<strong style="color:var(--saffron)">$1</strong>');
}

function performAISearch(query) {
  const lq = query.toLowerCase();
  let filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(lq) ||
    p.artisan.toLowerCase().includes(lq) ||
    p.origin.toLowerCase().includes(lq) ||
    p.category.toLowerCase().includes(lq) ||
    p.description.toLowerCase().includes(lq)
  );

  if (filtered.length === 0) filtered = PRODUCTS;

  // Simulate AI scoring
  filtered = filtered.map(p => ({
    ...p,
    aiScore: Math.floor(Math.random() * 15) + 85
  })).sort((a, b) => b.aiScore - a.aiScore);

  renderProducts(filtered);
  showToast('🤖 AI found ' + filtered.length + ' matching products');
  
  const productsSection = document.getElementById('products');
  productsSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToProducts() {
  document.getElementById('searchModal').classList.remove('active');
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ==================== RENDER FUNCTIONS ====================

function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = CATEGORIES.map((cat, i) => `
    <div class="category-card animate-on-scroll" style="transition-delay: ${i * 0.1}s" onclick="filterByCategory('${cat.filter}')">
      <div class="category-card-bg" style="background-image: url('${cat.image}')"></div>
      <div class="category-card-overlay">
        <div class="category-icon">${cat.icon}</div>
        <h3>${cat.name}</h3>
        <p>${cat.count} Products</p>
      </div>
    </div>
  `).join('');
}

function renderProducts(products) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = products.map((p, i) => `
    <div class="product-card animate-on-scroll" style="transition-delay: ${i * 0.08}s" data-category="${p.category}">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="product-badges">
          ${p.badges.map(b => `<span class="product-badge badge-${b}">${getBadgeLabel(b)}</span>`).join('')}
        </div>
        <button class="product-wishlist ${wishlist.has(p.id) ? 'active' : ''}" onclick="toggleWishlist(${p.id}, this)" aria-label="Add to wishlist">
          ${wishlist.has(p.id) ? '❤️' : '🤍'}
        </button>
        <button class="product-quick-view" onclick="showToast('👁️ Quick view: ${p.name.replace(/'/g, "\\'")}')">Quick View</button>
      </div>
      <div class="product-info">
        <div class="product-artisan">✨ ${p.artisan}</div>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-origin">📍 ${p.origin}</p>
        <div class="product-footer">
          <div>
            <div class="product-price">
              ₹${p.price.toLocaleString()}
              ${p.originalPrice ? `<span class="original-price">₹${p.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <div class="product-rating">
              ${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5 - Math.floor(p.rating))}
              <span>(${p.reviews})</span>
            </div>
          </div>
          <button class="add-to-cart-btn" onclick="addToCart(${p.id})" aria-label="Add to cart">🛒</button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-init scroll animations for new products
  initScrollAnimations();
}

function getBadgeLabel(badge) {
  const labels = {
    handmade: '✋ Handmade',
    bestseller: '🔥 Bestseller',
    ai: '🤖 AI Pick',
    new: '✨ New'
  };
  return labels[badge] || badge;
}

function renderArtisans() {
  const grid = document.getElementById('artisansGrid');
  grid.innerHTML = ARTISANS.map((a, i) => `
    <div class="artisan-card animate-on-scroll" style="transition-delay: ${i * 0.15}s">
      <div class="artisan-cover">
        <img src="${a.cover}" alt="${a.name}'s workshop" loading="lazy">
        <div class="artisan-cover-overlay"></div>
      </div>
      <div class="artisan-avatar">
        <img src="${a.avatar}" alt="${a.name}" loading="lazy">
      </div>
      <div class="artisan-info">
        <h3 class="artisan-name">${a.name}</h3>
        <div class="artisan-craft">${a.craft}</div>
        <div class="artisan-location">📍 ${a.location}</div>
        <div class="artisan-stats">
          <div class="artisan-stat">
            <div class="artisan-stat-value">${a.products}</div>
            <div class="artisan-stat-label">Products</div>
          </div>
          <div class="artisan-stat">
            <div class="artisan-stat-value">⭐ ${a.rating}</div>
            <div class="artisan-stat-label">Rating</div>
          </div>
          <div class="artisan-stat">
            <div class="artisan-stat-value">${a.years}+</div>
            <div class="artisan-stat-label">Years</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  grid.innerHTML = TESTIMONIALS.map((t, i) => `
    <div class="testimonial-card animate-on-scroll" style="transition-delay: ${i * 0.15}s">
      <div class="testimonial-quote">"</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="testimonial-author-img">${t.initial}</div>
        <div>
          <div class="testimonial-author-name">${t.name}</div>
          <div class="testimonial-author-title">${t.title}</div>
          <div class="testimonial-rating">${'★'.repeat(t.rating)}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ==================== FILTER TABS ====================

function initFilterTabs() {
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      activeFilter = filter;

      if (filter === 'all') {
        renderProducts(PRODUCTS);
      } else {
        renderProducts(PRODUCTS.filter(p => p.category === filter));
      }
    });
  });
}

function filterByCategory(cat) {
  activeFilter = cat;
  document.querySelectorAll('.filter-tab').forEach(t => {
    t.classList.remove('active');
    if (t.dataset.filter === cat) t.classList.add('active');
  });

  if (cat === 'all') {
    renderProducts(PRODUCTS);
  } else {
    renderProducts(PRODUCTS.filter(p => p.category === cat));
  }

  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ==================== CART ====================

function initCart() {
  const cartBtn = document.getElementById('navCartBtn');
  const sidebar = document.getElementById('cartSidebar');
  const backdrop = document.getElementById('cartBackdrop');
  const closeBtn = document.getElementById('cartClose');

  cartBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  const closeCart = () => {
    sidebar.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeCart);
  backdrop.addEventListener('click', closeCart);

  renderCart();
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
  showToast(`🛒 Added "${product.name}" to cart`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const countEl = document.getElementById('cartCount');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  countEl.textContent = totalItems;
  countEl.style.display = totalItems > 0 ? 'flex' : 'none';

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Your cart is empty</p>
        <p style="font-size:0.85rem;margin-top:0.5rem;">Discover authentic Odisha crafts!</p>
      </div>`;
    totalEl.textContent = '₹0';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
        <div class="cart-item-qty">
          <button onclick="updateCartQty(${item.id}, -1)">−</button>
          <span>${item.quantity}</span>
          <button onclick="updateCartQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalEl.textContent = `₹${total.toLocaleString()}`;
}

// ==================== WISHLIST ====================

function toggleWishlist(productId, btn) {
  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    btn.classList.remove('active');
    btn.innerHTML = '🤍';
    showToast('💔 Removed from wishlist');
  } else {
    wishlist.add(productId);
    btn.classList.add('active');
    btn.innerHTML = '❤️';
    showToast('❤️ Added to wishlist');
  }
}

// ==================== SCROLL ANIMATIONS ====================

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// ==================== BACK TO TOP ====================

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==================== NEWSLETTER ====================

function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    if (input.value.trim()) {
      showToast('📧 Thank you for subscribing! Welcome to Sutrika.');
      input.value = '';
    }
  });
}

// ==================== AI DEMO ====================

function initAIDemo() {
  const recItems = document.querySelectorAll('.ai-rec-item');
  let index = 0;

  setInterval(() => {
    recItems.forEach(item => item.style.opacity = '0.5');
    if (recItems[index]) {
      recItems[index].style.opacity = '1';
      recItems[index].style.background = 'rgba(255,255,255,0.1)';
    }
    index = (index + 1) % recItems.length;
  }, 2500);
}

// ==================== COUNTER ANIMATION ====================

function animateCounters() {
  const counters = document.querySelectorAll('.impact-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
        }, 25);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ==================== TOAST ====================

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerHTML = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ==================== CHECKOUT ====================

function checkout() {
  if (cart.length === 0) {
    showToast('🛒 Your cart is empty!');
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  showToast(`✅ Order placed! Total: ₹${total.toLocaleString()}. Thank you!`);
  cart = [];
  renderCart();
  document.getElementById('cartSidebar').classList.remove('active');
  document.getElementById('cartBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}
