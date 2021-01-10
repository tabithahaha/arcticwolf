const express = require('express');
const redis = require('redis');

const app = express();


/*--------------------- Subscriber 1 ---------------------*/
const subscriber = redis.createClient();
let array = [];
let index = 0;

// set up subscriber 1
subscriber.on("message", (channel, message) => {
	// construct array that overwrite older values, we only want the last 5 seconds
	array[index] = parseInt(message);
	index = (index == 99) ? 0 : index + 1;

	console.log("Sum: " + array.reduce((a, b) => a + b));
});

subscriber.subscribe("tabi-channel");
/*--------------------- END ---------------------*/


app.listen(3006,() => {
	console.log("server is listening to port 3006");
})
