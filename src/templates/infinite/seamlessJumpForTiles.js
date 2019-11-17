export const seamlessJumpForTiles = (isScrollDown, DOMListSize, currentIndex) => {

  // 20 / 2 = 10
  const increment = DOMListSize / 2;
  let firstIndex;

  if (isScrollDown) {
    // Bottom sentinel callback, isScrollDown=true
    // firstIndex = 0+10, 10+10, 20+10 ...
    firstIndex = currentIndex + increment;
  } else {
    // Top sentinel callback, isScrollDown=false
    // firstindex = 100-10-20
    firstIndex = currentIndex - increment;
  }

  if (firstIndex < 0) {
    firstIndex = 0;
  }

  return firstIndex;
};
