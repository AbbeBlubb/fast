export const recycleDOM = (firstIndex, DOMListSize) => {
  // DOMListSize is 20, virutally representing the DOM elements:
  for (let i = 0; i < DOMListSize; i++) {
    // Get each of the elements with the CSS id
    const targetTile = document.querySelector(`#tile-${i + 1}`);
    // +1 because the index starts with 0
    targetTile.querySelector('.tile-info__index').innerText = `${firstIndex + i + 1}`;
  }
};
