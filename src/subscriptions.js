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
  firstTestEvent: {
    1: function() {
      console.log('Event bus test. First A');
    },
    2: function() {
      console.log('Event bus test. First B');
    }
  },
  secondTestEvent: {
    3: function() {
      console.log('Event bus test. Second A');
    }
  }
};
