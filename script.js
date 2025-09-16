// DOM elements cache
const elements = {
    hamburger: null,
    navMenu: null,
    header: null,
    searchForm: null,
    searchInput: null,
    newsletterForm: null,
    newsletterInput: null,
    backToTopButton: null
};

// Initialize DOM elements
function initElements() {
    elements.hamburger = document.querySelector('.hamburger');
    elements.navMenu = document.querySelector('.nav-menu');
    elements.header = document.querySelector('.header');
    elements.searchForm = document.querySelector('.search-form');
    elements.searchInput = document.querySelector('.search-input');
    elements.newsletterForm = document.querySelector('.newsletter-form');
    elements.newsletterInput = document.querySelector('.newsletter-input');
}

// Mobile Navigation Toggle
function initMobileNav() {
    if (!elements.hamburger || !elements.navMenu) return;

    elements.hamburger.addEventListener('click', () => {
        elements.hamburger.classList.toggle('active');
        elements.navMenu.classList.toggle('active');
    }, { passive: true });
}

// Close mobile menu when clicking on a link
function initNavLinks() {
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        if (elements.hamburger && elements.navMenu) {
            elements.hamburger.classList.remove('active');
            elements.navMenu.classList.remove('active');
        }
    }, { passive: true }));
}

// Search functionality
function initSearch() {
    if (!elements.searchForm || !elements.searchInput) return;

    elements.searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = elements.searchInput.value.trim();
        if (searchTerm) {
            window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
        }
    });
}

// Initialize category card click handlers
function initCategoryCards() {
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Check if there's a specific article to link to
            const article = card.dataset.article;
            if (article) {
                window.location.href = article;
            } else {
                // Fallback to category page
                const category = card.dataset.category;
                window.location.href = `category.html?cat=${category}`;
            }
        }, { passive: false });
    });
}

// Newsletter subscription
function initNewsletter() {
    if (!elements.newsletterForm || !elements.newsletterInput) return;

    elements.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = elements.newsletterInput.value.trim();
        if (email && isValidEmail(email)) {
            showNotification('Thank you for subscribing!', 'success');
            elements.newsletterInput.value = '';
        } else {
            showNotification('Please enter a valid email address.', 'error');
        }
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4a7c59' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Throttle function for performance
function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
        const currentTime = Date.now();

        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// Header scroll effect
const handleHeaderScroll = throttle(() => {
    if (!elements.header) return;

    if (window.scrollY > 100) {
        elements.header.style.background = 'rgba(255, 255, 255, 0.95)';
        elements.header.style.backdropFilter = 'blur(10px)';
    } else {
        elements.header.style.background = '#fff';
        elements.header.style.backdropFilter = 'none';
    }
}, 16);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.onload = () => {
                    img.classList.add('loaded');
                    img.classList.remove('lazy');
                };
                img.onerror = () => {
                    img.style.background = 'linear-gradient(135deg, #4a7c59, #2d5a27)';
                    img.classList.remove('lazy');
                };
            }
            imageObserver.unobserve(img);
        }
    });
}, {
    rootMargin: '50px 0px',
    threshold: 0.1
});

// Initialize lazy loading
function initLazyLoading() {
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Search suggestions (mock data)
const searchSuggestions = [
    'sustainable fashion',
    'skincare tips',
    'home decor',
    'travel destinations',
    'investment advice',
    'healthy recipes',
    'minimalist lifestyle',
    'eco-friendly products'
];

// Debounce function for search input
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Search suggestions with debouncing
function initSearchSuggestions() {
    if (!elements.searchInput) return;

    const debouncedSearch = debounce((value) => {
        if (value.length > 2) {
            showSearchSuggestions(value);
        } else {
            hideSearchSuggestions();
        }
    }, 300);

    elements.searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        debouncedSearch(value);
    }, { passive: true });
}

function showSearchSuggestions(query) {
    const suggestions = searchSuggestions.filter(item =>
        item.toLowerCase().includes(query)
    );

    if (suggestions.length > 0) {
        let suggestionsContainer = document.querySelector('.search-suggestions');
        if (!suggestionsContainer) {
            suggestionsContainer = document.createElement('div');
            suggestionsContainer.className = 'search-suggestions';
            suggestionsContainer.style.cssText = `
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 1000;
                max-height: 200px;
                overflow-y: auto;
            `;
            elements.searchForm.appendChild(suggestionsContainer);
        }

        const fragment = document.createDocumentFragment();
        suggestions.forEach(suggestion => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.style.cssText = 'padding: 0.75rem 1rem; cursor: pointer; border-bottom: 1px solid #f0f0f0;';
            item.textContent = suggestion;

            item.addEventListener('click', () => {
                elements.searchInput.value = suggestion;
                hideSearchSuggestions();
                elements.searchForm.dispatchEvent(new Event('submit'));
            }, { passive: true });

            fragment.appendChild(item);
        });

        suggestionsContainer.innerHTML = '';
        suggestionsContainer.appendChild(fragment);
    }
}

function hideSearchSuggestions() {
    const suggestionsContainer = document.querySelector('.search-suggestions');
    if (suggestionsContainer) {
        suggestionsContainer.remove();
    }
}

// Close suggestions when clicking outside
function initClickOutside() {
    document.addEventListener('click', (e) => {
        if (elements.searchForm && !elements.searchForm.contains(e.target)) {
            hideSearchSuggestions();
        }
    }, { passive: true });
}

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Back to top button
function initBackToTop() {
    elements.backToTopButton = document.createElement('button');
    elements.backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    elements.backToTopButton.className = 'back-to-top';
    elements.backToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #4a7c59;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(74, 124, 89, 0.3);
    `;

    document.body.appendChild(elements.backToTopButton);

    elements.backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, { passive: true });
}

// Handle back to top visibility
const handleBackToTop = throttle(() => {
    if (!elements.backToTopButton) return;

    if (window.scrollY > 300) {
        elements.backToTopButton.style.opacity = '1';
        elements.backToTopButton.style.visibility = 'visible';
    } else {
        elements.backToTopButton.style.opacity = '0';
        elements.backToTopButton.style.visibility = 'hidden';
    }
}, 16);

// Combined scroll handler
const handleScroll = throttle(() => {
    handleHeaderScroll();
    handleBackToTop();
}, 16);

// Initialize post card click handlers
function initPostCards() {
    document.querySelectorAll('.post-card[data-href]').forEach(card => {
        card.addEventListener('click', (e) => {
            // Check if click is on a link inside the card
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return; // Let the link handle the navigation
            }

            e.preventDefault();
            const href = card.dataset.href;
            if (href) {
                window.location.href = href;
            }
        }, { passive: false });

        // Add cursor pointer style
        card.style.cursor = 'pointer';
    });
}

// Initialize all functionality
function initApp() {
    initElements();
    initMobileNav();
    initNavLinks();
    initSearch();
    initNewsletter();
    initSearchSuggestions();
    initClickOutside();
    initBackToTop();
    initLazyLoading();

    // Only initialize homepage specific elements if they exist
    if (document.querySelector('.category-card')) {
        initCategoryCards();
    }

    if (document.querySelector('.post-card[data-href]')) {
        initPostCards();
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initialize intersection observer for animations
    const animatedElements = document.querySelectorAll('.category-card, .post-card, .section-title');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
