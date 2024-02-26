document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('categories-button');
    const content = document.getElementById('dropdown-content');
    const input = document.querySelector('.search input[type="text"]');

    button.addEventListener('click', function() {
        content.classList.toggle('show');
    });

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('#categories-button')) {
            content.classList.remove('show');
        }
    });

    // Remove placeholder when input is clicked
    input.addEventListener('focus', function() {
        input.removeAttribute('placeholder');
    });

    // Restore placeholder if input is empty
    input.addEventListener('blur', function() {
        if (input.value.trim() === '') {
            input.setAttribute('placeholder', 'What are you looking for?');
        }
    });
});
