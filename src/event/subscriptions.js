import { navigationTabIsActive } from '../templates/navigation';
import { oneImageHasBeenLoaded, resetCounterForImageLoader } from '../templates/lazy/dataLazy';
import { oneRecyclingHasBeenDone, resetCounterForRecycling } from '../templates/infinite/dataInfinite';

/**
 * Pre-made subscriptions for the event bus
 *
 * Contract / data format:
 *
 * {
 *   event1: {
 *     1: func1,
 *     2: func2
 *   },
 *   event2: {
 *     3: func3
 *   }
 * }
 **/

export const subscriptions = {

  navigationTabIsActive: {
    hardCoded1: function(activePath) { navigationTabIsActive(activePath); }
  },

  oneImageHasBeenLoaded: {
    hardcoded2: function() { oneImageHasBeenLoaded(); }
  },

  resetImageCounter: {
    hardcoded3: function() { resetCounterForImageLoader(); }
  },

  oneRecyclingHasBeenDone: {
    hardcoded4: function() { oneRecyclingHasBeenDone(); }
  },

  resetRecyclingCounter: {
    hardcoded5: function() { resetCounterForRecycling(); }
  }

};
