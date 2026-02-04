// Smooth hover effects or animations can go here

// Example: Fade-in sections on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;
    if(top < trigger){
      section.classList.add('active');
    }
  });
});
