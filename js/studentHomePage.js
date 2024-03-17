//project reactions 
let cards = document.querySelectorAll(".card");
cards.forEach(c => {
    let like = c.querySelector('.like');
    let save = c.querySelector('.save');
    let comment = c.querySelector('.comment');
    like.addEventListener('click',()=>{
        if(!like.classList.contains('liked')){
            like.innerHTML = '<i class="fa-solid fa-heart"></i>';
            like.classList.add('liked');
        }else{
            like.innerHTML = '<i class="fa-regular fa-heart"></i>';
            like.classList.remove('liked');
        }
    });
    save.addEventListener('click',()=>{
        if(!save.classList.contains('saved')){
            save.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
            save.classList.add('saved');
        }else{
            save.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
            save.classList.remove('saved');
        }
    });
    comment.addEventListener('click',()=>{
        if(!comment.classList.contains('commented')){
            comment.innerHTML = '<i class="fa-solid fa-comment"></i>';
            comment.classList.add('commented');
        }else{
            comment.innerHTML = '<i class="fa-regular fa-heart"></i>';
            comment.classList.remove('commented');
        }
    });
});
