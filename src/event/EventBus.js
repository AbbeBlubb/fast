/**
 * 🚌
 * Publisher / subscription pattern.
 * A subscriber can subscribe to a specific event type. A publisher can publish to a specific event type.
 * Subscription of event type with function -> the subscription is registered as the contract specifies in subscriptions.js
 * Publish on an event type -> fires all functions of the specific event type -> the subscriber is notified
 */

export class EventBus {

  constructor(subscriptions) {
    this.subscriptions = subscriptions || {};
    this.getNextUniqueId = this.getIdGenerator();
  }

  // Returns a function that needs to be stored in a variable (as done in the constructor).
  // For each time the variable is invoked, it will return 1, 2, 3...
  getIdGenerator() {
    let lastId = 0;
    return function() {
        lastId += 1;
        return lastId;
    };
  }

  // Test of the returned function from the getIdGenerator
  logNextId() {
    const testNumber = this.getNextUniqueId();
    console.log(testNumber);
  }

  /**
   * const subscription = EventBus.subscribe(
   *   "print",
   *   function(){}
   * )
   */
  subscribe(eventTypeString, callback) {
    const id = this.getNextUniqueId();

    if(!this.subscriptions[eventTypeString]) {
      this.subscriptions[eventTypeString] = { };
    }

    this.subscriptions[eventTypeString][id] = callback;

    // Returns an object with an unsubscription property. Invoke: subscriptionName.unsubscribe()
    return {
        unsubscribe: () => {
            delete this.subscriptions[eventTypeString][id];
            if(Object.keys(this.subscriptions[eventTypeString]).length === 0) {
              delete this.subscriptions[eventTypeString];
            }
        }
    };
  }

  // Fire all functions attatched to an event type. EventBus.publish("print", "some text as arg")
  publish(eventTypeString, arg = null) {
    if(!this.subscriptions[eventTypeString]) {
      return;
    }

    // Fire the function without arguments
    if(arg === null) {
      Object.keys(this.subscriptions[eventTypeString]).forEach(key => this.subscriptions[eventTypeString][key]());
    } else {
      // Fire the function with arguments
      Object.keys(this.subscriptions[eventTypeString]).forEach(key => this.subscriptions[eventTypeString][key](arg));
    }
  }

}
