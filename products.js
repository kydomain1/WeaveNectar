// Products data
const productsData = [
    {
        id: 1,
        name: 'Eco-Friendly Bamboo T-Shirt',
        category: 'fashion',
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.8,
        reviewCount: 124,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
        brand: 'EcoWear',
        description: 'Sustainable bamboo fiber t-shirt perfect for everyday wear. Soft, breathable, and environmentally friendly.',
        features: ['100% Bamboo Fiber', 'Machine Washable', 'Sustainable', 'Comfortable Fit'],
        inStock: true,
        featured: true
    },
    {
        id: 2,
        name: 'Organic Skincare Set',
        category: 'beauty',
        price: 89.99,
        originalPrice: 120.00,
        rating: 4.9,
        reviewCount: 89,
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
        brand: 'PureGlow',
        description: 'Complete organic skincare routine with cleanser, toner, and moisturizer. Perfect for sensitive skin.',
        features: ['100% Organic', 'Cruelty-Free', 'Sensitive Skin Safe', 'Vegan'],
        inStock: true,
        featured: true
    },
    {
        id: 3,
        name: 'Smart Home Air Purifier',
        category: 'tech',
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.7,
        reviewCount: 156,
        image: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2ecc0?w=400&h=400&fit=crop',
        brand: 'AirTech',
        description: 'Advanced HEPA air purifier with smart controls and real-time air quality monitoring.',
        features: ['HEPA Filtration', 'Smart Controls', 'Real-time Monitoring', 'Quiet Operation'],
        inStock: true,
        featured: false
    },
    {
        id: 4,
        name: 'Minimalist Ceramic Dinnerware Set',
        category: 'home',
        price: 149.99,
        originalPrice: 199.99,
        rating: 4.6,
        reviewCount: 78,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
        brand: 'MinimalHome',
        description: 'Beautiful handcrafted ceramic dinnerware set for 4 people. Perfect for modern dining.',
        features: ['Handcrafted', 'Dishwasher Safe', 'Microwave Safe', 'Modern Design'],
        inStock: true,
        featured: true
    },
    {
        id: 5,
        name: 'Artisanal Coffee Beans',
        category: 'food',
        price: 24.99,
        originalPrice: 29.99,
        rating: 4.9,
        reviewCount: 203,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
        brand: 'BeanCraft',
        description: 'Premium single-origin coffee beans roasted to perfection. Rich flavor with notes of chocolate and caramel.',
        features: ['Single Origin', 'Fresh Roasted', 'Fair Trade', 'Rich Flavor'],
        inStock: true,
        featured: false
    },
    {
        id: 6,
        name: 'Sustainable Yoga Mat',
        category: 'fashion',
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.8,
        reviewCount: 167,
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
        brand: 'EcoYoga',
        description: 'Non-toxic, eco-friendly yoga mat made from natural rubber. Perfect grip and cushioning.',
        features: ['Natural Rubber', 'Non-Toxic', 'Excellent Grip', 'Eco-Friendly'],
        inStock: true,
        featured: true
    },
    {
        id: 7,
        name: 'LED Desk Lamp',
        category: 'tech',
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.5,
        reviewCount: 92,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        brand: 'LightTech',
        description: 'Adjustable LED desk lamp with multiple brightness levels and color temperatures.',
        features: ['Adjustable Brightness', 'Color Temperature Control', 'USB Charging', 'Modern Design'],
        inStock: true,
        featured: false
    },
    {
        id: 8,
        name: 'Organic Green Tea Collection',
        category: 'food',
        price: 34.99,
        originalPrice: 44.99,
        rating: 4.7,
        reviewCount: 145,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop',
        brand: 'TeaGarden',
        description: 'Premium organic green tea collection with 5 different varieties. Antioxidant-rich and delicious.',
        features: ['100% Organic', '5 Varieties', 'Antioxidant Rich', 'Premium Quality'],
        inStock: true,
        featured: false
    },
    {
        id: 9,
        name: 'Handwoven Throw Blanket',
        category: 'home',
        price: 119.99,
        originalPrice: 149.99,
        rating: 4.9,
        reviewCount: 134,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
        brand: 'WeaveCraft',
        description: 'Beautiful handwoven throw blanket made from premium wool. Perfect for cozy evenings.',
        features: ['Handwoven', 'Premium Wool', 'Soft & Warm', 'Unique Design'],
        inStock: true,
        featured: true
    },
    {
        id: 10,
        name: 'Natural Face Serum',
        category: 'beauty',
        price: 49.99,
        originalPrice: 69.99,
        rating: 4.8,
        reviewCount: 98,
        image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop',
        brand: 'NaturalGlow',
        description: 'Hydrating face serum with hyaluronic acid and natural extracts. Perfect for all skin types.',
        features: ['Hyaluronic Acid', 'Natural Extracts', 'All Skin Types', 'Hydrating'],
        inStock: true,
        featured: false
    },
    {
        id: 11,
        name: 'LATAM Premium Economy Flight',
        category: 'travel',
        price: 1299.99,
        originalPrice: 1599.99,
        rating: 4.9,
        reviewCount: 287,
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=400&fit=crop',
        brand: 'LATAM Airlines',
        description: 'Experience premium comfort with LATAM\'s enhanced economy service. Extra legroom, priority boarding, and gourmet dining.',
        features: ['38" Seat Pitch', 'Priority Boarding', 'Enhanced Meals', 'Extra Baggage'],
        inStock: true,
        featured: true,
        link: 'https://www.linkhaitao.com/index.php?mod=lhdeal&track=14batyrLWyfazmlwKOitYJ_aS_b_bd3YlLpIsmwA_ac3eLAfsebZmAgvy70Gdod1YblP6uPRJkUBJMnFXo3eXu0_c&new=http%3A%2F%2Fwww.latamairlines.com%2Fus%2Fen'
    },
    {
        id: 12,
        name: 'LATAM Business Class Experience',
        category: 'travel',
        price: 3499.99,
        originalPrice: 4299.99,
        rating: 5.0,
        reviewCount: 152,
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=400&fit=crop',
        brand: 'LATAM Airlines',
        description: 'Ultimate luxury travel with LATAM Business Class. Lie-flat seats, premium dining, and exclusive lounge access.',
        features: ['Lie-Flat Seats', 'Premium Dining', 'Lounge Access', 'Personal Service'],
        inStock: true,
        featured: true,
        link: 'https://www.linkhaitao.com/index.php?mod=lhdeal&track=14batyrLWyfazmlwKOitYJ_aS_b_bd3YlLpIsmwA_ac3eLAfsebZmAgvy70Gdod1YblP6uPRJkUBJMnFXo3eXu0_c&new=http%3A%2F%2Fwww.latamairlines.com%2Fus%2Fen'
    },
    {
        id: 13,
        name: 'LATAM Pass Elite Membership',
        category: 'travel',
        price: 399.99,
        originalPrice: 599.99,
        rating: 4.7,
        reviewCount: 89,
        image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=400&h=400&fit=crop',
        brand: 'LATAM Airlines',
        description: 'Exclusive membership benefits including priority check-in, bonus miles, and complimentary upgrades with LATAM Pass.',
        features: ['Priority Services', 'Bonus Miles', 'Upgrade Benefits', 'Exclusive Deals'],
        inStock: true,
        featured: false,
        link: 'https://www.linkhaitao.com/index.php?mod=lhdeal&track=14batyrLWyfazmlwKOitYJ_aS_b_bd3YlLpIsmwA_ac3eLAfsebZmAgvy70Gdod1YblP6uPRJkUBJMnFXo3eXu0_c&new=http%3A%2F%2Fwww.latamairlines.com%2Fus%2Fen'
    },
    {
        id: 14,
        name: 'South America Travel Package',
        category: 'travel',
        price: 2799.99,
        originalPrice: 3499.99,
        rating: 4.8,
        reviewCount: 234,
        image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=400&h=400&fit=crop',
        brand: 'LATAM Travel',
        description: 'Complete South America adventure package with LATAM flights, hotels, and guided tours to multiple destinations.',
        features: ['Multi-City Flight', 'Hotel Package', 'Guided Tours', 'Travel Insurance'],
        inStock: true,
        featured: true,
        link: 'https://www.linkhaitao.com/index.php?mod=lhdeal&track=14batyrLWyfazmlwKOitYJ_aS_b_bd3YlLpIsmwA_ac3eLAfsebZmAgvy70Gdod1YblP6uPRJkUBJMnFXo3eXu0_c&new=http%3A%2F%2Fwww.latamairlines.com%2Fus%2Fen'
    }
];

// Current state
let currentCategory = 'all';
let currentPriceFilter = 'all';
let currentRatingFilter = 'all';
let currentSort = 'featured';
let displayedProducts = 6;

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    loadProducts();
    initializeLoadMore();
});

// Initialize filters
function initializeFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const priceFilter = document.getElementById('price-filter');
    const ratingFilter = document.getElementById('rating-filter');
    const sortSelect = document.getElementById('sort-products');

    // Category filter tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            loadProducts();
        });
    });

    // Price filter
    priceFilter.addEventListener('change', () => {
        currentPriceFilter = priceFilter.value;
        loadProducts();
    });

    // Rating filter
    ratingFilter.addEventListener('change', () => {
        currentRatingFilter = ratingFilter.value;
        loadProducts();
    });

    // Sort filter
    sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        loadProducts();
    });
}

// Load products
function loadProducts() {
    let filteredProducts = [...productsData];

    // Apply category filter
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }

    // Apply price filter
    if (currentPriceFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => {
            const price = product.price;
            switch (currentPriceFilter) {
                case '0-50':
                    return price < 50;
                case '50-100':
                    return price >= 50 && price <= 100;
                case '100-200':
                    return price > 100 && price <= 200;
                case '200+':
                    return price > 200;
                default:
                    return true;
            }
        });
    }

    // Apply rating filter
    if (currentRatingFilter !== 'all') {
        const minRating = parseInt(currentRatingFilter);
        filteredProducts = filteredProducts.filter(product => product.rating >= minRating);
    }

    // Apply sorting
    filteredProducts.sort((a, b) => {
        switch (currentSort) {
            case 'featured':
                return (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating;
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'newest':
                return b.id - a.id;
            default:
                return 0;
        }
    });

    // Display products
    displayProducts(filteredProducts.slice(0, displayedProducts));
    
    // Update load more button
    updateLoadMoreButton(filteredProducts.length);
}

// Display products
function displayProducts(products) {
    const grid = document.getElementById('products-grid');
    
    if (products.length === 0) {
        grid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your filters to see more products.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = products.map(product => `
        <div class="product-card ${product.featured ? 'featured' : ''}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.featured ? '<div class="featured-badge">Featured</div>' : ''}
                ${!product.inStock ? '<div class="out-of-stock">Out of Stock</div>' : ''}
                <div class="product-actions">
                    <button class="action-btn" onclick="addToWishlist(${product.id})" title="Add to Wishlist">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="action-btn" onclick="quickView(${product.id})" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-content">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-text">${product.rating} (${product.reviewCount})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price}</span>
                    ${product.originalPrice > product.price ? 
                        `<span class="original-price">$${product.originalPrice}</span>` : ''
                    }
                </div>
                <div class="product-features">
                    ${product.features.slice(0, 2).map(feature => 
                        `<span class="feature-tag">${feature}</span>`
                    ).join('')}
                </div>
                <button class="btn btn-primary product-btn" 
                        onclick="viewProduct(${product.id})" 
                        ${!product.inStock ? 'disabled' : ''}>
                    ${product.inStock ? 'View Details' : 'Out of Stock'}
                </button>
            </div>
        </div>
    `).join('');
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Initialize load more functionality
function initializeLoadMore() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    loadMoreBtn.addEventListener('click', () => {
        displayedProducts += 6;
        loadProducts();
    });
}

// Update load more button
function updateLoadMoreButton(totalProducts) {
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (displayedProducts >= totalProducts) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Product actions
function addToWishlist(productId) {
    showNotification('Added to wishlist!', 'success');
    // Here you would typically add to a wishlist array or send to server
}

function quickView(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product) {
        showQuickViewModal(product);
    }
}

function viewProduct(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product && product.link) {
        window.open(product.link, '_blank', 'noopener,noreferrer');
    } else {
        window.location.href = `product-detail.html?id=${productId}`;
    }
}

// Quick view modal
function showQuickViewModal(product) {
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeQuickView()"></div>
        <div class="modal-content">
            <button class="modal-close" onclick="closeQuickView()">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="modal-info">
                    <div class="product-brand">${product.brand}</div>
                    <h2>${product.name}</h2>
                    <div class="product-rating">
                        <div class="stars">${generateStars(product.rating)}</div>
                        <span class="rating-text">${product.rating} (${product.reviewCount} reviews)</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">$${product.price}</span>
                        ${product.originalPrice > product.price ? 
                            `<span class="original-price">$${product.originalPrice}</span>` : ''
                        }
                    </div>
                    <p class="product-description">${product.description}</p>
                    <div class="product-features">
                        <h4>Features:</h4>
                        <ul>
                            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="modal-actions">
                        <button class="btn btn-primary" onclick="viewProduct(${product.id})">
                            View Full Details
                        </button>
                        <button class="btn btn-secondary" onclick="addToWishlist(${product.id})">
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    const modal = document.querySelector('.quick-view-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Add CSS for products page
const productsStyles = `
    .products-header {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        padding: 120px 0 60px;
        text-align: center;
    }
    
    .products-title {
        font-size: 3rem;
        font-weight: 700;
        color: #2d5a27;
        margin-bottom: 1rem;
    }
    
    .products-subtitle {
        font-size: 1.2rem;
        color: #666;
        max-width: 600px;
        margin: 0 auto;
    }
    
    .product-filters {
        background: #fff;
        padding: 2rem 0;
        border-bottom: 1px solid #eee;
    }
    
    .filter-tabs {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    }
    
    .filter-tab {
        padding: 0.75rem 1.5rem;
        border: 2px solid #ddd;
        background: #fff;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 500;
    }
    
    .filter-tab.active,
    .filter-tab:hover {
        background: #4a7c59;
        color: #fff;
        border-color: #4a7c59;
    }
    
    .filter-controls {
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
    }
    
    .filter-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .filter-group label {
        font-weight: 500;
        color: #333;
    }
    
    .filter-select {
        padding: 0.5rem 1rem;
        border: 1px solid #ddd;
        border-radius: 8px;
        background: #fff;
        font-size: 0.9rem;
        cursor: pointer;
    }
    
    .products-section {
        padding: 60px 0;
        background: #f8f9fa;
    }
    
    .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }
    
    .product-card {
        background: #fff;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        position: relative;
    }
    
    .product-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    .product-card.featured {
        border: 2px solid #4a7c59;
    }
    
    .product-image {
        position: relative;
        height: 250px;
        overflow: hidden;
    }
    
    .product-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
    
    .product-card:hover .product-image img {
        transform: scale(1.05);
    }
    
    .featured-badge {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background: #ff6b6b;
        color: #fff;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.7rem;
        font-weight: 600;
    }
    
    .out-of-stock {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-weight: 600;
    }
    
    .product-actions {
        position: absolute;
        top: 1rem;
        right: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .product-card:hover .product-actions {
        opacity: 1;
    }
    
    .action-btn {
        width: 40px;
        height: 40px;
        border: none;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
    
    .action-btn:hover {
        background: #4a7c59;
        color: #fff;
    }
    
    .product-content {
        padding: 1.5rem;
    }
    
    .product-brand {
        font-size: 0.9rem;
        color: #666;
        margin-bottom: 0.5rem;
    }
    
    .product-name {
        font-size: 1.2rem;
        font-weight: 600;
        color: #2d5a27;
        margin-bottom: 0.75rem;
        line-height: 1.3;
    }
    
    .product-description {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 1rem;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    
    .product-rating {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    
    .stars {
        color: #ffc107;
    }
    
    .rating-text {
        font-size: 0.9rem;
        color: #666;
    }
    
    .product-price {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    
    .current-price {
        font-size: 1.5rem;
        font-weight: 700;
        color: #2d5a27;
    }
    
    .original-price {
        font-size: 1rem;
        color: #999;
        text-decoration: line-through;
    }
    
    .product-features {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }
    
    .feature-tag {
        background: #f8f9fa;
        color: #4a7c59;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 500;
    }
    
    .product-btn {
        width: 100%;
        padding: 0.75rem;
        font-size: 0.9rem;
    }
    
    .load-more-container {
        text-align: center;
    }
    
    .no-products {
        text-align: center;
        padding: 4rem 2rem;
        color: #666;
    }
    
    .no-products i {
        font-size: 4rem;
        color: #ddd;
        margin-bottom: 1rem;
    }
    
    .no-products h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #333;
    }
    
    /* Quick View Modal */
    .quick-view-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
    
    .modal-content {
        position: relative;
        background: #fff;
        border-radius: 15px;
        max-width: 800px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
    
    .modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 40px;
        height: 40px;
        border: none;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }
    
    .modal-body {
        display: flex;
        gap: 2rem;
        padding: 2rem;
    }
    
    .modal-image {
        flex: 1;
    }
    
    .modal-image img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 10px;
    }
    
    .modal-info {
        flex: 1;
    }
    
    .modal-info h2 {
        font-size: 1.8rem;
        font-weight: 700;
        color: #2d5a27;
        margin-bottom: 1rem;
    }
    
    .modal-actions {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }
    
    .modal-actions .btn {
        flex: 1;
    }
    
    @media (max-width: 768px) {
        .products-title {
            font-size: 2rem;
        }
        
        .filter-tabs {
            flex-direction: column;
            align-items: center;
        }
        
        .filter-controls {
            flex-direction: column;
            align-items: center;
        }
        
        .products-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
        
        .modal-body {
            flex-direction: column;
        }
        
        .modal-image img {
            height: 250px;
        }
    }
`;

// Add styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = productsStyles;
document.head.appendChild(styleSheet);

