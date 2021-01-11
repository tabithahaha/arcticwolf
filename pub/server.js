const express = require('express');
const redis = require('redis');

const app = express();


/*--------------------- Publisher ---------------------*/
const publisher = redis.createClient();

publisher.on('connect', function(){
  console.log('Connected to Redis...');
});

// setup interval to send 20 message per second
setInterval(() => {
  // generate random interger
  const int = Math.floor(Math.random() * 200) - 100; // -100 to 100

  publisher.publish("tabi-channel", int);
  console.log('Published ' + int);
}, 300); // 20 per second (6000/20)
/*--------------------- END ---------------------*/


// Start server
app.listen(3005, function(){
  console.log('Server started on port 3005');
});
