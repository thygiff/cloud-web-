// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Header background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const message = this.querySelector('textarea').value;

            // Simple validation
            if (!name || !email || !phone || !message) {
                showNotification('Vui lòng điền đầy đủ thông tin!', 'error');
                return;
            }

            // Simulate form submission
            showNotification('Đang gửi tin nhắn...', 'info');
            
            setTimeout(() => {
                showNotification('Tin nhắn đã được gửi thành công! Chúng tôi sẽ liên hệ lại sớm nhất.', 'success');
                this.reset();
            }, 2000);
        });
    }

    // Button click handlers
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.textContent.includes('Đặt Tour')) {
                e.preventDefault();
                showNotification('Chức năng đặt tour sẽ được cập nhật sớm!', 'info');
            }
        });
    });

    // Destination card click handlers
    document.querySelectorAll('.destination-card .btn-outline').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const destinationName = this.closest('.destination-card').querySelector('h3').textContent;
            showNotification(`Đang tải thông tin chi tiết về ${destinationName}...`, 'info');
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .destination-card, .package-card, .about-content, .contact-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Counter animation for stats
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.textContent.replace(/\D/g, ''));
                    animateCounter(stat, target);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Image lazy loading
    const images = document.querySelectorAll('img[src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        imageObserver.observe(img);
    });
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;

    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;

    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Counter animation
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        const suffix = element.textContent.replace(/\d/g, '');
        element.textContent = Math.floor(current) + suffix;
    }, 30);
}

// Add CSS for mobile menu
const mobileMenuCSS = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            transition: transform 0.3s ease;
            z-index: 999;
        }
        
        .nav-menu.active {
            transform: translateY(0);
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;

// Inject mobile menu CSS
const style = document.createElement('style');
style.textContent = mobileMenuCSS;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Search functionality (placeholder)
function searchDestinations(query) {
    const destinations = document.querySelectorAll('.destination-card');
    destinations.forEach(destination => {
        const title = destination.querySelector('h3').textContent.toLowerCase();
        const description = destination.querySelector('p').textContent.toLowerCase();
        const searchTerm = query.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            destination.style.display = 'block';
        } else {
            destination.style.display = 'none';
        }
    });
}

// Add search functionality to buttons
document.querySelectorAll('.btn-secondary').forEach(button => {
    if (button.textContent.includes('Tìm Hiểu')) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const destinationsSection = document.querySelector('#destinations');
            if (destinationsSection) {
                destinationsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Video functionality
document.addEventListener('DOMContentLoaded', function() {
    const mainVideo = document.getElementById('mainVideo');
    const playBtn = document.getElementById('playBtn');
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');

    // Play button functionality
    if (playBtn && mainVideo) {
        playBtn.addEventListener('click', function() {
            mainVideo.play();
            playBtn.style.display = 'none';
        });

        // Show play button when video is paused
        mainVideo.addEventListener('pause', function() {
            playBtn.style.display = 'flex';
        });

        // Hide play button when video is playing
        mainVideo.addEventListener('play', function() {
            playBtn.style.display = 'none';
        });
    }

    // Video thumbnail click functionality
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            const videoTitle = this.querySelector('.video-title').textContent;
            
            if (mainVideo) {
                // Update video source
                mainVideo.src = videoSrc;
                mainVideo.load();
                
                // Update video info
                const videoInfo = document.querySelector('.video-info h3');
                if (videoInfo) {
                    videoInfo.textContent = videoTitle;
                }
                
                // Show play button
                if (playBtn) {
                    playBtn.style.display = 'flex';
                }
                
                // Scroll to video
                mainVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Show notification
                showNotification(`Đang tải video: ${videoTitle}`, 'info');
            }
        });
    });

    // Video progress tracking
    if (mainVideo) {
        mainVideo.addEventListener('timeupdate', function() {
            const progress = (mainVideo.currentTime / mainVideo.duration) * 100;
            // You can add a progress bar here if needed
        });

        // Video ended event
        mainVideo.addEventListener('ended', function() {
            if (playBtn) {
                playBtn.style.display = 'flex';
            }
            showNotification('Video đã kết thúc. Chọn video khác để xem tiếp!', 'info');
        });

        // Video error handling
        mainVideo.addEventListener('error', function() {
            showNotification('Không thể tải video. Vui lòng thử lại sau!', 'error');
        });
    }

    // Keyboard shortcuts for video
    document.addEventListener('keydown', function(e) {
        if (mainVideo) {
            switch(e.code) {
                case 'Space':
                    e.preventDefault();
                    if (mainVideo.paused) {
                        mainVideo.play();
                    } else {
                        mainVideo.pause();
                    }
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    mainVideo.currentTime += 10;
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    mainVideo.currentTime -= 10;
                    break;
                case 'KeyM':
                    e.preventDefault();
                    mainVideo.muted = !mainVideo.muted;
                    break;
            }
        }
    });

    // Video fullscreen functionality
    const fullscreenBtn = document.createElement('button');
    fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    fullscreenBtn.className = 'fullscreen-btn';
    fullscreenBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        border: none;
        border-radius: 4px;
        padding: 8px;
        cursor: pointer;
        z-index: 10;
        transition: background 0.3s ease;
    `;

    fullscreenBtn.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(0, 0, 0, 0.9)';
    });

    fullscreenBtn.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(0, 0, 0, 0.7)';
    });

    fullscreenBtn.addEventListener('click', function() {
        if (mainVideo) {
            if (mainVideo.requestFullscreen) {
                mainVideo.requestFullscreen();
            } else if (mainVideo.webkitRequestFullscreen) {
                mainVideo.webkitRequestFullscreen();
            } else if (mainVideo.msRequestFullscreen) {
                mainVideo.msRequestFullscreen();
            }
        }
    });

    // Add fullscreen button to video wrapper
    const videoWrapper = document.querySelector('.video-wrapper');
    if (videoWrapper) {
        videoWrapper.appendChild(fullscreenBtn);
    }
}); 