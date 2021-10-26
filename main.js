// Variable Declarations
const navGallery = document.querySelector("#nav-gallery");
const navDropDown = document.querySelector(".nav-dropdown");
const navUl = document.querySelector(".nav-ul");
const collapseIcon = document.querySelector(".collapse-icon");
const closeNav = document.querySelector(".close-nav");
const galleryItem = document.querySelectorAll(".gallery-item");
const galleryImage = document.querySelectorAll(".gallery-item img");
const galleryMenus = document.querySelectorAll(".gallery-menus");
const showAll = document.querySelector("#show-all");
const musicVideos = document.querySelector("#music-videos");
const events = document.querySelector("#events");
const musicVideo = document.querySelectorAll(".music-video");
const someEvent = document.querySelectorAll(".event");
// ===================================================================

// Animate on Scroll Script
AOS.init({
  disable: () => {
    return window.innerWidth < 768;
  },
  offset: 400,
  duration: 2000,
  delay: 2000,
  once: true
});
// ================================

// Toggle display Nav Gallery Dropdown
navGallery.addEventListener("click", () => {
  navDropDown.classList.toggle("show");
})

// Toggle Navbar
collapseIcon.addEventListener("click", () => {
  navUl.classList.add("flex-show");
  closeNav.classList.add("show");
})

// Close Navbar
closeNav.addEventListener("click", () => {
  navUl.classList.remove("flex-show");
  closeNav.classList.remove("show");
})
// =============================================

// Owl Carousel Script
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 1000,
    smartSpeed: 1500,
    autoplayHoverPause: true
  });
});
// ====================================

// Toggle Display of Gallery Menus when hover on Gallery Item
for(let i = 0; i < galleryImage.length; i++) {
  galleryItem[i].addEventListener("mouseenter", () => {
    galleryImage[i].classList.add("image-hover");
    galleryMenus[i].classList.add("show");
  })

  galleryItem[i].addEventListener("mouseleave", () => {
    galleryImage[i].classList.remove("image-hover");
    galleryMenus[i].classList.remove("show");
  })
}

// ============================================================

// Toggle Gallery Selection
const displayAll = () => {
  musicVideo.forEach(video => {
    video.style.display = "block";
  })
  someEvent.forEach(event => {
    event.style.display = "block";
  })
  showAll.classList.add("active");
  musicVideos.classList.remove("active");
  events.classList.remove("active");
}

const displayOnlyMusic = () => {
  musicVideo.forEach(video => {
    video.style.display = "block";
  })
  someEvent.forEach(event => {
    event.style.display = "none";
  })
  showAll.classList.remove("active");
  musicVideos.classList.add("active");
  events.classList.remove("active");
}

const displayOnlyEvent = () => {
  musicVideo.forEach(video => {
    video.style.display = "none";
  })
  someEvent.forEach(event => {
    event.style.display = "block";
  })
  showAll.classList.remove("active");
  musicVideos.classList.remove("active");
  events.classList.add("active");
}

showAll.addEventListener("click", displayAll);
musicVideos.addEventListener("click", displayOnlyMusic);
events.addEventListener("click", displayOnlyEvent);
//======================================================
