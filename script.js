function buy() {
    alert("🛒 Product added to cart!");
} let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    showSlide();
}

// AUTO CHANGE EVERY 3 SECONDS
setInterval(nextSlide, 3000);