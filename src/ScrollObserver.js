import { tile } from './templates/infinite/tile';


// List of all possible entries, simulating a DB
let DB = [];
// Number of entries for the DB
const DBSize = 200;
// Number of elements to have in the DOM
const DOMListSize = 20;


const initDB = num => {
  const db = [];

  for (let i = 0; i < num; i++) {
    db.push({
      indexNumber: i
    });
  }

  return db;
};

const initDOMList = num => {
  const container = document.querySelector('.scroll-section__ul');

  for (let i = 0; i < num; i++) {
    container.insertAdjacentHTML('beforeend', tile(i+1));
  }
};

const initIntersectionObserver = () => {

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
    // In Edge the threshold is evaluated like 0 and fires when the intersectionRatio is 0.0, why?
  };

  const callback = entries => {
    entries.forEach(entry => {
      if (entry.target.id === 'tile-0') {
        console.log(entry);
      } else if (entry.target.id === `tile-${DOMListSize}`) {
        console.log(entry);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(document.querySelector('#tile-1'));
  observer.observe(document.querySelector(`#tile-${DOMListSize}`)); // The id for the tile is index-num + 1

};

const start = () => {
  DB = initDB(DBSize);
  initDOMList(DOMListSize);
  initIntersectionObserver();
};

window.onload = () => start();

