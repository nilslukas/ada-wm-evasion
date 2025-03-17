document.addEventListener('DOMContentLoaded', () => {
const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const slideCount = slides.length;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.carousel-indicators');
const slideCounter = document.querySelector('.slide-counter');

let currentIndex = 0;

// Create indicator dots
slides.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => {
    goToSlide(index);
    });
    indicatorsContainer.appendChild(indicator);
});

const indicators = Array.from(document.querySelectorAll('.indicator'));

// Set up event listeners
prevButton.addEventListener('click', () => {
    if (currentIndex === 0) {
    goToSlide(slideCount - 1);
    } else {
    goToSlide(currentIndex - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex === slideCount - 1) {
    goToSlide(0);
    } else {
    goToSlide(currentIndex + 1);
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
    prevButton.click();
    } else if (e.key === 'ArrowRight') {
    nextButton.click();
    }
});

function goToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
    
    // Update indicators
    indicators.forEach((indicator, i) => {
    if (i === currentIndex) {
        indicator.classList.add('active');
    } else {
        indicator.classList.remove('active');
    }
    });
    
    // Update counter
    slideCounter.textContent = `${currentIndex + 1}/${slideCount}`;
}

// Initialize
goToSlide(0);
});