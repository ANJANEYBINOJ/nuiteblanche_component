// Mobile App JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Back button functionality
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            // Simulate going back
            console.log('Back button clicked');
            // In a real app, this would navigate to the previous screen
        });
    }

    // Favorite button functionality
    const favoriteBtn = document.querySelector('.favorite-btn');
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fas')) {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.color = '#ccc';
            } else {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.color = '#ff4757';
            }
        });
    }

    // Menu button functionality
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            console.log('Menu button clicked');
            // In a real app, this would open a menu
        });
    }

    // Map view button functionality
    const mapViewBtn = document.querySelector('.map-view-btn');
    if (mapViewBtn) {
        mapViewBtn.addEventListener('click', function() {
            console.log('Map view button clicked');
            // In a real app, this would open a full map view
        });
    }

    // Add touch feedback to all interactive elements
    const interactiveElements = document.querySelectorAll('button, .detail-item');
    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.opacity = '0.7';
        });
        
        element.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });

    // Simulate loading state
    setTimeout(() => {
        const appContainer = document.querySelector('.app-container');
        if (appContainer) {
            appContainer.style.opacity = '1';
        }
    }, 100);
});

// Add smooth scrolling for better mobile experience
document.addEventListener('touchmove', function(e) {
    // Prevent horizontal scrolling
    if (e.touches.length === 1) {
        const touch = e.touches[0];
        const startX = touch.clientX;
        const startY = touch.clientY;
        
        document.addEventListener('touchmove', function(e) {
            const touch = e.touches[0];
            const deltaX = Math.abs(touch.clientX - startX);
            const deltaY = Math.abs(touch.clientY - startY);
            
            if (deltaX > deltaY && deltaX > 10) {
                e.preventDefault();
            }
        }, { passive: false });
    }
}); 