document.addEventListener("DOMContentLoaded", function() {
  var carouselImages = document.querySelectorAll(".carousel img");
  var carouselDots = document.querySelectorAll(".carousel-dot");
  var currentImageIndex = 0;
  var interval = setInterval(changeImage, 2000);

  function changeImage() {
    carouselImages[currentImageIndex].style.display = "none";
    carouselDots[currentImageIndex].classList.remove("active");

    currentImageIndex++;
    if (currentImageIndex >= carouselImages.length) {
      currentImageIndex = 0;
    }

    carouselImages[currentImageIndex].style.display = "block";
    carouselDots[currentImageIndex].classList.add("active");
  }

  // Add click event listeners to the dots
  carouselDots.forEach(function(dot, index) {
    dot.addEventListener("click", function() {
      carouselImages[currentImageIndex].style.display = "none";
      carouselDots[currentImageIndex].classList.remove("active");

      currentImageIndex = index;

      carouselImages[currentImageIndex].style.display = "block";
      carouselDots[currentImageIndex].classList.add("active");
    });
  });
});