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

window.addEventListener('DOMContentLoaded', function() {
  document
    .querySelector('.scroll-to-top')
    .addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
});
