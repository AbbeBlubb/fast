// Logic for the observer and infinite scroll; try later to make a general observer

// Article: https://medium.com/walmartlabs/infinite-scrolling-the-right-way-11b098a08815
// Code (article is not complete; code is complete): https://jsfiddle.net/valkyris/43fmku20/693/
// Have maby 20 elements on screen
// when intersecting a sentinel, change the attribute of those 20 elements, and at the same time, increment the padding on top
// This way, the elements are pushed down and changed (change maby 10 of 20?)
// And no need to add / remove elements form the DOM


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
      userPhotoURL: i
    });
  }
  console.log(db)
  return db;
};

const initList = num => {
  const container = document.querySelector('.scroll-section__ul');

  // Create the tiles with id:s and insert in the container
  for (let i = 0; i < num; i++) {

    const tile = `
      <li class='scroll-section__li' id='tile-${i}'>
        <img src=${DB[i]}>
      </li>
    `;

    container.insertAdjacentHTML('beforeend', tile);
  }

};

const start = () => {
  DB = initDB(DBSize);
  initList(DOMListSize);
  //initIntersectionObserver();
};

window.onload = () => start();

