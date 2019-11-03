import { browserSupportsIntersectionObserver }from './helpers';
import { oneImageHasBeenLoaded } from './templates/dataLazy';

export class ImageObserver {

  constructor() {
    this.images;
    this.imageObserver;
    this.options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
      // In Edge the threshold is evaluated like 0 and fires when the intersectionRatio is 0.0, why?
    };

    if(browserSupportsIntersectionObserver) {
      window.addEventListener('load', this.onLoaded.bind(this), false);
      // 'load', to be sure the CSS has been loaded, for the images width and height
    }
  };

  createObserver(options) {
    this.imageObserver = new IntersectionObserver(this.onIntersectionEvent, options);
    this.images.forEach(image => {
      this.imageObserver.observe(image);
    });
  };

  onLoaded() {
    this.images = document.querySelectorAll('.image-section__lazy-image');
    this.createObserver(this.options);
  }

   onIntersectionEvent(images, imageObserver) {
    // Loop through the images
    images.forEach(entry => {
      // Is the image in viewport?
      if (entry.isIntersecting) {
        // Load the image and stop watching. The image is accessible in entry.target
        console.log('Intersecting image: ', entry);
        const image = entry.target;
        image.src = image.dataset.src;
        image.alt = image.dataset.alt;
        image.title = image.dataset.title;
        image.classList.add('fade-in');
        // Because of 'this', imageObserver must be fed as arg to parent function
        imageObserver.unobserve(entry.target);
        oneImageHasBeenLoaded();
      }
    });
  }
}
