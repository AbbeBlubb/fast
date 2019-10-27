class OutlineHandler {

  constructor() {
    // Compatibility - *if* device has certain GlobalEventHandler, then set a specific event listener
    if ('onkeydown' in window) {
      //console.log('Window has onkeydown');
      window.addEventListener('keydown', this.userIsTabbing.bind(this), false);
    }
    if ('onmousedown' in window) {
      //console.log('Window has onmousedown');
      window.addEventListener('mousedown', this.userIsClicking.bind(this), false);
    }
  }

  userIsTabbing(e) {
    // If the pressed key is the tab key, and, if there isn't a classname of 'user-is-tabbing' in the body, then, insert that classname
    if (e.keyCode === 9 && !document.body.classList.contains('user-is-tabbing')) {
      document.body.classList.add('user-is-tabbing');
    }
  }

  userIsClicking() {
    // If there's a classname of 'user-is-tabbing' in the body, then, delete that classname
    if(document.body.classList.contains('user-is-tabbing')) {
      document.body.classList.remove('user-is-tabbing');
    }
  }
}

export const outlineHandlerSingleton = new OutlineHandler();
