// Adobe Portfolio Exact JavaScript Copy
document.addEventListener('DOMContentLoaded', function() {
    // Scroll to top functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    // Smooth scroll animation with requestAnimationFrame
    let ticking = false;
    const masthead = document.querySelector('.masthead');
    const navbar = document.querySelector('.site-header');
    
    function updateScrollEffects() {
        const scrollY = window.pageYOffset;
        
        // Update scroll to top button
        if (scrollToTopBtn && scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else if (scrollToTopBtn) {
            scrollToTopBtn.classList.remove('show');
        }
        
        // Update navbar background
        if (navbar && scrollY > 50) {
            navbar.classList.add('on-scroll');
        } else if (navbar) {
            navbar.classList.remove('on-scroll');
        }

        // Adobe Portfolio style masthead fade out (stays in place) - only if masthead exists
        if (masthead) {
            const fadeStart = 0;
            const fadeEnd = window.innerHeight * 0.6; // Fade out over 60% of viewport height
            
            // Calculate opacity based on scroll position
            let opacity = 1;
            if (scrollY > fadeStart) {
                opacity = Math.max(0, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
            }
            
            // Apply only opacity (no movement)
            masthead.style.opacity = opacity;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);

    // Force footer links to work
    // Add click handlers to all footer links
    const footerLinks = document.querySelectorAll('.links-list a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href) {
                window.location.href = href;
            }
        });
    });
    
    // Add click handlers to contact links
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href) {
                if (href.startsWith('tel:') || href.startsWith('mailto:')) {
                    // Let the browser handle tel: and mailto: links naturally
                    return true;
                } else {
                    e.preventDefault();
                    window.location.href = href;
                }
            }
        });
    });
    
    // Scroll to top when button is clicked
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Project cover links
    const projectLinks = document.querySelectorAll('a.project-cover');
    
    projectLinks.forEach(function(link, index) {
        link.addEventListener('click', function(e) {
            // Don't prevent default - let the link work naturally
        });
    });

    // Masthead arrow click handler
    const mastheadArrow = document.querySelector('.masthead-arrow-container');
    if (mastheadArrow) {
        mastheadArrow.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.page-title');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Let default behavior handle navigation
        });
    });

    // Fade in animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Mobile responsive adjustments
    function handleResize() {
        const masthead = document.querySelector('.masthead');
        const mastheadPlaceholder = document.querySelector('.masthead-placeholder');
        
        if (masthead && mastheadPlaceholder) {
            if (window.innerWidth <= 540) {
                // Mobile adjustments
                masthead.style.height = '80vh';
                mastheadPlaceholder.style.height = '80vh';
            } else if (window.innerWidth <= 932) {
                // Tablet adjustments
                masthead.style.height = '80vh';
                mastheadPlaceholder.style.height = '80vh';
            } else {
                // Desktop
                masthead.style.height = '85vh';
                mastheadPlaceholder.style.height = '85vh';
            }
            
            // Reset opacity on resize to prevent issues
            const currentScrollY = window.pageYOffset;
            const fadeStart = 0;
            const fadeEnd = window.innerHeight * 0.6;
            
            let opacity = 1;
            if (currentScrollY > fadeStart) {
                opacity = Math.max(0, 1 - (currentScrollY - fadeStart) / (fadeEnd - fadeStart));
            }
            
            masthead.style.opacity = opacity;
        }
    }

    // Handle resize events
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    // Intersection Observer for project covers animation
    const projectCovers = document.querySelectorAll('.project-cover');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe project covers
    projectCovers.forEach(function(cover) {
        cover.style.opacity = '0';
        cover.style.transform = 'translateY(30px)';
        cover.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(cover);
    });

    // Hamburger Menu Functionality
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const desktopNav = document.getElementById('desktopNav');
    
    if (hamburgerMenu && desktopNav) {
        hamburgerMenu.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('active');
            desktopNav.classList.toggle('mobile-active');
        });
        
        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.page-title');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                desktopNav.classList.remove('mobile-active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburgerMenu.contains(e.target) && !desktopNav.contains(e.target)) {
                hamburgerMenu.classList.remove('active');
                desktopNav.classList.remove('mobile-active');
            }
        });
        
        // Close menu on window resize to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                hamburgerMenu.classList.remove('active');
                desktopNav.classList.remove('mobile-active');
            }
        });
    }
});