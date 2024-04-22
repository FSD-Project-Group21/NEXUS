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


let sendCollab = {
    data: [
      {
        title: "Nandhitha",
        details: "Analytically-driven data scientist with expertise in machine learning, statistical analysis, and data visualization. Experienced in extracting insights from complex datasets to drive informed decision-making and enhance business outcomes.  ",
        image: "./assets/profile-pic3.png",
        status: "Accepted"
      },
      {
        title: "Nandhitha",
        details: "Analytically-driven data scientist with expertise in machine learning, statistical analysis, and data visualization. Experienced in extracting insights from complex datasets to drive informed decision-making and enhance business outcomes.  ",
        image: "./assets/profile-pic3.png",
        status: "Accepted"
      },
      {
        title: "Nandhitha",
        details: "Analytically-driven data scientist with expertise in machine learning, statistical analysis, and data visualization. Experienced in extracting insights from complex datasets to drive informed decision-making and enhance business outcomes.  ",
        image: "./assets/profile-pic3.png",
        status: "Pending"
      },
      {
        title: "Nandhitha",
        details: "Analytically-driven data scientist with expertise in machine learning, statistical analysis, and data visualization. Experienced in extracting insights from complex datasets to drive informed decision-making and enhance business outcomes.  ",
        image: "./assets/profile-pic3.png",
        status: "Accepted"
      },
      {
        title: "Nandhitha",
        details: "Analytically-driven data scientist with expertise in machine learning, statistical analysis, and data visualization. Experienced in extracting insights from complex datasets to drive informed decision-making and enhance business outcomes.  ",
        image: "./assets/profile-pic3.png",
        status: "Declined"
      },
    ],
  };

let receiveCollab = {
    data: [
      {
        title: "Nandhitha",
        details: "Analytically-driven data scientist with expertise in machine learning, statistical analysis, and data visualization. Experienced in extracting insights from complex datasets to drive informed decision-making and enhance business outcomes.  ",
        image: "./assets/profile-pic3.png",
      },
      {
        title: "Nandhitha",
        details: "Analytically-driven data scientist with expertise in machine learning, statistical analysis, and data visualization. Experienced in extracting insights from complex datasets to drive informed decision-making and enhance business outcomes.  ",
        image: "./assets/profile-pic3.png",
      },
      {
        title: "Nandhitha",
        details: "Analytically-driven data scientist with expertise in machine learning, statistical analysis, and data visualization. Experienced in extracting insights from complex datasets to drive informed decision-making and enhance business outcomes.  ",
        image: "./assets/profile-pic3.png",
      },
      {
        title: "Nandhitha",
        details: "Analytically-driven data scientist with expertise in machine learning, statistical analysis, and data visualization. Experienced in extracting insights from complex datasets to drive informed decision-making and enhance business outcomes.  ",
        image: "./assets/profile-pic3.png",
      },
      {
        title: "Nandhitha",
        details: "Analytically-driven data scientist with expertise in machine learning, statistical analysis, and data visualization. Experienced in extracting insights from complex datasets to drive informed decision-making and enhance business outcomes.  ",
        image: "./assets/profile-pic3.png",
      },
    ],
  };


  for (let i of sendCollab.data) {
    // Create Card
    let card = document.createElement("div");
    card.classList.add("collab");
    card.classList.add(i.category);
  
    // Image Container
    // let imageContainer = document.createElement("div");
    // imageContainer.classList.add("collab-preview");
    let imgContainer = document.createElement("div");
    imgContainer.className = "collab-preview";
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.setAttribute("alt", "Image");
    // imageContainer.appendChild(image);
    // card.appendChild(imageContainer);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
  
    // Info Container
    let infoContainer = document.createElement("div");
    infoContainer.classList.add("collab-info");
  
    // Product Name
    let title = document.createElement("h2");
    title.innerText = i.title;
    infoContainer.appendChild(title);
  
    // Details
    let details = document.createElement("h6");
    details.innerText = i.details;
    infoContainer.appendChild(details);
  
    // Resume
    // let resume = document.createElement('object');
    // resume.data = i.resume;
    // resume.width = "800";
    // resume.height = "500";
    // infoContainer.appendChild(resume);
  
    let btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");
    
    // Button
    let button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = "Request";
    btnContainer.appendChild(button);
    infoContainer.appendChild(btnContainer);
  
    card.appendChild(infoContainer);
    document.getElementById("collab-container-send").appendChild(card);
  }

  for (let i of receiveCollab.data) {
    // Create Card
    let card = document.createElement("div");
    card.classList.add("collab");
    card.classList.add(i.category);
  
    // Image Container
    // let imageContainer = document.createElement("div");
    // imageContainer.classList.add("collab-preview");
    let imgContainer = document.createElement("div");
    imgContainer.className = "collab-preview";
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.setAttribute("alt", "Image");
    // imageContainer.appendChild(image);
    // card.appendChild(imageContainer);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
  
    // Info Container
    let infoContainer = document.createElement("div");
    infoContainer.classList.add("collab-info");
  
    // Product Name
    let title = document.createElement("h2");
    title.innerText = i.title;
    infoContainer.appendChild(title);
  
    // Details
    let details = document.createElement("h6");
    details.innerText = i.details;
    infoContainer.appendChild(details);
  
    // Resume
    // let resume = document.createElement('object');
    // resume.data = i.resume;
    // resume.width = "800";
    // resume.height = "500";
    // infoContainer.appendChild(resume);
  
    let btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");
    
    // Button
    let buttonA = document.createElement("button");
    buttonA.classList.add("btn");
    buttonA.textContent = "Accept";
    let buttonD = document.createElement("button");
    buttonD.classList.add("btn");
    buttonD.textContent = "Decline";
    btnContainer.appendChild(buttonA);
    btnContainer.appendChild(buttonD);
    infoContainer.appendChild(btnContainer);
  
    card.appendChild(infoContainer);
    document.getElementById("collab-container-receive").appendChild(card);
  }


  for (let i of sendCollab.data) {
    // Create Card
    let card = document.createElement("div");
    card.classList.add("collab");
    card.classList.add(i.category);
  
    // Image Container
    // let imageContainer = document.createElement("div");
    // imageContainer.classList.add("collab-preview");
    let imgContainer = document.createElement("div");
    imgContainer.className = "collab-preview";
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.setAttribute("alt", "Image");
    // imageContainer.appendChild(image);
    // card.appendChild(imageContainer);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
  
    // Info Container
    let infoContainer = document.createElement("div");
    infoContainer.classList.add("collab-info");
  
    // Product Name
    let title = document.createElement("h2");
    title.innerText = i.title;
    infoContainer.appendChild(title);
  
    // Details
    let details = document.createElement("h6");
    details.innerText = i.details;
    infoContainer.appendChild(details);
  
    // Resume
    // let resume = document.createElement('object');
    // resume.data = i.resume;
    // resume.width = "800";
    // resume.height = "500";
    // infoContainer.appendChild(resume);
    
    let status = document.createElement("span");
    status.innerText = "Status - [ " + i.status + " ]";
    infoContainer.appendChild(status);
  
    card.appendChild(infoContainer);
    document.getElementById("collab-container-status").appendChild(card);
  }