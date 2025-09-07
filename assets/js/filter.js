// Filter system for publications and projects
(function() {
    'use strict';
    
    function findScopeForContainer(container) {
        // Look ahead in DOM to determine whether this button group controls publications or projects
        var probe = container.nextElementSibling;
        while (probe) {
            if (probe.classList && probe.classList.contains('filter-container')) {
                break; // reached next group; stop
            }
            if (probe.querySelector && probe.querySelector('.publication-item')) {
                return 'publication';
            }
            if (probe.querySelector && probe.querySelector('.project-item')) {
                return 'project';
            }
            probe = probe.nextElementSibling;
        }
        return null;
    }
    
    function applyFilterToItems(keyword, scope) {
        if (scope === 'publication') {
            var pubItems = document.querySelectorAll('.publication-item');
            for (var i = 0; i < pubItems.length; i++) {
                var item = pubItems[i];
                var keywords = item.getAttribute('data-keywords') || '';
                if (keyword === 'all' || keywords.indexOf(keyword) !== -1) {
                    item.style.display = 'table-row';
                    item.classList.remove('hidden');
                } else {
                    item.style.display = 'none';
                    item.classList.add('hidden');
                }
            }
        } else if (scope === 'project') {
            var projItems = document.querySelectorAll('.project-item');
            for (var j = 0; j < projItems.length; j++) {
                var pItem = projItems[j];
                var pKeywords = pItem.getAttribute('data-keywords') || '';
                if (keyword === 'all' || pKeywords.indexOf(keyword) !== -1) {
                    pItem.style.display = 'block';
                    pItem.classList.remove('hidden');
                } else {
                    pItem.style.display = 'none';
                    pItem.classList.add('hidden');
                }
            }
        }
    }
    
    function initFilterSystem() {
        var containers = document.querySelectorAll('.filter-container');
        
        if (containers.length === 0) {
            setTimeout(initFilterSystem, 1000);
            return;
        }
        
        for (var c = 0; c < containers.length; c++) {
            (function(container) {
                var scope = findScopeForContainer(container);
                var buttons = container.querySelectorAll('.filter-btn');
                
                for (var b = 0; b < buttons.length; b++) {
                    buttons[b].addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        var keyword = this.getAttribute('data-filter');
                        
                        // Update active state only within this button group
                        for (var bb = 0; bb < buttons.length; bb++) {
                            buttons[bb].classList.remove('active');
                        }
                        this.classList.add('active');
                        
                        // Apply filtering only to the scoped section
                        applyFilterToItems(keyword, scope);
                    });
                }
            })(containers[c]);
        }
        
        // Ensure all items start visible
        var pubItems = document.querySelectorAll('.publication-item');
        for (var i = 0; i < pubItems.length; i++) {
            pubItems[i].style.display = 'table-row';
            pubItems[i].classList.remove('hidden');
        }
        var projItems = document.querySelectorAll('.project-item');
        for (var j = 0; j < projItems.length; j++) {
            projItems[j].style.display = 'block';
            projItems[j].classList.remove('hidden');
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFilterSystem);
    } else {
        initFilterSystem();
    }
    
    window.addEventListener('load', function() {
        setTimeout(initFilterSystem, 100);
    });
})();
