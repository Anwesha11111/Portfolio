function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Animate skill bars when contact page is visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-progress').forEach(bar => {
                bar.style.width = bar.style.width;
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contactPage = document.getElementById('contact');
    if (contactPage) {
        observer.observe(contactPage);
    }
});