document.addEventListener("DOMContentLoaded", function() {
  const heroText = document.querySelector('.hero-text');
  const heroImg = document.querySelector('.hero-img img');
  const h2 = document.querySelector('h2');
  

  heroText.classList.add('visible');
  heroImg.classList.add('visible');

  setTimeout(() => {
    h2.classList.add('visible');
}, 1000);
});