// Category data
const categoryData = {
    fashion: {
        name: 'Fashion & Accessories',
        description: 'Discover the latest fashion trends, style guides, and accessory recommendations',
        icon: 'fas fa-tshirt',
        color: '#e91e63'
    },
    health: {
        name: 'Health & Beauty',
        description: 'Wellness tips, skincare routines, and beauty product reviews',
        icon: 'fas fa-heart',
        color: '#f44336'
    },
    home: {
        name: 'Home & Garden',
        description: 'Interior design inspiration, gardening tips, and home improvement guides',
        icon: 'fas fa-home',
        color: '#4caf50'
    },
    travel: {
        name: 'Travel & Accommodation',
        description: 'Travel guides, destination reviews, and accommodation recommendations',
        icon: 'fas fa-plane',
        color: '#2196f3'
    },
    finance: {
        name: 'Finance & Insurance',
        description: 'Financial advice, investment tips, and insurance guidance',
        icon: 'fas fa-chart-line',
        color: '#ff9800'
    },
    food: {
        name: 'Food & Beverage',
        description: 'Recipes, restaurant reviews, and culinary experiences',
        icon: 'fas fa-utensils',
        color: '#795548'
    }
};

// Sample articles data
const articlesData = {
    fashion: [
        {
            id: 1,
            title: 'Sustainable Fashion: The Future of Style',
            excerpt: 'Discover how eco-friendly fashion is revolutionizing the industry and learn about brands leading the change.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
            date: '2025-01-15',
            readTime: '5 min read',
            author: 'Sarah Johnson',
            category: 'Fashion',
            featured: true
        },
        {
            id: 2,
            title: 'Minimalist Wardrobe Essentials for 2025',
            excerpt: 'Build a timeless capsule wardrobe with these essential pieces that never go out of style.',
            image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop',
            date: '2025-02-08',
            readTime: '4 min read',
            author: 'Emma Wilson',
            category: 'Fashion'
        },
        {
            id: 3,
            title: 'Accessory Trends That Define This Season',
            excerpt: 'From statement jewelry to designer bags, explore the accessories that are making waves this season.',
            image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
            date: '2025-03-12',
            readTime: '6 min read',
            author: 'Michael Chen',
            category: 'Fashion'
        }
    ],
    health: [
        {
            id: 4,
            title: '10 Essential Skincare Tips for Winter',
            excerpt: 'Keep your skin healthy and glowing during the cold months with these expert-recommended tips.',
            image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800&h=600&fit=crop',
            date: '2025-01-20',
            readTime: '7 min read',
            author: 'Dr. Lisa Martinez',
            category: 'Health',
            featured: true
        },
        {
            id: 5,
            title: 'The Complete Guide to Natural Beauty',
            excerpt: 'Embrace natural beauty with these organic skincare routines and homemade beauty treatments.',
            image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop',
            date: '2025-02-15',
            readTime: '8 min read',
            author: 'Rachel Green',
            category: 'Health'
        },
        {
            id: 6,
            title: 'Fitness Trends That Actually Work',
            excerpt: 'Discover the most effective fitness trends and workout routines for achieving your health goals.',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
            date: '2025-03-20',
            readTime: '6 min read',
            author: 'James Rodriguez',
            category: 'Health'
        }
    ],
    home: [
        {
            id: 7,
            title: 'Minimalist Home Decor Ideas',
            excerpt: 'Transform your living space with these simple yet elegant minimalist design principles.',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
            date: '2025-01-25',
            readTime: '5 min read',
            author: 'David Kim',
            category: 'Home',
            featured: true
        },
        {
            id: 8,
            title: 'Indoor Gardening for Beginners',
            excerpt: 'Start your indoor garden journey with these easy-to-follow tips and plant recommendations.',
            image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
            date: '2025-02-28',
            readTime: '7 min read',
            author: 'Maria Garcia',
            category: 'Home'
        },
        {
            id: 9,
            title: 'Smart Home Technology Guide',
            excerpt: 'Make your home smarter with these innovative technology solutions and automation tips.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
            date: '2025-03-25',
            readTime: '9 min read',
            author: 'Alex Thompson',
            category: 'Home'
        }
    ],
    travel: [
        {
            id: 10,
            title: 'Hidden Gems of Southeast Asia',
            excerpt: 'Explore off-the-beaten-path destinations that offer authentic cultural experiences.',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
            date: '2025-02-05',
            readTime: '8 min read',
            author: 'Sophie Lee',
            category: 'Travel',
            featured: true
        },
        {
            id: 11,
            title: 'Budget Travel Tips for Europe',
            excerpt: 'Discover how to explore Europe on a budget without compromising on experiences.',
            image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
            date: '2025-03-10',
            readTime: '6 min read',
            author: 'Tom Anderson',
            category: 'Travel'
        },
        {
            id: 12,
            title: 'Solo Travel Safety Guide',
            excerpt: 'Essential safety tips and advice for solo travelers exploring the world.',
            image: 'https://images.unsplash.com/photo-1488646950254-3d0d0c0c4c8c?w=800&h=600&fit=crop',
            date: '2025-04-15',
            readTime: '7 min read',
            author: 'Jessica Brown',
            category: 'Travel'
        }
    ],
    finance: [
        {
            id: 13,
            title: 'Smart Investment Strategies for 2025',
            excerpt: 'Learn about emerging investment opportunities and how to build a diversified portfolio.',
            image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop',
            date: '2025-01-30',
            readTime: '10 min read',
            author: 'Robert Wilson',
            category: 'Finance',
            featured: true
        },
        {
            id: 14,
            title: 'Personal Finance for Millennials',
            excerpt: 'Essential financial advice tailored for millennials navigating today\'s economic landscape.',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
            date: '2025-02-20',
            readTime: '8 min read',
            author: 'Jennifer Davis',
            category: 'Finance'
        },
        {
            id: 15,
            title: 'Insurance Guide for Young Professionals',
            excerpt: 'Understanding different types of insurance and choosing the right coverage for your needs.',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
            date: '2025-03-30',
            readTime: '9 min read',
            author: 'Mark Johnson',
            category: 'Finance'
        }
    ],
    food: [
        {
            id: 16,
            title: 'Plant-Based Recipes for Every Season',
            excerpt: 'Delicious and nutritious plant-based meals that celebrate seasonal ingredients.',
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
            date: '2025-02-10',
            readTime: '6 min read',
            author: 'Chef Maria Santos',
            category: 'Food',
            featured: true
        },
        {
            id: 17,
            title: 'Artisanal Coffee Culture Guide',
            excerpt: 'Explore the world of specialty coffee and learn about brewing techniques and bean origins.',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
            date: '2025-03-15',
            readTime: '5 min read',
            author: 'Carlos Mendez',
            category: 'Food'
        },
        {
            id: 18,
            title: 'Sustainable Dining Practices',
            excerpt: 'Learn how to make environmentally conscious food choices and reduce your culinary footprint.',
            image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop',
            date: '2025-04-20',
            readTime: '7 min read',
            author: 'Anna Williams',
            category: 'Food'
        }
    ]
};

// Get category from URL parameter
function getCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('cat') || 'fashion';
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    const category = getCategoryFromURL();
    const categoryInfo = categoryData[category];
    
    if (!categoryInfo) {
        // Redirect to 404 or home page
        window.location.href = 'index.html';
        return;
    }
    
    // Update page content
    document.getElementById('category-name').textContent = categoryInfo.name;
    document.getElementById('category-title').textContent = categoryInfo.name;
    document.getElementById('category-description').textContent = categoryInfo.description;
    document.title = `${categoryInfo.name} - WeaveNectar`;
    
    // Load articles
    loadArticles(category);
    
    // Initialize filters
    initializeFilters();
    
    // Initialize pagination
    initializePagination();
});

// Load articles for category
function loadArticles(category, sortBy = 'newest', dateFilter = 'all', page = 1) {
    const articles = articlesData[category] || [];
    let filteredArticles = [...articles];
    
    // Apply date filter
    if (dateFilter !== 'all') {
        filteredArticles = filteredArticles.filter(article => {
            const articleDate = new Date(article.date);
            const currentYear = new Date().getFullYear();
            
            switch (dateFilter) {
                case '2025':
                    return articleDate.getFullYear() === 2025;
                case '2024':
                    return articleDate.getFullYear() === 2024;
                case 'last-month':
                    const lastMonth = new Date();
                    lastMonth.setMonth(lastMonth.getMonth() - 1);
                    return articleDate >= lastMonth;
                default:
                    return true;
            }
        });
    }
    
    // Apply sorting
    filteredArticles.sort((a, b) => {
        switch (sortBy) {
            case 'newest':
                return new Date(b.date) - new Date(a.date);
            case 'oldest':
                return new Date(a.date) - new Date(b.date);
            case 'title':
                return a.title.localeCompare(b.title);
            case 'popular':
                // Mock popularity based on featured status and date
                return (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || new Date(b.date) - new Date(a.date);
            default:
                return 0;
        }
    });
    
    // Pagination
    const articlesPerPage = 6;
    const startIndex = (page - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
    
    // Render articles
    renderArticles(paginatedArticles);
    
    // Update pagination
    updatePagination(filteredArticles.length, articlesPerPage, page);
}

// Render articles
function renderArticles(articles) {
    const grid = document.getElementById('articles-grid');
    
    if (articles.length === 0) {
        grid.innerHTML = `
            <div class="no-articles">
                <i class="fas fa-search"></i>
                <h3>No articles found</h3>
                <p>Try adjusting your filters or check back later for new content.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = articles.map(article => `
        <article class="post-card ${article.featured ? 'featured' : ''}">
            <div class="post-image">
                <img src="${article.image}" alt="${article.title}" loading="lazy">
                <div class="post-category">${article.category}</div>
                ${article.featured ? '<div class="featured-badge">Featured</div>' : ''}
            </div>
            <div class="post-content">
                <h3 class="post-title">${article.title}</h3>
                <p class="post-excerpt">${article.excerpt}</p>
                <div class="post-meta">
                    <div class="post-info">
                        <span class="post-date">${formatDate(article.date)}</span>
                        <span class="post-read-time">${article.readTime}</span>
                    </div>
                    <a href="article.html?id=${article.id}" class="read-more">Read More</a>
                </div>
                <div class="post-author">
                    <span>By ${article.author}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Initialize filters
function initializeFilters() {
    const sortSelect = document.getElementById('sort-select');
    const dateFilter = document.getElementById('date-filter');
    const viewButtons = document.querySelectorAll('.view-btn');
    
    // Sort filter
    sortSelect.addEventListener('change', () => {
        const category = getCategoryFromURL();
        loadArticles(category, sortSelect.value, dateFilter.value);
    });
    
    // Date filter
    dateFilter.addEventListener('change', () => {
        const category = getCategoryFromURL();
        loadArticles(category, sortSelect.value, dateFilter.value);
    });
    
    // View toggle
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const grid = document.getElementById('articles-grid');
            if (btn.dataset.view === 'list') {
                grid.classList.add('list-view');
            } else {
                grid.classList.remove('list-view');
            }
        });
    });
}

// Initialize pagination
function initializePagination() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.addEventListener('click', () => {
        const currentPage = parseInt(prevBtn.dataset.page) || 1;
        if (currentPage > 1) {
            const category = getCategoryFromURL();
            const sortSelect = document.getElementById('sort-select');
            const dateFilter = document.getElementById('date-filter');
            loadArticles(category, sortSelect.value, dateFilter.value, currentPage - 1);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const currentPage = parseInt(nextBtn.dataset.page) || 1;
        const totalPages = parseInt(nextBtn.dataset.totalPages) || 1;
        if (currentPage < totalPages) {
            const category = getCategoryFromURL();
            const sortSelect = document.getElementById('sort-select');
            const dateFilter = document.getElementById('date-filter');
            loadArticles(category, sortSelect.value, dateFilter.value, currentPage + 1);
        }
    });
}

// Update pagination
function updatePagination(totalArticles, articlesPerPage, currentPage) {
    const totalPages = Math.ceil(totalArticles / articlesPerPage);
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const paginationNumbers = document.getElementById('pagination-numbers');
    
    // Update button states
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    // Update button data
    prevBtn.dataset.page = currentPage;
    nextBtn.dataset.page = currentPage;
    nextBtn.dataset.totalPages = totalPages;
    
    // Generate page numbers
    let pageNumbers = '';
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers += `
            <button class="pagination-number ${i === currentPage ? 'active' : ''}" 
                    data-page="${i}">
                ${i}
            </button>
        `;
    }
    
    paginationNumbers.innerHTML = pageNumbers;
    
    // Add click handlers to page numbers
    paginationNumbers.querySelectorAll('.pagination-number').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = parseInt(btn.dataset.page);
            const category = getCategoryFromURL();
            const sortSelect = document.getElementById('sort-select');
            const dateFilter = document.getElementById('date-filter');
            loadArticles(category, sortSelect.value, dateFilter.value, page);
        });
    });
}

// Add CSS for additional styles
const additionalStyles = `
    .category-header {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        padding: 120px 0 60px;
        text-align: center;
    }
    
    .category-breadcrumb {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
        color: #666;
    }
    
    .category-breadcrumb a {
        color: #4a7c59;
        text-decoration: none;
    }
    
    .category-breadcrumb i {
        font-size: 0.8rem;
    }
    
    .category-title {
        font-size: 3rem;
        font-weight: 700;
        color: #2d5a27;
        margin-bottom: 1rem;
    }
    
    .category-description {
        font-size: 1.2rem;
        color: #666;
        max-width: 600px;
        margin: 0 auto;
    }
    
    .filter-section {
        background: #fff;
        padding: 2rem 0;
        border-bottom: 1px solid #eee;
    }
    
    .filter-controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    
    .view-toggle {
        display: flex;
        gap: 0.5rem;
    }
    
    .view-btn {
        padding: 0.5rem;
        border: 1px solid #ddd;
        background: #fff;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .view-btn.active {
        background: #4a7c59;
        color: #fff;
        border-color: #4a7c59;
    }
    
    .articles-section {
        padding: 60px 0;
        background: #f8f9fa;
    }
    
    .articles-grid.list-view {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .articles-grid.list-view .post-card {
        display: flex;
        flex-direction: row;
        max-width: none;
    }
    
    .articles-grid.list-view .post-image {
        width: 300px;
        height: 200px;
        flex-shrink: 0;
    }
    
    .articles-grid.list-view .post-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .post-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .featured-badge {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: #ff6b6b;
        color: #fff;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.7rem;
        font-weight: 600;
    }
    
    .post-info {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    
    .post-read-time {
        color: #999;
        font-size: 0.8rem;
    }
    
    .post-author {
        margin-top: 0.5rem;
        font-size: 0.9rem;
        color: #666;
    }
    
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 3rem;
    }
    
    .pagination-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        border: 1px solid #ddd;
        background: #fff;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.9rem;
    }
    
    .pagination-btn:hover:not(:disabled) {
        background: #4a7c59;
        color: #fff;
        border-color: #4a7c59;
    }
    
    .pagination-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    .pagination-numbers {
        display: flex;
        gap: 0.5rem;
    }
    
    .pagination-number {
        width: 40px;
        height: 40px;
        border: 1px solid #ddd;
        background: #fff;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
    }
    
    .pagination-number:hover {
        background: #f8f9fa;
    }
    
    .pagination-number.active {
        background: #4a7c59;
        color: #fff;
        border-color: #4a7c59;
    }
    
    .no-articles {
        text-align: center;
        padding: 4rem 2rem;
        color: #666;
    }
    
    .no-articles i {
        font-size: 4rem;
        color: #ddd;
        margin-bottom: 1rem;
    }
    
    .no-articles h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #333;
    }
    
    @media (max-width: 768px) {
        .category-title {
            font-size: 2rem;
        }
        
        .filter-controls {
            flex-direction: column;
            align-items: stretch;
        }
        
        .articles-grid.list-view .post-card {
            flex-direction: column;
        }
        
        .articles-grid.list-view .post-image {
            width: 100%;
            height: 250px;
        }
        
        .pagination {
            flex-wrap: wrap;
        }
    }
`;

// Add additional styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

