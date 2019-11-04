import { HTMLStringLazy } from './views/lazy';
import { HTMLStringInfinite } from './views/infinite';
import { HTMLStringFastness } from './views/fastness';

import { aboutSectionLazy } from './templates/lazy/aboutSectionLazy';
import { dataLazy, resetCounterForImageLoader } from './templates/lazy/dataLazy';
import { imageSection } from './templates/lazy/imageSection';
import { imageObserverSingleton } from './index';

import { aboutSectionInfinite } from './templates/infinite/aboutSectionInfinite';
import { dataInfinite } from './templates/infinite/dataInfinite';
import { scrollSection } from './templates/infinite/scrollSection';

import { aboutSectionFastness } from './templates/fastness/aboutSectionFastness';
import { dataFastness } from './templates/fastness/dataFastness';
import { featureSection } from './templates/fastness/featureSection';

  // Register rout info for each route that will decide content in the SPA
  export const routes = [
    {
      path: '/',
      name: 'Root',
      navigationHandler: function() {
        document.getElementById('about').outerHTML = aboutSectionLazy;
        resetCounterForImageLoader();
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
        document.getElementById('about').outerHTML = aboutSectionInfinite;
        document.getElementById('data').outerHTML = dataInfinite;
        document.getElementById('content').outerHTML = scrollSection;
      },
      loadInitialPage: HTMLStringInfinite
    },
    {
      path: '/fastness',
      name: 'Fastness',
      navigationHandler: function() {
        document.getElementById('about').outerHTML = aboutSectionFastness;
        document.getElementById('data').outerHTML = dataFastness;
        document.getElementById('content').outerHTML = featureSection;
      },
      loadInitialPage: HTMLStringFastness
    }
  ];
