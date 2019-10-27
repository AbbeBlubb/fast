export const scrollToTopBtn = `
  <button class='scroll-to-top'>
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      width="30" height="30"
      viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0V0z"/>
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
    </svg>
  </button>
`;

// The scroll-to-top button will be targeted after the DOM has loaded the elements (but before it has fully loaded the CSS and JS)
let targetScrollToTopBtn = null;

// Scroll to top functionality
window.addEventListener('DOMContentLoaded', function() {
  targetScrollToTopBtn = document.querySelector('.scroll-to-top');
  targetScrollToTopBtn
    .addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
});

// Class toggeling for the animation
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    if (!targetScrollToTopBtn.classList.contains('btn-entrance')) {
      targetScrollToTopBtn.classList.remove('btn-exit');
      targetScrollToTopBtn.classList.add('btn-entrance');
      targetScrollToTopBtn.style.display = 'block';
    }
  } else {
    if (targetScrollToTopBtn.classList.contains('btn-entrance')) {
      targetScrollToTopBtn.classList.remove('btn-entrance');
      targetScrollToTopBtn.classList.add('btn-exit');
      this.setTimeout(function() {
        targetScrollToTopBtn.style.display = 'none';
      }, 250);
      // The timer needed in order to see the animation,
      // but is also a risk: if user makes many fast scrolls in the intersection, the element will then have the class "btn-entrance" at the same time as styling 'display:none'
      }
    }
  }
);
