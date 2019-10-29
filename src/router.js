  let app = null;
  let activeRoutes = null;



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

  // React when URL bar changes, needs litsener . App is null if the value is not set after dom content loaded
  const reactOnURLChange = function(currentPath) {
    switch (currentPath) {
      case '/':
        app.insertAdjacentHTML('beforeBegin', `<div id='app'>Root</div>`);
        break;
      case '/infinite':
        app.insertAdjacentHTML('beforeBegin',`<div id='app'>Infinite</div>`);
        break;
      case '/fastness':
        app.insertAdjacentHTML('beforeBegin', `<div id='app'>Fastness</div>`);
        break;
      default:
        console.log(currentPath)
        app.insertAdjacentHTML('beforeBegin', `<div id='app'>404</div>`);
    }
  };

  // When click on navigation button, take the event and set the new path in the URL bar
  const navigate = function(event) {

    // .attributes avser en array med attributen. Här är attributes[0] 'class' och attributes[1] 'route'
    //console.log(event.target.attributes)
    const btnRoutePath = event.target.attributes[1].value;
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

  // DOM -> Get the active attribute routes -> attatach event listeners -> on click -> pushState
  window.addEventListener('DOMContentLoaded', function() {
    app = document.getElementById('app');
    // The DOM nodes needs to be converted to an array in order to have array methods
    activeRoutes = Array.from(document.querySelectorAll('[route]'));
    activeRoutes.forEach(function(route) {
      route.addEventListener('click', navigate, false);
    });
  });

  // Popstate triggers if transition between two pages happens when pressing back/forward buttons in browser and on pushState
  window.addEventListener('popstate', function(popstateEvent) {
    reactOnURLChange(window.location.pathname);
  });
