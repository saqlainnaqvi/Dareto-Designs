document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});


const gallery = document.querySelector('.gallery');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let scrollAmount = 0;
const scrollStep = 300;

nextBtn.addEventListener('click', () => {
    scrollAmount += scrollStep;
    gallery.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0; 
    gallery.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');
  
    questions.forEach(question => {
      question.addEventListener('click', function () {
        // Toggle active class
        this.classList.toggle('active');
  
        // Find the corresponding answer
        const answer = this.nextElementSibling;
  
        // Toggle answer display
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
        } else {
          answer.style.display = 'block';
        }
      });
    });
  });
  