import '../styles/stylesheet.css';

// Create header
const header = `
  <header>
    <h1>The Lazy Loader</h1>
  </header>
`;

// Create the image section
const arrayOfImageNames = [];
for (let i = 1; i <= 20; i++) { arrayOfImageNames.push(`${i}`);}
const imageElements = arrayOfImageNames.map(element => `<img class='image' src=assets/${element}.png alt='Loaded image'>`).join('');

const imageSection = `
  <section class='image-section'>
    ${imageElements}
  </section>
`;

document.body.insertAdjacentHTML('afterbegin', header);
document.body.insertAdjacentHTML('beforeend', imageSection);
