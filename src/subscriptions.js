import { navigationTabIsActive } from './templates/navigation';

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
    1: function(activePath) {
      navigationTabIsActive(activePath);
    }
  }

};
