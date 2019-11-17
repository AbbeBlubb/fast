const extractNumberFromString = numStr => Number(numStr.substring(0, numStr.length - 2));

export const adjustPaddings = (isScrollDown, DOMListSize) => {

  const container = document.querySelector('.scroll-section__ul');
  console.log('Current padding-top: ', container.style.paddingTop);
  const currentPaddingTop = extractNumberFromString(container.style.paddingTop);
  const currentPaddingBottom = extractNumberFromString(container.style.paddingBottom);
  // The tile is 140px heigh, and margin is 30px on top and 50px on btm, equals to 50px
  const remPaddingsVal = 190 * (DOMListSize / 2);

  if (isScrollDown) {
    container.style.paddingTop = currentPaddingTop + remPaddingsVal + 'px';
    container.style.paddingBottom = currentPaddingBottom === 0 ? '0px' : currentPaddingBottom - remPaddingsVal + 'px';
  } else {
    container.style.paddingTop = currentPaddingTop === 0 ? '0px' : currentPaddingTop - remPaddingsVal + 'px';
    container.style.paddingBottom = currentPaddingBottom + remPaddingsVal + 'px';
  }
};
