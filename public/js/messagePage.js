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

// messaging js
//msg request
const showRequests = document.querySelector(".msg-requests");
const closeRequests = document.querySelector(".close-req");
const contactchats = document.querySelector(".contact-chats");
const msgRequests = document.querySelector(".msg-requests-div");
showRequests.addEventListener('click',()=>{
    msgRequests.style.display = "flex";
    contactchats.style.display = "none"
});
closeRequests.addEventListener('click',()=>{
    msgRequests.style.display = "none";
    contactchats.style.display = "flex";
});
//block user
function blockContact(user){
    const blockUser = user.querySelector('.block-user');
    const blockContainer = user.querySelector('#block-popup');
    const blockPopup = user.querySelector('#block-msg-popup');
    const confirmYes = user.querySelector('#yes-close-popup');
    const confirmNo = user.querySelector('#no-close-popup');
    const userBlocked = user.querySelector('#user-blocked');
    const msgInput = user.querySelector('#msg-input');

    blockUser.addEventListener('click', function() {
        blockContainer.style.display = 'flex';
        setTimeout(function() {
            blockPopup.style.transform = 'scale(1)';
            blockPopup.style.opacity = '1';
        }, 100);
    });

    confirmNo.addEventListener('click', function() {
        blockPopup.style.transform = 'scale(0.5)';
        blockPopup.style.opacity = '0';
        setTimeout(function() {
            blockContainer.style.display = 'none';
        }, 300);
    });
    confirmYes.addEventListener('click', function() {
        blockPopup.style.transform = 'scale(0.5)';
        blockPopup.style.opacity = '0';
        blockContainer.style.display = 'none';
        userBlocked.style.display = "flex";
        msgInput.disabled = "true";
    });
}
const contacts = document.querySelectorAll(".contact-chat");
const contactTexts = document.querySelectorAll(".texts");
const startingChat = document.querySelector(".starting-chat");
contacts.forEach(c => {
    c.addEventListener('click',()=>{
        startingChat.style.display = "none";
        for(let i = 0;i<contacts.length;i++){
            if(contacts[i] == c)
                j=i;
        }
        displayCont(j);
    });
});
function displayCont(j){
    contactTexts[j].classList.remove('hide');
    blockContact(contactTexts[j]);
    for(let i=0;i<contactTexts.length;i++){
        if(i!==j){
            console.log(i);
            contactTexts[i].classList.add('hide');
        }
    }
}
// message request accept decline
function createContact(req){
    let newContact = document.createElement('button');
    newContact.className = 'contact-chat';
    let contacts = document.querySelectorAll('.contact-chat');
    let newDiv = document.createElement('div');
    newDiv.className = "contact";
    newContact.id = `contact-${contacts.length}`;
    let newProfile = document.createElement('div');
    newProfile.className = "contact-profile";
    newProfile.innerHTML = req.querySelector('.req-profile').innerHTML;
    let newDetails = document.createElement('div');
    newDetails.className = "contact-details";
    newDetails.innerHTML = req.querySelector('.req-contact-name').innerHTML;
    newDiv.appendChild(newProfile);
    newDiv.appendChild(newDetails);
    newContact.appendChild(newDiv);
    let contactChats = document.querySelector('.contacts-list');
    contactChats.insertBefore(newContact,contactChats.firstChild);
}
const requests = document.querySelectorAll('.reqsts');
requests.forEach(req => {
    let a = req.querySelector('.accept-req');
    a.addEventListener('click',()=>{
        let rm = req.id;
        let removeReq = document.getElementById(rm);
        removeReq.parentNode.removeChild(removeReq);
        createContact(req);
    });
    let d = req.querySelector('.decline-req');
    d.addEventListener('click',()=>{
        let rm = req.id;
        let removeReq = document.getElementById(rm);
        removeReq.parentNode.removeChild(removeReq);
    });
});