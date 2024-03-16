let profiles = {
  data: [
    {
      studentName: "Profile 0",
      category: "Category4",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, culpa tempora magnam nemo quibusdam ea architecto aliquam ex eaque harum saepe dolore porro at tempore reiciendis, libero ad praesentium? Rerum.",
      image: "./assets/profile-pic.jpeg",
      age: 25,
      education: "Bachelor's Degree in Computer Science",
      skills: ["JavaScript", "HTML", "CSS", "Python"],
      experience: "2 years of internships in software development",
      languages: ["English", "Spanish"],
      projectLink: "https://www.nexus.com/profiles/profile0/projects",
      isSaved: false,
      isHired: false,
    },
    {
      studentName: "Profile 1",
      category: "Category2",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, culpa tempora magnam nemo quibusdam ea architecto aliquam ex eaque harum saepe dolore porro at tempore reiciendis, libero ad praesentium? Rerum.",
      image: "./assets/profile-pic.jpeg",
      age: 25,
      education: "Bachelor's Degree in Computer Science",
      skills: ["JavaScript", "HTML", "CSS", "Python"],
      experience: "2 years of internships in software development",
      languages: ["English", "Spanish"],
      projectLink: "https://www.nexus.com/profiles/profile1/projects",
      isSaved: false,
      isHired: false,
    },
    {
      studentName: "Profile 2",
      category: "Category1",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, culpa tempora magnam nemo quibusdam ea architecto aliquam ex eaque harum saepe dolore porro at tempore reiciendis, libero ad praesentium? Rerum.",
      image: "./assets/profile-pic.jpeg",
      age: 25,
      education: "Bachelor's Degree in Computer Science",
      skills: ["JavaScript", "HTML", "CSS", "Python"],
      experience: "2 years of internships in software development",
      languages: ["English", "Spanish"],
      projectLink: "https://www.nexus.com/profiles/profile2/projects",
      isSaved: false,
      isHired: false,
    },
    {
      studentName: "Profile 3",
      category: "Category3",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, culpa tempora magnam nemo quibusdam ea architecto aliquam ex eaque harum saepe dolore porro at tempore reiciendis, libero ad praesentium? Rerum.",
      image: "./assets/profile-pic.jpeg",
      age: 25,
      education: "Bachelor's Degree in Computer Science",
      skills: ["JavaScript", "HTML", "CSS", "Python"],
      experience: "2 years of internships in software development",
      languages: ["English", "Spanish"],
      projectLink: "https://www.nexus.com/profiles/profile3/projects",
      isSaved: false,
      isHired: false,
    },
    {
      studentName: "Profile 4",
      category: "Category1",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, culpa tempora magnam nemo quibusdam ea architecto aliquam ex eaque harum saepe dolore porro at tempore reiciendis, libero ad praesentium? Rerum.",
      image: "./assets/profile-pic.jpeg",
      age: 25,
      education: "Bachelor's Degree in Computer Science",
      skills: ["JavaScript", "HTML", "CSS", "Python"],
      experience: "2 years of internships in software development",
      languages: ["English", "Spanish"],
      projectLink: "https://www.nexus.com/profiles/profile3/projects",
      isSaved: false,
      isHired: false,
    },
  ],
};

for (let i of profiles.data) {
  // Create Card
  let card = document.createElement("div");
  card.classList.add("collab");
  card.classList.add(i.category);

  // Image Container
  // let imageContainer = document.createElement("div");
  // imageContainer.classList.add("collab-preview");
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  image.setAttribute("alt", "Image");
  // imageContainer.appendChild(image);
  // card.appendChild(imageContainer);
  card.appendChild(image);

  // Info Container
  let infoContainer = document.createElement("div");
  infoContainer.classList.add("collab-info");

  // Product Name
  let name = document.createElement("h2");
  name.innerText = i.studentName.toUpperCase();
  infoContainer.appendChild(name);

  // Details
  let details = document.createElement("h6");
  details.innerText = i.details;
  infoContainer.appendChild(details);

  // Button
  let button = document.createElement("button");
  button.textContent = "Check Out This Profile";
  infoContainer.appendChild(button);

  card.appendChild(infoContainer);
  document.getElementById("profile-cards").appendChild(card);
}

// Filter function
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    // Check if the button text is "All" or matches the specified value
    var buttonValue = button.innerText.toUpperCase();
    if (button.innerText.toUpperCase().split(" ").length === 2) buttonValue = button.innerText.toUpperCase().split(" ")[0] + button.innerText.toUpperCase().split(" ")[1];

    if (value.toUpperCase() === buttonValue) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });


  let elements = document.querySelectorAll(".collab");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

// Search function
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value.trim().toUpperCase();
  let elements = document.querySelectorAll(".collab-info h2");
  let cards = document.querySelectorAll(".collab");

  elements.forEach((element, index) => {
    let profileName = element.innerText.trim().toUpperCase();
    if (profileName.includes(searchInput)) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all profiles
window.onload = () => {
  filterProduct("all");
};


// Handle the modals (popup on-click of the "Check Out Profile Button")
var modal = document.getElementById("myModal");
var btns = document.querySelectorAll(".collab button");
var span = document.getElementsByClassName("close")[0];
var index;

// When the user clicks the button, open the modal
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    // Get which card got clicked
    index = Array.from(btns).indexOf(this);

    // console.log(profiles.data[index]);

    modal.style.display = "block";

    // Populate modal content with profile details
    populateModalContent();
  }
}


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  index = null;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    index = null;
  }
}

// Function to populate modal content with profile details
function populateModalContent() {
  // Get the modal content element
  var modalContent = document.querySelector(".student-details");

  modalContent.innerHTML = "";

  // Create elements for profile details
  var nameElement = document.createElement("h2");
  nameElement.innerText = profiles.data[index].studentName.toUpperCase();
  modalContent.appendChild(nameElement);

  var categoryElement = document.createElement("p");
  categoryElement.innerText = "Category: " + profiles.data[index].category;
  modalContent.appendChild(categoryElement);

  var detailsElement = document.createElement("p");
  detailsElement.innerText = profiles.data[index].details;
  modalContent.appendChild(detailsElement);

  // Add additional profile details
  var ageElement = document.createElement("p");
  ageElement.innerText = "Age: " + profiles.data[index].age;
  modalContent.appendChild(ageElement);

  var educationElement = document.createElement("p");
  educationElement.innerText = "Education: " + profiles.data[index].education;
  modalContent.appendChild(educationElement);

  var skillsElement = document.createElement("p");
  skillsElement.innerText = "Skills: " + profiles.data[index].skills.join(", ");
  modalContent.appendChild(skillsElement);

  var experienceElement = document.createElement("p");
  experienceElement.innerText = "Experience: " + profiles.data[index].experience;
  modalContent.appendChild(experienceElement);

  var languagesElement = document.createElement("p");
  languagesElement.innerText = "Languages: " + profiles.data[index].languages.join(", ");
  modalContent.appendChild(languagesElement);

  // Update buttons based on saved/hired status
  var saveBtn = document.getElementById("saveBtn");
  var hireBtn = document.getElementById("hireBtn");

  if (profiles.data[index].isSaved) {
    saveBtn.style.backgroundColor = "red";
    saveBtn.innerText = "Unsave Profile";
  } else {
    saveBtn.style.backgroundColor = "#4CAF50";
    saveBtn.innerText = "Save Profile";
  }

  if (profiles.data[index].isHired) {
    hireBtn.style.backgroundColor = "red";
    hireBtn.innerText = "Unhire Profile";
  } else {
    hireBtn.style.backgroundColor = "#4CAF50";
    hireBtn.innerText = "Hire Profile";
  }
}


// Save button click event
document.querySelectorAll("#saveBtn").forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    console.log("Saved " + index);

    profiles.data[index].isSaved = !profiles.data[index].isSaved;

    updateSavedProfiles();

    // Populate modal content with profile details
    populateModalContent();
  });
});

// Hired button click event
document.querySelectorAll("#hireBtn").forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    console.log("Hired " + index);

    profiles.data[index].isHired = !profiles.data[index].isHired;

    updateHiredProfiles();

    // Populate modal content with profile details
    populateModalContent();
  });
});


function updateSavedProfiles() {
  var cardContainer = document.getElementsByClassName("saved-cards-container");
  cardContainer[0].innerHTML = "";
  let h2 = document.createElement("h2");
  h2.innerText = "Saved Profiles";
  cardContainer[0].appendChild(h2);

  let div = document.createElement("div");
  div.setAttribute("id", "saved-cards");
  div.innerHTML = "";
  cardContainer[0].appendChild(div);

  for (let i of profiles.data) {
    if (i.isSaved === true) {
      // Create Card
      let card = document.createElement("div");
      card.classList.add("collab");

      // Image Container
      // let imageContainer = document.createElement("div");
      // imageContainer.classList.add("collab-preview");
      let image = document.createElement("img");
      image.setAttribute("src", i.image);
      image.setAttribute("alt", "Image");
      // imageContainer.appendChild(image);
      // card.appendChild(imageContainer);
      card.appendChild(image);

      // Info Container
      let infoContainer = document.createElement("div");
      infoContainer.classList.add("collab-info");

      // Product Name
      let name = document.createElement("h2");
      name.innerText = i.studentName.toUpperCase();
      infoContainer.appendChild(name);

      // Details
      let details = document.createElement("h6");
      details.innerText = i.details;
      infoContainer.appendChild(details);

      // Project Link
      let projectLink = document.createElement("a");
      projectLink.setAttribute("href", i.projectLink);
      projectLink.setAttribute("target", "_blank");
      projectLink.innerText = i.projectLink;
      infoContainer.appendChild(projectLink);

      card.appendChild(infoContainer);
      document.getElementById("saved-cards").appendChild(card);
    }
  }
}

function updateHiredProfiles() {
  var cardContainer = document.getElementsByClassName("hired-cards-container");
  cardContainer[0].innerHTML = "";
  let h2 = document.createElement("h2");
  h2.innerText = "Hired Profiles";
  cardContainer[0].appendChild(h2);

  let div = document.createElement("div");
  div.setAttribute("id", "hired-cards");
  div.innerHTML = "";
  cardContainer[0].appendChild(div);

  document.getElementById("hired-cards").innerHTML = "";
  for (let i of profiles.data) {
    if (i.isHired === true) {
      // Create Card
      let card = document.createElement("div");
      card.classList.add("collab");

      // Image Container
      // let imageContainer = document.createElement("div");
      // imageContainer.classList.add("collab-preview");
      let image = document.createElement("img");
      image.setAttribute("src", i.image);
      image.setAttribute("alt", "Image");
      // imageContainer.appendChild(image);
      // card.appendChild(imageContainer);
      card.appendChild(image);

      // Info Container
      let infoContainer = document.createElement("div");
      infoContainer.classList.add("collab-info");

      // Product Name
      let name = document.createElement("h2");
      name.innerText = i.studentName.toUpperCase();
      infoContainer.appendChild(name);

      // Details
      let details = document.createElement("h6");
      details.innerText = i.details;
      infoContainer.appendChild(details);

      // Project Link
      let projectLink = document.createElement("a");
      projectLink.setAttribute("href", i.projectLink);
      projectLink.setAttribute("target", "_blank");
      projectLink.innerText = i.projectLink;
      infoContainer.appendChild(projectLink);

      card.appendChild(infoContainer);
      document.getElementById("hired-cards").appendChild(card);
    }
  }
}
