// script.js

// 1. Preloader Fade Out
window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.classList.add('hidden'); // Assumes you have CSS to fade out
    setTimeout(() => preloader.remove(), 600);
  }
});

// 2. DOMContentLoaded Initialization
document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('.nav-link, .page-scroll').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetID = this.getAttribute('href');
      if (targetID && targetID.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetID);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
  
  // Close Responsive Navigation on Link Click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
  
  // Navbar Underline on Hover (using vanilla JS)
  const navLinks = document.querySelectorAll('.navbar-dark .navbar-nav .nav-link');
  const navBarUnderline = document.querySelector('.navbar-dark .navbar-nav .nav-underline');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function () {
      const left = this.offsetLeft + (this.clientWidth - this.offsetWidth) / 2 - 5;
      const width = this.offsetWidth + 10;
      if (navBarUnderline) {
        navBarUnderline.style.left = left + 'px';
        navBarUnderline.style.width = width + 'px';
      }
    });
    link.addEventListener('mouseleave', function () {
      if (navBarUnderline) {
        navBarUnderline.style.width = '0';
      }
    });
  });
  
  // Typewriter Effect (Vanilla JS)
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement) {
    const sentences = [
      'Data empowered.',
      'MBA and MEd Candidate.',
      'Envisioning the future of education.'
    ];
    let currentSentence = 0;
    function typeSentence(sentence, callback) {
      let index = 0;
      function type() {
        typewriterElement.textContent += sentence.charAt(index);
        index++;
        if (index < sentence.length) {
          setTimeout(type, 100);
        } else {
          setTimeout(callback, 1500);
        }
      }
      type();
    }
    function deleteSentence(callback) {
      function del() {
        typewriterElement.textContent = typewriterElement.textContent.slice(0, -1);
        if (typewriterElement.textContent.length > 0) {
          setTimeout(del, 100);
        } else {
          setTimeout(callback, 1500);
        }
      }
      del();
    }
    function runTypewriter() {
      typeSentence(sentences[currentSentence], function () {
        deleteSentence(function () {
          currentSentence = (currentSentence + 1) % sentences.length;
          runTypewriter();
        });
      });
    }
    runTypewriter();
  }
  
  // Initialize Glide.js Carousel
  if (typeof Glide !== 'undefined') {
    new Glide('.project-carousel', {
      type: 'carousel',
      autoplay: 5000,
      perView: 1,
      hoverpause: true
    }).mount();
  }
});
