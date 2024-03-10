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
//create post
const projectNameInput = document.getElementById('projectName');
const wordCountSpan = document.getElementById('wordCount-projectName');

projectNameInput.addEventListener('input', function() {
  const wordCount_proj= projectNameInput.value.length;
  wordCountSpan.textContent = wordCount_proj + '/100';
});
const descriptionInput = document.getElementById('description');
  const charCount = document.getElementById('wordCount-description');

  descriptionInput.addEventListener('input', function() {
    charCount.textContent = `${this.value.length}`; // Update character count
  });
  document.getElementById('image').addEventListener('change', function() {
    const fileInput = this;
    const fileName = fileInput.files[0].name;
    const uploadBtn = document.getElementById('uploadBtnText');
    uploadBtn.innerText = fileName;
  });
  function updateFileName(input) {
    var fileName = input.files[0].name;
    document.getElementById('fileName').textContent = fileName;
  }

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


