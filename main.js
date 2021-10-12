// Variable Declarations
const navGallery = document.querySelector("#nav-gallery");
const navDropDown = document.querySelector(".nav-dropdown");

// Toggle display Nav Gallery Dropdown
navGallery.addEventListener("mouseenter", () => {
  navDropDown.classList.add("show");
})

navDropDown.addEventListener("mouseleave", () => {
  navDropDown.classList.remove("show");
})

