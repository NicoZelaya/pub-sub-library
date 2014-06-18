describe('Library definition', function() {

  it('Library should exist at PubSub global', function() {
    expect(PubSub).toBeDefined();
  });
});

describe('About functionality', function() {

  var testSubscribersFunctions = {
    testSubscriber1: function( topics , data ) {
      console.log( topics + ": " + data );
    },
    testSubscriber2: function() {
      console.log('Hello World!');
    }
  },
  subscriber = PubSub.subscribe( 'topic1', testSubscribersFunctions.testSubscriber1 );

  describe('Subscribe functionality', function() {

    it('Should allow a subscriber to subscribe to a certain topic', function() {
      expect(subscriber).toBeDefined();
    });

    it('Should return a token to any subscriber', function() {
      var subscriber2 = PubSub.subscribe( 'topic1', testSubscribersFunctions.testSubscriber1);
      var subscriber3 = PubSub.subscribe( 'topic2', testSubscribersFunctions.testSubscriber2);
      expect(subscriber).toBe('0');
      expect(subscriber2).toBe('1');
      expect(subscriber3).toBe('2');
    });
  });

  describe('Publish functionality', function() {

    var wrongTopicMessage = PubSub.publish('topicWithNoSuscribers', 'arg'),
        calledWithNoParameters = PubSub.publish();

    beforeEach(function() {
      spyOn(PubSub, 'publish');
      PubSub.publish('topic1', ['a', 3, 'c']);
      PubSub.publish('topic1', 'data');
      PubSub.publish('topic1', 5);
      PubSub.publish('topic6');
    });

    it("It should allow to publish a message", function() {
      expect(PubSub.publish).toHaveBeenCalled();
    })

    it("Passing it the topic and the arguments we want", function() {
      expect(PubSub.publish).toHaveBeenCalledWith('topic1', ['a', 3, 'c']);
      expect(PubSub.publish).toHaveBeenCalledWith('topic1', 'data');
      expect(PubSub.publish).toHaveBeenCalledWith('topic1', 5);
    });

    it('Or with no more than a just topic if we need no arguments', function() {
      expect(PubSub.publish).toHaveBeenCalledWith('topic6');
    });

    it('But returns false if you do not give it a topic', function() {
      expect(calledWithNoParameters).toBe(false);
    });

    it("Messages with no suscribers are discarted", function() {
      expect(wrongTopicMessage).toBe(false);
    });

  });

  describe('Unsubscribe functionality', function() {

    it('Should unsubscribe a subscriber and return the token', function() {
      expect(PubSub.unsubscribe(subscriber)).toBe(subscriber);
    });

    it('But returns false if the token we give is not an active subscriber', function() {
      expect(PubSub.unsubscribe('abcde')).toBe(false);
      expect(PubSub.unsubscribe(subscriber)).toBe(false);
    });

  });

});

