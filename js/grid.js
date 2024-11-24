// Add this JavaScript to toggle the grid
document.addEventListener('keydown', function(e) {
    // Press 'G' to toggle grid
    if (e.key.toLowerCase() === 'g') {
        document.body.classList.toggle('show-grid');
    }
}); 