document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Show/hide search button based on input
    searchInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            searchButton.style.display = 'block';
        } else {
            searchButton.style.display = 'none';
        }
    });

    // Handle form submission
    document.querySelector('.search-form form').addEventListener('submit', function(e) {
        e.preventDefault();
        if (searchInput.value.trim() !== '') {
            // Perform your search action here
            console.log('Searching for:', searchInput.value);
            // window.location.href = '/search?q=' + encodeURIComponent(searchInput.value);
        }
    });
});