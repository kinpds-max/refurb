// Navbar Scroll Effect
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        nav.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
    } else {
        nav.classList.remove('scrolled');
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
        nav.style.borderBottom = '1px solid rgba(0, 0, 0, 0.05)';
    }
});

// Product Tabs Filtering
const tabs = document.querySelectorAll('.tabs button');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(btn => btn.classList.remove('active'));
        tab.classList.add('active');

        // Simulating filtering logic
        const category = tab.textContent;
        const products = document.querySelectorAll('.product-card');

        products.forEach(product => {
            const productCategory = product.querySelector('.category').textContent;
            if (category === '전체' || productCategory.includes(category)) {
                product.style.display = 'block';
                product.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// Intersection Observer for Scroll Animations
const observeOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-up');
            observer.unobserve(entry.target);
        }
    });
}, observeOptions);

// Select items to animate
document.querySelectorAll('.trust-item, .grade-card, .product-card, .review-card, .section-header').forEach(item => {
    item.style.opacity = '0';
    observer.observe(item);
});

// Mobile Menu Toggle (Simplified)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
mobileMenuBtn.addEventListener('click', () => {
    alert('Mobile menu functionality would be implemented here. For this demo, it is a placeholder.');
});

// Quick View Mock Action
document.querySelectorAll('.quick-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const productName = e.target.closest('.product-card').querySelector('h3').textContent;
        alert(`${productName} 상세 정보 페이지로 이동합니다.`);
    });
});

// Create and Add Back to Top Button
const backToTop = document.createElement('button');
backToTop.innerHTML = '<i data-lucide="arrow-up"></i>';
backToTop.className = 'back-to-top';
document.body.appendChild(backToTop);
lucide.createIcons();

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

