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
const like = document.querySelector('.like-btn');
const save = document.querySelector('.save-btn');
const comment = document.querySelector('.comment-btn');
like.addEventListener('click',()=>{
    if(!like.classList.contains('liked')){
        like.innerHTML = '<i class="fa-solid fa-heart" style="color: #ff0000;"></i>';
        like.classList.add('liked');
    }else{
        like.innerHTML = '<i class="fa-regular fa-heart"></i>';
        like.classList.remove('liked');
    }
});
save.addEventListener('click',()=>{
    if(!save.classList.contains('saved')){
        save.innerHTML = '<i class="fa-solid fa-bookmark" style="color: #080d96;"></i>';
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
        comment.innerHTML = '<i class="fa-regular fa-comment"></i>';
        comment.classList.remove('commented');
    }
});
const sendButton = document.querySelector('#send-comment');
const inputComment = document.querySelector('#input-comment');
const userProfile = document.querySelector('#user-profile');
const comments = document.querySelector('.comments');
sendButton.addEventListener('click',()=>{
    if(inputComment.value){
        let newElement = document.createElement('div');
        newElement.className = "comment";
        let newImage = document.createElement('img');
        newImage.src = userProfile.src;
        newElement.appendChild(newImage);
        let commentText = document.createElement('div');
        commentText.className = "comment-text";
        commentText.innerHTML = inputComment.value;
        inputComment.value = "";
        newElement.appendChild(commentText);
        comments.appendChild(newElement);
    }
});