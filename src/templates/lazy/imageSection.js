import {
  browserSupportsIntersectionObserver,
  tinyTransparentGif,
  getShuffledEntriesIntoArray
} from '../../helpers';


const arrayOfImageNames = getShuffledEntriesIntoArray(20, undefined);

const imageElements = arrayOfImageNames.map(element => `
  <img
    src=${browserSupportsIntersectionObserver ?  tinyTransparentGif : require(`../../assets/${element}.jpg`)}
    class='image-section__lazy-image'
    data-src='assets/${element}.jpg'
    data-alt='Cheetahs in nature'
    data-title='Cheetah'>
`).join('');

export const imageSection = `
  <section class='image-section' role='contentinfo' aria-label='Section with photos' id='content'>
    ${imageElements}
  </section>
`;
