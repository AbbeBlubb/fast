import {infiniteView} from './infinite';

const Router = function(routerName, routesArray) {
  return {
    routerName,
    routesArray
  };
};

// Register rout info for each route
const projectRouter = new Router ('projectRouter', [
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
]);

let app = null;
let activeRoutes = null;

// Set path in the URL bar
function navigate(event) {
  const eventRoutePath = event.target.attributes[0].value;
  const routeDetailsFromRegisteredRoutes = projectRouter.routesArray.filter(function(routeObject) {
    return routeObject.path === eventRoutePath;
  })[0];

  console.log(eventRoutePath, routeDetailsFromRegisteredRoutes);

  if(!routeDetailsFromRegisteredRoutes) {
    window.history.pushState({}, '', 'error')
  }
  else {
    window.history.pushState({}, '', routeDetailsFromRegisteredRoutes.path)
  }

}

// Get the active attribute routes to attatach event listeners
window.addEventListener('DOMContentLoaded', function() {
  app = document.getElementById('app');
  // The DOM nodes needs to be converted to an array in order to have array methods
  activeRoutes = Array.from(document.querySelectorAll('[route]'));
  console.log(app);

  activeRoutes.forEach(function(route) {
    route.addEventListener('click', navigate, false);
  });
});

let currentPath = window.location.pathname;

// React when URL bar changes, needs litsener . App is null if the value is not set after dom content loaded
switch (currentPath) {
  case '/':
    //app.outerHTML = 'will render root';
    break;
  case '/infinite':
    app = document.getElementById('app');
    app.outerHTML = infiniteView;
    break;
  case '/fastness':
    app = document.getElementById('app');
    app.outerHTML = 'fastness';
    break;
  default:
    app = document.getElementById('app');
    app.outerHTML = '404';
}

console.log(currentPath)
