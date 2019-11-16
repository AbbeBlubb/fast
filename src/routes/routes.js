import { HTMLStringLazy } from '../views/lazy';
import { HTMLStringInfinite } from '../views/infinite';
import { HTMLStringFastness } from '../views/fastness';

import { aboutLazy } from '../templates/lazy/aboutLazy';
import { dataLazy } from '../templates/lazy/dataLazy';
import { imageSection } from '../templates/lazy/imageSection';
import { imageObserverSingleton, eventBusSingleton } from '../index';

import { aboutInfinite } from '../templates/infinite/aboutInfinite';
import { dataInfinite } from '../templates/infinite/dataInfinite';
import { scrollSection } from '../templates/infinite/scrollSection';

import { aboutFastness } from '../templates/fastness/aboutFastness';
import { dataFastness } from '../templates/fastness/dataFastness';
import { featureSection } from '../templates/fastness/featureSection';
import { temporaryStart } from '../templates/infinite/ScrollObserver'; // THIS FUNCTION IS TEMPORARY


  // Register rout info for each route that will decide content in the SPA
  export const routes = [
    {
      path: '/',
      name: 'Root',
      navigationHandler: function() {
        document.getElementById('about').outerHTML = aboutLazy;
        eventBusSingleton.publish('resetImageCounter');
        document.getElementById('data').outerHTML = dataLazy;
        document.getElementById('content').outerHTML = imageSection;
        imageObserverSingleton.onLoaded();
      },
      loadInitialPage: HTMLStringLazy
    },
    {
      path: '/infinite',
      name: 'Infinite',
      navigationHandler: function() {
        document.getElementById('about').outerHTML = aboutInfinite;
        eventBusSingleton.publish('resetRecyclingCounter');
        document.getElementById('data').outerHTML = dataInfinite;
        document.getElementById('content').outerHTML = scrollSection;
        temporaryStart();
      },
      loadInitialPage: HTMLStringInfinite
    },
    {
      path: '/fastness',
      name: 'Fastness',
      navigationHandler: function() {
        document.getElementById('about').outerHTML = aboutFastness;
        document.getElementById('data').outerHTML = dataFastness;
        document.getElementById('content').outerHTML = featureSection;
      },
      loadInitialPage: HTMLStringFastness
    }
  ];
