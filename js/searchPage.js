//for icon open
let icons = document.querySelectorAll(".icon-link");

icons.forEach(icon => {
    icon.addEventListener("click",function(){
        icon.classList.add("open");
        for(var i=0;i<icons.length;i++){
            if(icons[i]!== icon){
                icons[i].classList.remove("open");
            }
        }
    });
});


// search logic 
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('categories-button');
    const content = document.getElementById('dropdown-content');

    button.addEventListener('click', function() {
        content.classList.toggle('show');
    });

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('#categories-button')) {
            content.classList.remove('show');
        }
    });
});
