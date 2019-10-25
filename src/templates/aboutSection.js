import { browserSupportsIntersectionObserver } from '../helpers';

export const aboutSection = `
  <section class='about-section' role='contentinfo' aria-label='About the project'>
    ${browserSupportsIntersectionObserver
      ?
        `<p class='description'>
          Images will load when entering the viewport.
        </p>`
      :
        `<p class='description-error'>
          The browser you're using doesn't support IntersectionObserver :(
        </p>`
    }
  </section>`;
