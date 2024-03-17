// function toggleButton(button) {
//     // Remove the 'active' class from all buttons
//     document.querySelectorAll('.btn-primary').forEach(function(btn) {
//         btn.classList.remove('active');
//     });

//     // Add the 'active' class to the clicked button
//     button.classList.add('active');
// }


const icons = document.querySelectorAll('._icon');
const iconsCont = document.querySelectorAll('._icon-cont');

var j ;
icons.forEach(icon => {
    icon.addEventListener('click',()=>{
        for(let i = 0;i<4;i++){
            if(icons[i] != icon){
                icons[i].classList.remove("openIcon");
            }else
                j=i;
        }
        icon.classList.add("openIcon")
        displayCont(j);
    });
});
function displayCont(j){
    iconsCont[j].classList.remove("hide");
    for(let i=0;i<4;i++){
        if(i!==j){
            iconsCont[i].classList.add("hide");
        }
    }
}