import {
  browserSupportsIntersectionObserver,
  tinyTransparentGif
} from './helpers';


// Create header
const header = `
  <header>
    <h1>The Lazy Loader</h1>
  </header>
`;

// Create description
const about = `
  ${browserSupportsIntersectionObserver
    ?
      `<p class='description'>
        The images will load when entering the viewport.
      </p>`
    :
      `<p class='description-error'>
        The browser you're using doesn't support IntersectionObserver :(
      </p>`
}`;

// Create the image section
const arrayOfImageNames = [];
for (let i = 1; i <= 20; i++) { arrayOfImageNames.push(`${i}`);}
const imageElements = arrayOfImageNames.map(element => `
  <img
    src=${browserSupportsIntersectionObserver ?  tinyTransparentGif : `assets/${element}.png`}
    class='lazy-image'
    data-src='assets/${element}.png'
    data-alt='Random photo'
    data-title='Random photo'>
`).join('');

const imageSection = `
  <section class='image-section' role='contentinfo' aria-label='Section with photos'>
    ${imageElements}
  </section>
`;

// Add all the HTML into one string
export const HTMLString = header + about + imageSection;
