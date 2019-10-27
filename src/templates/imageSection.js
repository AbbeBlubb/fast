import {
  browserSupportsIntersectionObserver,
  tinyTransparentGif,
  getShuffledEntriesIntoArray
} from '../helpers';


const arrayOfImageNames = getShuffledEntriesIntoArray(20, undefined);

const imageElements = arrayOfImageNames.map(element => `
  <img
    src=${browserSupportsIntersectionObserver ?  tinyTransparentGif : `assets/${element}.jpg`}
    class='lazy-image'
    data-src='assets/${element}.jpg'
    data-alt='Random photo'
    data-title='Random photo'>
`).join('');

export const imageSection = `
  <section class='image-section' role='contentinfo' aria-label='Section with photos'>
    ${imageElements}
  </section>
`;