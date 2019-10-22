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
const imageElements = arrayOfImageNames.map(element => `<img class='lazy-image' data-src=assets/${element}.png data-alt='Random photo' data-title='Random photo'>`).join('');

const imageSection = `
  <section class='image-section' role='contentinfo' aria-label='Section with photos'>
    ${imageElements}
  </section>
`;

// Insert sections in the DOM
document.body.insertAdjacentHTML('afterbegin', header);
document.querySelector('header').insertAdjacentHTML('afterend', about);
document.body.insertAdjacentHTML('beforeend', imageSection);




let images;

const options = {
  root: null,
  rootMargin: '20px',
  threshold: 1.0
};

let imageObserver;

function onIntersectionEvent(images) {
  // Loop through the entries
  images.forEach(entry => {
    // Are we in viewport?
    if (entry.isIntersecting) {
      // Stop watching and load the image
      //preloadImage(entry.target);
      console.log(entry)
      const image = entry.target
      image.src = image.dataset.src
      image.alt = image.dataset.alt
      image.title = image.dataset.title
      imageObserver.unobserve(entry.target);
    }
  });
}

window.addEventListener('load', function() {
  images = document.querySelectorAll('.lazy-image');
  createObserver(options);
}, false);

function createObserver(options) {
  imageObserver = new IntersectionObserver(onIntersectionEvent, options);
  images.forEach(image => {
    imageObserver.observe(image);
  });
};


