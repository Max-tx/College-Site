
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myslide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("myslide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}


// script.js
const prevBtn = document.querySelector(".photo-content i:first-child");
const nextBtn = document.querySelector(".photo-content i:last-child");
const photoContainer = document.querySelector(".photo-container");

const cardWidth = 270; // Width of each card (including margin)
const containerWidth = photoContainer.offsetWidth; // Width of the photo container

const numVisibleCards = Math.floor(containerWidth - cardWidth); // Number of visible cards at a time

const autoplayInterval = 2000; // Autoplay interval in milliseconds
let autoplayTimer; // Reference to the autoplay timer

// Function to scroll the photo container to the next card
const scrollNext = () => {
    photoContainer.scrollBy({
        left: cardWidth,
        behavior: "smooth"
    });
};

// Function to scroll the photo container to the previous card
const scrollPrev = () => {
    photoContainer.scrollBy({
        left : -cardWidth,
        behavior: "smooth"
    });
};

// Function to start the autoplay timer
const startAutoplay = () => {
    autoplayTimer = setInterval(scrollNext, autoplayInterval);
};

// Function to stop the autoplay timer
const stopAutoplay = () => {
    clearInterval(autoplayTimer);
};
const continueAutoplay = () => {
    autoplayTimer = setInterval(scrollNext, autoplayInterval);
};

// Event listener for previous button click
prevBtn.addEventListener("click", () => {
    scrollPrev();
    stopAutoplay();// Stop autoplay when manually scrolling
    continueAutoplay(); 
});

// Event listener for next button click
nextBtn.addEventListener("click", () => {
    scrollNext();
    stopAutoplay(); // Stop autoplay when manually scrolling
    continueAutoplay(); 

});

// Start autoplay when the page loads
startAutoplay();










window.addEventListener('load', function() {
    var popup = document.getElementById('popup');
    var closeBtn = document.getElementById('closeBtn');
  
    popup.style.display = 'block';
  
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  });
  