const slides = document.querySelectorAll('.slide');

slides.forEach( slide => {
   slide.addEventListener('click', () => {
       clearAllActive();
       slide.classList.add('active');
   });
});

const clearAllActive = () => {
    slides.forEach( slide => {
       slide.classList.remove('active');
    });
}
