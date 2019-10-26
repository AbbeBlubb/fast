import { browserSupportsIntersectionObserver } from '../helpers';

export const aboutSection = `
  <section class='about' role='contentinfo' aria-label='About the project'>
    ${browserSupportsIntersectionObserver
      ?
        `<p class='about-description'>
          This page lazy-loads the images. Each Image will load when 20 % of the image height has entered the viewport.
        </p>`
      :
        `<p class='about-description--error'>
          The browser you're using doesn't support IntersectionObserver :(
        </p>`
    }
  </section>`;
