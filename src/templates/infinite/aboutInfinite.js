export const aboutInfinite = `
  <section class='about' role='contentinfo' aria-label='About the project' id='about'>
    <p class='about-description'>
      There's 20 DOM elements in the scroll section below.
      Those elements will be recycled when scrolling, instead of adding elements to the DOM or reloading elements in the DOM.
      When the 1st or the 20:th element is intersecting the viewport,
      the elements will be moved and the content of the entering elements will be changed.
      This gives an effect of infinite scroll at the same time the DOM is as light and fast as possible.
    </p>
  </section>`;
