// let sections = document.querySelectorAll(".nav a");
// sections.forEach(s => {
//     let li = s.querySelector('.inner-circle');
//     s.addEventListener('click',()=>{
//         li.classList.add("active");
//         for(let i = 0;i<sections.length;i++){
//             if(sections[i]!=s){
//                 let a = 
//                 sections[i].classList.remove("active");
//             }
//         }
//     });
// });
// const section = document.querySelectorAll('.section');
//   const navLinks = document.querySelectorAll('.nav li');

//   function highlightNav() {
//     let index = section.length;

//     while(--index && window.scrollY + 50 < section[index].offsetTop) {}

//     navLinks.forEach((link) => link.classList.remove('active'));
//     navLinks[index].classList.add('active');
//   }
  // Highlight nav link on scroll
  window.addEventListener('scroll', highlightNav);

  //Settings
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


