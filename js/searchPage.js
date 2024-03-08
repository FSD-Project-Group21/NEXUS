document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('categories-button');
    const content = document.getElementById('dropdown-content');
    const input = document.querySelector('.search input[type="text"]');
    const clearButton = document.querySelector('.search button[type="submit"]'); 

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

    // Clear input value when clear button is clicked
    clearButton.addEventListener('click', function() {
        input.value = "";
        input.setAttribute('placeholder','What are you looking for?')
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const settingsButton = document.querySelector('.settings');
    const popupContainer = document.getElementById('popup-container');
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('close-popup');

    settingsButton.addEventListener('click', function() {
        popupContainer.style.display = 'flex';
        setTimeout(function() {
            popup.style.transform = 'scale(1)';
            popup.style.opacity = '1';
        }, 100);
    });

    closeButton.addEventListener('click', function() {
        popup.style.transform = 'scale(0.5)';
        popup.style.opacity = '0';
        setTimeout(function() {
            popupContainer.style.display = 'none';
        }, 300);
    });
});
