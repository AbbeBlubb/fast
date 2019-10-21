import '../styles/stylesheet.css';

// Create header
const header = `
  <header>
    <h1>The Lazy Loader</h1>
  </header>
`;

// Create description
const about = `
  <p class='description'>
    The images will load when entering the viewport.
  </p>
`;

// Create the image section
const arrayOfImageNames = [];
for (let i = 1; i <= 20; i++) { arrayOfImageNames.push(`${i}`);}
const imageElements = arrayOfImageNames.map(element => `<img class='image' src=assets/${element}.png alt='Random photo' title='Random photo'>`).join('');

const imageSection = `
  <section class='image-section' role='contentinfo' aria-label='Section with photos'>
    ${imageElements}
  </section>
`;

// Insert sections in the DOM
document.body.insertAdjacentHTML('afterbegin', header);
document.querySelector('header').insertAdjacentHTML('afterend', about);
document.body.insertAdjacentHTML('beforeend', imageSection);
