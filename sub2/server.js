const express = require('express');
const redis = require('redis');

const app = express();


/*--------------------- Subscriber 1 ---------------------*/
const subscriber = redis.createClient();
let array = [];
let index = 0;

// set up subscriber 2
subscriber.on("message", (channel, message) => {
	// construct array that overwrite older values, we only want the last 5 seconds
	array[index] = parseInt(message);
	index = (index == 99) ? 0 : index + 1;

	console.log("Median: " + array.reduce((a, b) => {
		// first sort then take the center numbers and divide by 2
		// https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-88.php
		const mid = Math.floor(array.length / 2);
		nums = [...array].sort((a, b) => a - b);
		return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
	}));
});

subscriber.subscribe("tabi-channel");
/*--------------------- END ---------------------*/


app.listen(3007,() => {
	console.log("server is listening to port 3007");
})
