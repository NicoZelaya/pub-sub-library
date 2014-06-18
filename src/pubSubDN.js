
;(function(root, factory) {
  'use strict';

  // CommonJS
  if (typeof exports === 'object' && module) {
    module.exports = factory();

  // AMD
  } else if (typeof define === 'function' && define.amd) {
    define(factory);

  // Browser
  } else {
    root.PubSub = factory(); 
  }

}( ( typeof window === 'object' && window ) || this, function() {

  var topics = {},
      subID = -1,
      pubSub = {};

  /**
   * [allows a subscriber to susbscribe himself to a certain topic]
   * @param  {[string]} topic
   * @param  {Function} fn
   * @return {[object]}
   */
  pubSub.subscribe = function ( topic, fn ) {
    var token = (++subID).toString();
    if (!topics[topic]) { 
      topics[topic] = [];
    }
    topics[topic].push({
      fn : fn,
      token : token
    });
    return token;
  };

   /**
   * [allows a subscriber to detach himself from a subscription]
   * @param  {[object]} token
   * @return {[object || boolean]}
   */
  pubSub.unsubscribe = function ( token ) {
    for (tops in topics) {
      for (var i = 0; i < topics[tops].length; i++) {
        if (topics[tops][i].token === token) {
          topics[tops].splice(i, 1);
          return token;
        }
      }
    } 
    return false;
  };

  /**
   * [allows a publisher to broadcast a message]
   * @param  {[string]} topic
   * @param  {[objects]} args
   * @return {[boolean || object]}
   */
  pubSub.publish = function ( topic, args ) {
    if (!topics[topic]) {
      return false;
    } else {
      var subscribers = topics[topic];
      for (var i = 0; i < subscribers.length; i++) {
        subscribers[i].fn(topic, args);
      }
      return this;
    }
  };

  return pubSub;

}));
