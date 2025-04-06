document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Category filtering
    const categories = document.querySelectorAll('.category');
    const spotCards = document.querySelectorAll('.spot-card');
    
    categories.forEach(category => {
        category.addEventListener('click', () => {
            // Update active class
            categories.forEach(cat => cat.classList.remove('active'));
            category.classList.add('active');
            
            const filter = category.getAttribute('data-filter');
            
            // Show/hide cards based on filter
            spotCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    const cardCategories = card.getAttribute('data-categories').split(' ');
                    
                    if (cardCategories.includes(filter)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });

    // Search functionality
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        
        spotCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });

    // Animation on scroll
    const revealElements = document.querySelectorAll('.spots-section');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    
    // Initial check for items in view
    revealOnScroll();
    
    // Hero section parallax effect
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos < window.innerHeight) {
            hero.style.backgroundPositionY = `${scrollPos * 0.5}px`;
        }
    });

    // Fade in initial load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 300);
});
