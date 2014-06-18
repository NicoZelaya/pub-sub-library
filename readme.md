<h1>PubSubDN</h1>

<h4> A Pub/Sub library in vanilla JavaScript </h4>

<p> PubSubDN is library agnostic. It's implemented only using vanilla JavaScript and it's minimalistic. It was implemented as a self-training phase of the <em>Globant JavaScript Lab</em>, so will not receive too much support. Either way, PubSubDN can get things done. </p>

<h3> How to use: </h3>

<p> Just include PubSubDN in your code. PubSubDN is compatible with CommonJS or AMD loaders, and of course, with normal JavaScript implementations. Again, just include it in your code and PubSubDN will be available. If you're working with no module loader, it's at the PubSub global. </p>
<p> It offers just the 3 basic functions: Publish, Subscribe and Unsubscribe: </p>

<h4> Publish: </h4>
<p> <strong>PubSub.publish(topic, args);</strong> takes two parameters:  </br>
 <strong>topic</strong> is a string representing the topic of your message. </br>
 <strong>args</strong> is an optional parameter, it represents the arguments you want the subscribers functions for this topic to receive.</br>
 This method will return false if the topic has no subscribers, and <em>this</em> if it was a success, so you can do things like PubSub.publish('Globant').publish('myTopic', 'My Message');</p> 

<h4> Subscribe: </h4>
<p> <strong>PubSub.subscribe(topic, fn);</strong> takes two parameters:  </br>
 <strong>topic</strong> is a string representing the topic you want to subscribe. </br>
 <strong>fn</strong> is the function to be executed any time a Publisher sends a message with the topic of this subscription.</br>
 This method will return a token that you should store, because it's used for unsubscribing.</p> 

<h4> Unsubscribe: </h4>
<p> <strong>PubSub.unsubscribe(token);</strong> takes only one parameter:  </br>
 <strong>token</strong> this is the token you received at the subscribing stage. </br>
 This method will return the same token when unsubscribing a subscriber, or false if the subscriber was not found.</p> 
