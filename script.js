document.addEventListener("DOMContentLoaded", function () {
  let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "image.png",
      },
      {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "image.png",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "image.png",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "image.png",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "image.png",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "image.png",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "image.png",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "image.png",
      },
    ],
  };

  for (let i of products.data) {
    // Create Card
    let card = document.createElement("div");
    // Card should have category and should stay hidden intially
    card.classList.add("card", i.category, "hide");
    // Image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // Image Tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // Container
    let container = document.createElement("div");
    container.classList.add("container");
    // Product Name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    // Price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
});

// Parameter passed from button (Parameter same as catergory)
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    // Check if values equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Select All Cards
  let elements = document.querySelectorAll(".card");
  // Loop Through All Cards
  elements.forEach((element) => {
    // Display All Cards on 'all' Button Clicks
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      // Check if element contains cateogry class
      if (element.classList.contains(value)) {
        // Display Element Based on Category
        element.classList.remove("hide");
      } else {
        // Hide other elements
        element.classList.add("hide");
      }
    }
  });
}

// Search Button Click
document.getElementById("search").addEventListener("click", () => {
  // initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  // Loop Through All Elements
  elements.forEach((element, index) => {
    // Check if Text Includes the Search Value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      // Display Matching Card
      cards[index].classList.remove("hide");
    } else {
      // Hide Others
      cards[index].classList.add("hide");
    }
  });
});

// Initally Display all products
window.onload = () => {
  filterProduct("all");
};
