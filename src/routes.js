import { HTMLStringLazy } from './views/lazy';
import { HTMLStringInfinite } from './views/infinite';
import { HTMLStringFastness } from './views/fastness';

import { aboutSectionLazy } from './templates/aboutSectionLazy';
import { dataLazy, resetCounterForImageLoader } from './templates/dataLazy';
import { imageSection } from './templates/imageSection';
import { ImageObserver } from './ImageObserver';

import { aboutSectionInfinite } from './templates/aboutSectionInfinite';
import { dataInfinite } from './templates/dataInfinite';
import { scrollSection } from './templates/scrollSection';

import { aboutSectionFastness } from './templates/aboutSectionFastness';
import { dataFastness } from './templates/dataFastness';
import { featureSection } from './templates/featureSection';

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
        const imageObserverSingleton = new ImageObserver();
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
