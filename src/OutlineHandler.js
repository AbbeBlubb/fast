export class OutlineHandler {

  constructor() {
    // Compatibility - *if* device has a certain GlobalEventHandler, then set a specific event listener
    if ('onkeydown' in window) {
      window.addEventListener('keydown', this.userIsTabbing.bind(this), false);
    }
    if ('onmousedown' in window) {
      window.addEventListener('mousedown', this.userIsClicking.bind(this), false);
    }

    this.classForCSS = 'user-is-tabbing';
  }

  userIsTabbing(e) {
    // If the pressed key is the tab key, and, if there isn't a classname of 'user-is-tabbing' in the body, then, insert that classname
    if (e.keyCode === 9 && !document.body.classList.contains(this.classForCSS)) {
      document.body.classList.add(this.classForCSS);
    }
  }

  userIsClicking() {
    // If there's a classname of 'user-is-tabbing' in the body, then, delete that classname
    if(document.body.classList.contains(this.classForCSS)) {
      document.body.classList.remove(this.classForCSS);
    }
  }
}
