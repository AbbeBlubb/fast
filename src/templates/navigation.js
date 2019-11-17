export const navigationTabIsActive = function(activePath) {
  // Observe: when the inpsector is open, the hoover state can make it look like the focus is not working
  document
    .querySelectorAll('.navigation__button')
    .forEach(element => element.classList.remove('navigation__button--is-active'));

  document
    .querySelector(`[route='${activePath}']`)
    .classList.add('navigation__button--is-active');
};

export const navigation = `
  <nav class='navigation'>
    <button class='navigation__button' route='/'>Lazy</button>
    <button class='navigation__button' route='/infinite'>Infinite</button>
    <button class='navigation__button' route='/fastness'>Fastness</button>
  </nav>
`;