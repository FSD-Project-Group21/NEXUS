// sideBar for icon open
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
