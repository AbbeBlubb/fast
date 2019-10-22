import { HTMLString } from './HTMLString';
import '../styles/stylesheet.css';


// Insert sections in the DOM
document.getElementById('app').insertAdjacentHTML('afterbegin', HTMLString);




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


