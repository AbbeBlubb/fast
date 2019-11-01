import { HTMLStringNotFound } from './views/notFound';


export class Router {

  constructor(routes) {
    // routes must be first in order to not be undefined when used
    this.routes = routes;

    window.addEventListener('DOMContentLoaded', this.registerDOMRoutes.bind(this), false);

    // Popstate triggers if transition between two pages happens when pressing back/forward buttons in browser and on pushState
    window.addEventListener('popstate', this.popStateCallback.bind(this), false);
  }

  popStateCallback(event) {
    // When the browser first loads, it always fires a popstate event. So you need to determine if this popstate is yours or not.
    // https://stackoverflow.com/questions/5210034/can-i-prevent-history-popstate-from-triggering-on-initial-page-load
    if(!!event.state) {
      this.reactOnURLChange(window.location.pathname);
    }
  };

  // Function to be called in index.js to load the initial view
  loadInitialRoute(currentPath) {
    const app = document.getElementById('app');
    const routeToLoad = this.routes.find(routeObject => routeObject.path === currentPath);
    app.innerHTML = routeToLoad ? routeToLoad.loadInitialPage :  HTMLStringNotFound;
  };

  // Fires: 1, when popstate, 2, when btnNavigate after DOM button is clicked
  reactOnURLChange(currentPath) {
    const routeToLoad = this.routes.find(routeObject => routeObject.path === currentPath);
    routeToLoad
      ? routeToLoad.navigationHandler()
      : document.getElementById('app').innerHTML = HTMLStringNotFound;
  };

  // When click on navigation button, take the event and set the new path in the URL bar
  btnNavigate(event) {
    const btnRoutePath = event.target.attributes[1].value;
    // [0] is the element's attribute 'class', [1] is 'route'
    const routeToLoad = this.routes.find(routeObject => routeObject.path === btnRoutePath);
    if(!routeToLoad) {
      window.history.pushState({}, '', 'error');
      this.reactOnURLChange('error');
    } else {
      window.history.pushState({}, '', routeToLoad.path);
      this.reactOnURLChange(routeToLoad.path);
    }
  };

  registerDOMRoutes() {
    // The DOM nodes needs to be converted to an array in order to have array methods
    const DOMRoutes = Array.from(document.querySelectorAll('[route]'));
    DOMRoutes.forEach(route => {
      route.addEventListener('click', event => {
        event.preventDefault;
        this.btnNavigate(event);
      }, false);
      // The this inside the event listener callback will be the element that fired the event
      // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
      // https://stackoverflow.com/questions/43727516/javascript-how-adding-event-handler-inside-a-class-with-a-class-method-as-the-c/43727582
    });
  };
}
