let products = {
  data: [
    {
      studentName: "Nadhitha",
      category: "Category 1",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, culpa tempora magnam nemo quibusdam ea architecto aliquam ex eaque harum saepe dolore porro at tempore reiciendis, libero ad praesentium? Rerum.",
      image: "./assets/profile-pic.jpeg",
    },
    {
      studentName: "Nadhitha",
      category: "Category 4",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, culpa tempora magnam nemo quibusdam ea architecto aliquam ex eaque harum saepe dolore porro at tempore reiciendis, libero ad praesentium? Rerum.",
      image: "./assets/profile-pic.jpeg",
    },
    {
      studentName: "Nadhitha",
      category: "Watch",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, culpa tempora magnam nemo quibusdam ea architecto aliquam ex eaque harum saepe dolore porro at tempore reiciendis, libero ad praesentium? Rerum.",
      image: "./assets/profile-pic.jpeg",
    },
    {
      studentName: "Nadhitha",
      category: "Topwear",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, culpa tempora magnam nemo quibusdam ea architecto aliquam ex eaque harum saepe dolore porro at tempore reiciendis, libero ad praesentium? Rerum.",
      image: "./assets/profile-pic.jpeg",
    },
    {
      studentName: "Nadhitha",
      category: "Jacket",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, culpa tempora magnam nemo quibusdam ea architecto aliquam ex eaque harum saepe dolore porro at tempore reiciendis, libero ad praesentium? Rerum.",
      image: "./assets/profile-pic.jpeg",
    },
    {
      studentName: "Nadhitha",
      category: "Bottomwear",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, culpa tempora magnam nemo quibusdam ea architecto aliquam ex eaque harum saepe dolore porro at tempore reiciendis, libero ad praesentium? Rerum.",
      image: "./assets/profile-pic.jpeg",
    },
    {
      studentName: "Nadhitha",
      category: "Jacket",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, culpa tempora magnam nemo quibusdam ea architecto aliquam ex eaque harum saepe dolore porro at tempore reiciendis, libero ad praesentium? Rerum.",
      image: "./assets/profile-pic.jpeg",
    },
    {
      studentName: "Nadhitha",
      category: "Bottomwear",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, culpa tempora magnam nemo quibusdam ea architecto aliquam ex eaque harum saepe dolore porro at tempore reiciendis, libero ad praesentium? Rerum.",
      image: "./assets/profile-pic.jpeg",
    },
  ],
};

for (let i of products.data) {
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

  // Button
  let button = document.createElement("button");
  button.textContent = "Check Out This Profile";
  infoContainer.appendChild(button);

  card.appendChild(infoContainer);
  document.getElementById("products").appendChild(card);
}
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  

// Handle the modals (popup on-click of the "Check Out Profile Button")
var modal = document.getElementById("myModal");
var btns = document.querySelectorAll(".collab button");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// Arrays to store saved and hired cards
let savedCards = [];
let hiredCards = [];

// ... (Existing code) ...

// Save button click event
document.querySelectorAll("#saveBtn").forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const clickedButton = event.target;
    console.log("Clicked Button:", clickedButton);

    const clickedCard = clickedButton.closest(".collab");
    console.log("Clicked Card:", clickedCard);
    console.log("Parent Card:", cc);

    if (!clickedCard) {
      alert("Could not find the card element.");
      return;
    }

    // Check if the card is already saved
    const isSaved = savedCards.includes(clickedCard);

    if (isSaved) {
      alert("Card is already saved.");
    } else {
      // Clone the card and append it to the saved cards container
      const savedCardClone = clickedCard.cloneNode(true);
      document.getElementById("saved-cards").appendChild(savedCardClone);
      savedCards.push(clickedCard);
      alert("Card saved successfully!");
    }
  });
});

// Hire button click event
document.querySelectorAll("#hireBtn").forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const clickedButton = event.target;
    console.log("Clicked Button:", clickedButton);

    const clickedCard = clickedButton.closest(".collab");
    console.log("Clicked Card:", clickedCard);

    if (!clickedCard) {
      alert("Could not find the card element.");
      return;
    }

    // Check if the card is already hired
    const isHired = hiredCards.includes(clickedCard);

    if (isHired) {
      alert("Card is already hired.");
    } else {
      // Clone the card and append it to the hired cards container
      const hiredCardClone = clickedCard.cloneNode(true);
      document.getElementById("hired-cards").appendChild(hiredCardClone);
      hiredCards.push(clickedCard);
      alert("Card hired successfully!");
    }
  });
});