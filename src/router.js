import {infiniteView} from './infinite';

const Router = function(routerName, routesArray) {
  return {
    routerName,
    routesArray
  };
};

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

let currentPath = window.location.pathname;
if (currentPath === '/infinite') {
  document.getElementById('app').outerHTML = infiniteView;
}

console.log(currentPath)
