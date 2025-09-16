// Contact form handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmission();
    });
});

// Handle form submission
function handleFormSubmission() {
    const formData = new FormData(document.getElementById('contact-form'));
    const formObject = {};
    
    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        formObject[key] = value;
    }
    
    // Validate form
    if (validateForm(formObject)) {
        // Simulate form submission
        showLoadingState();
        
        setTimeout(() => {
            showSuccessMessage();
            resetForm();
        }, 2000);
    }
}

// Validate form data
function validateForm(data) {
    const errors = [];
    
    // Name validation
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Please enter a valid name');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    // Subject validation
    if (!data.subject) {
        errors.push('Please select a subject');
    }
    
    // Message validation
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Please enter a message with at least 10 characters');
    }
    
    // Display errors if any
    if (errors.length > 0) {
        showFormErrors(errors);
        return false;
    }
    
    return true;
}

// Show form errors
function showFormErrors(errors) {
    // Remove existing error messages
    const existingErrors = document.querySelectorAll('.form-error');
    existingErrors.forEach(error => error.remove());
    
    // Add new error messages
    errors.forEach(error => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.textContent = error;
        errorDiv.style.cssText = `
            color: #e74c3c;
            font-size: 0.9rem;
            margin-top: 0.5rem;
            padding: 0.5rem;
            background: #ffeaea;
            border-radius: 4px;
            border-left: 3px solid #e74c3c;
        `;
        
        // Insert after the form
        const form = document.getElementById('contact-form');
        form.appendChild(errorDiv);
    });
}

// Show loading state
function showLoadingState() {
    const submitBtn = document.querySelector('#contact-form .btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.style.opacity = '0.7';
}

// Show success message
function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.innerHTML = `
        <div style="
            background: #d4edda;
            color: #155724;
            padding: 1rem;
            border-radius: 8px;
            border: 1px solid #c3e6cb;
            margin-top: 1rem;
            text-align: center;
        ">
            <i class="fas fa-check-circle" style="font-size: 1.5rem; margin-bottom: 0.5rem;"></i>
            <h3 style="margin: 0.5rem 0; color: #155724;">Message Sent Successfully!</h3>
            <p style="margin: 0; color: #155724;">Thank you for contacting us. We'll get back to you within 24 hours.</p>
        </div>
    `;
    
    const form = document.getElementById('contact-form');
    form.appendChild(successDiv);
    
    // Reset submit button
    const submitBtn = document.querySelector('#contact-form .btn');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
    submitBtn.style.opacity = '1';
    
    // Scroll to success message
    successDiv.scrollIntoView({ behavior: 'smooth' });
}

// Reset form
function resetForm() {
    document.getElementById('contact-form').reset();
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        const successDiv = document.querySelector('.form-success');
        if (successDiv) {
            successDiv.remove();
        }
    }, 5000);
}

// Add CSS for contact page
const contactStyles = `
    .contact-hero {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        padding: 120px 0 60px;
        text-align: center;
    }
    
    .hero-title {
        font-size: 3rem;
        font-weight: 700;
        color: #2d5a27;
        margin-bottom: 1rem;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
        color: #666;
        max-width: 600px;
        margin: 0 auto;
    }
    
    .contact-section {
        padding: 80px 0;
        background: #fff;
    }
    
    .contact-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: start;
    }
    
    .contact-info h2 {
        font-size: 2rem;
        font-weight: 700;
        color: #2d5a27;
        margin-bottom: 1rem;
    }
    
    .contact-info p {
        color: #666;
        margin-bottom: 2rem;
        line-height: 1.6;
    }
    
    .contact-details {
        margin-bottom: 3rem;
    }
    
    .contact-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 2rem;
    }
    
    .contact-icon {
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #4a7c59, #2d5a27);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 1.2rem;
        flex-shrink: 0;
    }
    
    .contact-text h3 {
        font-size: 1.2rem;
        font-weight: 600;
        color: #2d5a27;
        margin-bottom: 0.5rem;
    }
    
    .contact-text p {
        color: #666;
        margin: 0.25rem 0;
        font-size: 0.95rem;
    }
    
    .social-media h3 {
        font-size: 1.2rem;
        font-weight: 600;
        color: #2d5a27;
        margin-bottom: 1rem;
    }
    
    .social-links {
        display: flex;
        gap: 1rem;
    }
    
    .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: #f8f9fa;
        border-radius: 50%;
        color: #4a7c59;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    
    .social-link:hover {
        background: #4a7c59;
        color: #fff;
        transform: translateY(-2px);
    }
    
    .contact-form-container {
        background: #f8f9fa;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .contact-form h2 {
        font-size: 1.8rem;
        font-weight: 700;
        color: #2d5a27;
        margin-bottom: 2rem;
        text-align: center;
    }
    
    .form-group {
        margin-bottom: 1.5rem;
    }
    
    .form-group label {
        display: block;
        font-weight: 600;
        color: #333;
        margin-bottom: 0.5rem;
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 2px solid #e9ecef;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
        background: #fff;
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #4a7c59;
        box-shadow: 0 0 0 3px rgba(74, 124, 89, 0.1);
    }
    
    .form-group textarea {
        resize: vertical;
        min-height: 120px;
    }
    
    .checkbox-group {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
    }
    
    .checkbox-label {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        cursor: pointer;
        font-size: 0.9rem;
        color: #666;
        line-height: 1.4;
    }
    
    .checkbox-label input[type="checkbox"] {
        width: auto;
        margin: 0;
    }
    
    .checkmark {
        width: 20px;
        height: 20px;
        border: 2px solid #ddd;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        flex-shrink: 0;
    }
    
    .checkbox-label input[type="checkbox"]:checked + .checkmark {
        background: #4a7c59;
        border-color: #4a7c59;
    }
    
    .checkbox-label input[type="checkbox"]:checked + .checkmark::after {
        content: '✓';
        color: #fff;
        font-weight: bold;
    }
    
    .faq-section {
        padding: 80px 0;
        background: #f8f9fa;
    }
    
    .section-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
        color: #2d5a27;
        margin-bottom: 3rem;
    }
    
    .faq-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
    }
    
    .faq-item {
        background: #fff;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }
    
    .faq-item:hover {
        transform: translateY(-5px);
    }
    
    .faq-item h3 {
        font-size: 1.3rem;
        font-weight: 600;
        color: #2d5a27;
        margin-bottom: 1rem;
    }
    
    .faq-item p {
        color: #666;
        line-height: 1.6;
        margin: 0;
    }
    
    @media (max-width: 768px) {
        .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        
        .hero-title {
            font-size: 2rem;
        }
        
        .contact-form-container {
            padding: 1.5rem;
        }
        
        .faq-grid {
            grid-template-columns: 1fr;
        }
        
        .contact-item {
            flex-direction: column;
            text-align: center;
        }
        
        .contact-icon {
            align-self: center;
        }
    }
`;

// Add styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = contactStyles;
document.head.appendChild(styleSheet);

