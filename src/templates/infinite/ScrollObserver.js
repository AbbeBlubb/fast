import { tile } from './tile';
import { seamlessJumpForTiles } from './seamlessJumpForTiles';
import { adjustPaddings } from './adjustPaddings';
import { recycleDOM } from './recycleDOM';
import { eventBusSingleton } from '../../index';


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
    container.insertAdjacentHTML('beforeend', tile(i + 1, DOMListSize, DB[i].indexNumber + 1, DBSize));
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
      if (entry.target.id === 'tile-1') {
        topSentinelCallback(entry);
      } else if (entry.target.id === `tile-${DOMListSize}`) {
        bottomSentinelCallback(entry);
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
export const temporaryStart = () => start();


// Var for the sentinel callbacks
let currentIndex = 0;


// Callback for the bottom sentinel

let bottomSentinelPreviousY = 0;
let bottomSentinelPreviousRatio = 0;

const bottomSentinelCallback = entry => {

  // Return if current index is 180
  if (currentIndex === DBSize - DOMListSize) {
    return;
  }

  // Pixels from the elements top relative to the viewports top-Y. The more down the element is, the higher px value.
  const currentY = entry.boundingClientRect.top;
  // .intersectionRatio = % of the intersecting height of the tile
  const currentRatio = entry.intersectionRatio;
  // .isIntersecting = true if the intersection ratio equals at least to the given options threshold, here 0.5
  const isIntersecting = entry.isIntersecting;
  console.log(currentY, currentRatio, isIntersecting)

  // conditional check for Scrolling down
  if (
    // The current bottom sentinel tile (when intersecting) has a lower px value than the same tile's previous position when loaded
    // Px-Y now is < when loaded more far away
    currentY < bottomSentinelPreviousY &&
    // On load, the ratio is 0. On intersection and bottomSEntinelCallback, the ratio is 0.+
    // Ratio is > than when loaded far away
    currentRatio > bottomSentinelPreviousRatio &&
    isIntersecting
  ) {
    // firstIndex will be where the index starts in DB for rendering on DOM list
    const firstIndex = seamlessJumpForTiles(true, DOMListSize, currentIndex);
    adjustPaddings(true, DOMListSize);
    recycleDOM(firstIndex, DOMListSize);
    currentIndex = firstIndex;

    eventBusSingleton.publish('oneRecyclingHasBeenDone');
  }

  bottomSentinelPreviousY = currentY;
  bottomSentinelPreviousRatio = currentRatio;
};


// Callback for the top sentinel

let topSentinelPreviousY = 0;
let topSentinelPreviousRatio = 0;

const topSentinelCallback = entry => {

  const currentY = entry.boundingClientRect.top;
  const currentRatio = entry.intersectionRatio;
  const isIntersecting = entry.isIntersecting;

  // conditional check for Scrolling up
  if (
    currentY > topSentinelPreviousY &&
    isIntersecting &&
    currentRatio >= topSentinelPreviousRatio &&
    currentIndex !== 0
  ) {
    const firstIndex = seamlessJumpForTiles(false, DOMListSize, currentIndex);
    adjustPaddings(false, DOMListSize);
    recycleDOM(firstIndex, DOMListSize);
    currentIndex = firstIndex;

    eventBusSingleton.publish('oneRecyclingHasBeenDone');
  }

  topSentinelPreviousY = currentY;
  topSentinelPreviousRatio = currentRatio;

};
