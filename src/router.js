import {infiniteView} from './infinite';




    let app = null;
    let activeRoutes = null;
    let currentPath = window.location.pathname;

    // Register rout info for each route that will decide content in the SPA
    const routes = [
      {
        path: '/',
        name: 'Root'
      },
      {
        path: '/infinite',
        name: 'Infinite'
      },
      {
        path: '/fastness',
        name: 'Fastness'
      }
    ];

    // DOM -> Get the active attribute routes -> attatach event listeners -> on click -> pushState
    window.addEventListener('DOMContentLoaded', function() {
      app = document.getElementById('app');
      // The DOM nodes needs to be converted to an array in order to have array methods
      activeRoutes = Array.from(document.querySelectorAll('[route]'));
      activeRoutes.forEach(function(route) {
        route.addEventListener('click', navigate, false);
      });
    });

    //WORKS - triggered only when pressing back-button (transition between two pages)
    window.addEventListener('popstate', function(popstateEvent) {
      console.log('pop', popstateEvent)
      const location = window.location.pathname
      console.log(location)
      reactOnURLChange(location);
    });


  // When click on navigation button, take the event and set the new path in the URL bar
  const navigate = function(event) {
    const btnRoutePath = event.target.attributes[0].value;
    const targetRoute = routes.filter(function(registeredRouteInfo) {
      return registeredRouteInfo.path === btnRoutePath;
    })[0];

    if(!targetRoute) {
      window.history.pushState({}, '', 'error');
      reactOnURLChange('error');
    } else {
      window.history.pushState({}, '', targetRoute.path);
      reactOnURLChange(targetRoute.path);
    }
  };

// React when URL bar changes, needs litsener . App is null if the value is not set after dom content loaded
  function reactOnURLChange(currentPath) {
    //app = document.getElementById('app');
    switch (currentPath) {
      case '/':
        app.innerHTML = `<div id='app'>Root</div>`;
        break;
      case '/infinite':
        app.innerHTML = `<div id='app'>Infinite</div>`;
        break;
      case '/fastness':
        app.innerHTML = `<div id='app'>Fastness</div>`;
        break;
      default:
        app.innerHTML = `<div id='app'>404</div>`;
    }
  }


