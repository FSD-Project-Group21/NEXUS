function toggleButton(button) {
    // Remove the 'active' class from all buttons
    document.querySelectorAll('.btn-primary').forEach(function(btn) {
        btn.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    button.classList.add('active');
}