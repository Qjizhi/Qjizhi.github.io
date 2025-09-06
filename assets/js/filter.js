// Filter system for publications and projects
(function() {
    'use strict';
    
    function initFilterSystem() {
        console.log('Initializing filter system...');
        
        // Get all filter buttons
        var filterButtons = document.querySelectorAll('.filter-btn');
        console.log('Found', filterButtons.length, 'filter buttons');
        
        if (filterButtons.length === 0) {
            console.log('No filter buttons found, retrying in 1 second...');
            setTimeout(initFilterSystem, 1000);
            return;
        }
        
        // Add click handlers to all filter buttons
        for (var i = 0; i < filterButtons.length; i++) {
            filterButtons[i].addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                var keyword = this.getAttribute('data-filter');
                console.log('Filtering by:', keyword);
                
                // Update button states
                for (var j = 0; j < filterButtons.length; j++) {
                    filterButtons[j].classList.remove('active');
                }
                this.classList.add('active');
                
                // Filter publications
                var pubItems = document.querySelectorAll('.publication-item');
                for (var k = 0; k < pubItems.length; k++) {
                    var item = pubItems[k];
                    var keywords = item.getAttribute('data-keywords') || '';
                    
                    if (keyword === 'all' || keywords.indexOf(keyword) !== -1) {
                        item.style.display = 'table-row';
                        item.classList.remove('hidden');
                    } else {
                        item.style.display = 'none';
                        item.classList.add('hidden');
                    }
                }
                
                // Filter projects
                var projItems = document.querySelectorAll('.project-item');
                for (var k = 0; k < projItems.length; k++) {
                    var item = projItems[k];
                    var keywords = item.getAttribute('data-keywords') || '';
                    
                    if (keyword === 'all' || keywords.indexOf(keyword) !== -1) {
                        item.style.display = 'table-row';
                        item.classList.remove('hidden');
                    } else {
                        item.style.display = 'none';
                        item.classList.add('hidden');
                    }
                }
            });
        }
        
        // Make sure all items are visible initially
        var allItems = document.querySelectorAll('.publication-item, .project-item');
        for (var i = 0; i < allItems.length; i++) {
            allItems[i].style.display = 'table-row';
            allItems[i].classList.remove('hidden');
        }
        
        console.log('Filter system initialized successfully');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFilterSystem);
    } else {
        initFilterSystem();
    }
    
    // Fallback initialization
    window.addEventListener('load', function() {
        setTimeout(initFilterSystem, 100);
    });
})();
