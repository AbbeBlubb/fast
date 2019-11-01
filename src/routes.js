import { HTMLStringLazy } from './views/lazy';
import { HTMLStringInfinite } from './views/infinite';
import { HTMLStringFastness } from './views/fastness';

  // Register rout info for each route that will decide content in the SPA
  export const routes = [
    {
      path: '/',
      name: 'Root',
      navigationHandler: function() {console.log('Navigation -> Root')},
      loadInitialPage: HTMLStringLazy
    },
    {
      path: '/infinite',
      name: 'Infinite',
      navigationHandler: function() {console.log('Navigation -> Infinite')},
      loadInitialPage: HTMLStringInfinite
    },
    {
      path: '/fastness',
      name: 'Fastness',
      navigationHandler: function() {console.log('Navigation -> Fastness')},
      loadInitialPage: HTMLStringFastness
    }
  ];
