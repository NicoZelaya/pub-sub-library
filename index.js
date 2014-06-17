var server = require('./server'),
		pubSub = require('./pubSubDN');

server.start();

var messageLogger = function ( topics, data ) {
    console.log( "Logging: " + topics + ": " + data );
};

var suscripipe = pubSub.subscribe( "inbox/newMessage", function() {
	console.log('Think positive');
} );
var subscription = pubSub.subscribe( "inbox/newMessage", messageLogger );

var rebelSubscription = pubSub.subscribe ( 'warrior', messageLogger );

pubSub.publish( 'Richard', 'This shouldnt be logged' );
pubSub.publish( "inbox/newMessage", "hello world!" );
 
 pubSub.publish( 'warrior', 'This is SPARTHA!' );
// or
pubSub.publish( "inbox/newMessage", ["test", "a", "b", "c"] );
 
// or
pubSub.publish( "inbox/newMessage", {
  sender: "hello@google.com",
  body: "Hey again!"
});
 

pubSub.unsubscribe( subscription );
 

pubSub.publish( "inbox/newMessage", "Hello! are you still there?" );
pubSub.publish( "inbox/newMessage", "Wont you tell me your name?" );

pubSub.publish( 'warrior', 'Tonight we dine in HELL!' );

pubSub.unsubscribe( suscripipe );
pubSub.unsubscribe( rebelSubscription );
pubSub.publish( "inbox/newMessage", "Wont you tell me your name?" );

pubSub.publish( 'warrior', 'Xerxes won' );