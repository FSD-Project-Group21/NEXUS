let sections = document.querySelectorAll(".nav li");
sections.forEach(li => {
    let s = li.querySelector('a');
    s.addEventListener('click',()=>{
        li.classList.add("active");
        for(let i = 0;i<sections.length;i++){
            if(sections[i]!=li){
                sections[i].classList.remove("active");
            }
        }
    });
});
const section = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav li');

  function highlightNav() {
    let index = section.length;

    while(--index && window.scrollY + 50 < section[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  }

  // Highlight nav link on scroll
  window.addEventListener('scroll', highlightNav);

