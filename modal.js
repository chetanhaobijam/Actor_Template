// Toggle Gallery Modal
// Modal Lightbox
const modal = document.querySelector(".my-modal");
const openModal = () => {
  modal.style.display = "block";
}
const closeModal = () => {
  modal.style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = n => showSlides(slideIndex += n);

const currentSlide = n => showSlides(slideIndex = n);

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

window.addEventListener("keydown", (e) => {
  if(e.key === "Escape") {
    closeModal();
  }
})
// ====================================================