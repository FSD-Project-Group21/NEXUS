function toggleButton(button) {
    // Remove the 'active' class from all buttons
    document.querySelectorAll('.btn-primary').forEach(function(btn) {
        btn.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    btn.classList.add('active');
}
const collab1 = document.querySelector('._collab1');
const collab2 = document.querySelector('._collab2');
const collab0 = document.querySelector('._collab0');
const collabcont0 = document.querySelector('.collab-container0');
const collabcont1 = document.querySelector('.collab-container1');
const collabcont2 = document.querySelector('.collab-container2');

collab0.addEventListener('click',()=>{
    collab0.classList.add('collab-active');
    collab1.classList.remove('collab-active');
    collab2.classList.remove('collab-active');
    collabcont0.style.display = "flex";
    collabcont1.style.display = "none";
    collabcont2.style.display = "none";
});
collab1.addEventListener('click',()=>{
    collab0.classList.remove('collab-active');
    collab1.classList.add('collab-active');
    collab2.classList.remove('collab-active');
    collabcont1.style.display = "flex";
    collabcont2.style.display = "none";
    collabcont0.style.display = "none";
});
collab2.addEventListener('click',()=>{
    collab0.classList.remove('collab-active');
    collab1.classList.remove('collab-active');
    collab2.classList.add('collab-active');
    collabcont0.style.display = "none";
    collabcont1.style.display = "none";
    collabcont2.style.display = "flex";
});

//Settings
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

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('create-new'); // Changed the selector to match the ID in the HTML
    const popupForm = document.getElementById('colab-form');
    const workup = document.getElementById('colabup');
    const closeButton = document.getElementById('closec-icon');

    button.addEventListener('click', function() { // Changed the event to 'click' to listen for button clicks
        popupForm.style.display = 'flex';
        setTimeout(function() {
            workup.style.transform = 'scale(1)';
            workup.style.opacity = '1';
        }, 100);
    });

    closeButton.addEventListener('click', function() {
        workup.style.transform = 'scale(0.5)';
        workup.style.opacity = '0';
        setTimeout(function() {
            popupForm.style.display = 'none';
        }, 300);
    });
});
