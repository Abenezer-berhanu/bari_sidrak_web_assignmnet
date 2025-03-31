// Menu item details data
const menuItems = {
  item1: {
    title: "Signature Dish",
    description:
      "Our chef's special creation featuring premium ingredients and unique flavors. This dish represents the perfect blend of traditional and modern culinary techniques.",
    price: "$24.99",
    image: "images/dish1.jpg",
    ingredients: [
      "Fresh herbs",
      "Premium meat",
      "Seasonal vegetables",
      "Special sauce",
    ],
  },
  item2: {
    title: "Seafood Pasta",
    description:
      "Fresh seafood with homemade pasta, prepared with the finest Mediterranean ingredients. A perfect combination of flavors from the sea.",
    price: "$29.99",
    image: "images/dish2.jpg",
    ingredients: [
      "Fresh seafood",
      "Homemade pasta",
      "White wine sauce",
      "Fresh herbs",
    ],
  },
  item3: {
    title: "Grilled Steak",
    description:
      "Premium cut with special seasoning, grilled to perfection. Served with seasonal vegetables and our signature sauce.",
    price: "$34.99",
    image: "images/dish3.jpg",
    ingredients: [
      "Premium beef",
      "Special seasoning",
      "Seasonal vegetables",
      "Signature sauce",
    ],
  },
  drink1: {
    title: "Signature Cocktail",
    description:
      "Our special blend of premium spirits, crafted by our expert mixologists. A unique combination that will delight your senses.",
    price: "$12.99",
    image: "images/drink1.jpg",
    ingredients: ["Premium vodka", "Fresh fruits", "Special syrup", "Garnish"],
  },
  drink2: {
    title: "Wine Selection",
    description:
      "Curated wines from around the world, carefully selected to complement our menu. Each wine tells its own story.",
    price: "$9.99/glass",
    image: "images/drink2.jpg",
    ingredients: ["Selected wines", "Proper glassware", "Expert pairing"],
  },
  drink3: {
    title: "Craft Beer",
    description:
      "Local and international craft beers, offering a wide range of styles and flavors. Perfect for any occasion.",
    price: "$8.99",
    image: "images/drink3.jpg",
    ingredients: [
      "Local craft beers",
      "International selections",
      "Proper serving temperature",
    ],
  },
};

// Mobile navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
  hamburger.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.style.display = "none";
    hamburger.classList.remove("active");
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.style.display = "none";
    hamburger.classList.remove("active");
  });
});

// Menu item click handler
document.querySelectorAll(".menu-card, .drink-card").forEach((card) => {
  card.addEventListener("click", () => {
    const itemId = card.getAttribute("data-item");
    showItemDetails(itemId);
  });
});

// Show item details in modal
function showItemDetails(itemId) {
  const item = menuItems[itemId];
  const modal = document.getElementById("item-detail");
  const modalBody = modal.querySelector(".modal-body");

  modalBody.innerHTML = `
        <img src="${item.image}" alt="${
    item.title
  }" style="width: 100%; height: 300px; object-fit: cover; border-radius: 5px;">
        <h2 style="margin: 1rem 0;">${item.title}</h2>
        <p style="color: #666; margin-bottom: 1rem;">${item.description}</p>
        <h3 style="margin: 1rem 0;">Ingredients:</h3>
        <ul style="list-style: none; margin-bottom: 1rem;">
            ${item.ingredients
              .map((ingredient) => `<li>• ${ingredient}</li>`)
              .join("")}
        </ul>
        <span style="font-size: 1.2rem; font-weight: bold; color: #c8a97e;">${
          item.price
        }</span>
    `;

  modal.style.display = "block";
}

// Close modal when clicking the close button
document.querySelector(".close-button").addEventListener("click", () => {
  document.getElementById("item-detail").style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  const modal = document.getElementById("item-detail");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
