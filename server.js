var mosca = require('mosca');

//MQTT
var ascoltatore = {
  //using ascoltatore
  type: 'mongo',
  url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

var settings = {
  port: 8443
  //backend: ascoltatore
};

var serverMQTT = new mosca.Server(settings);

serverMQTT.on('clientConnected', function(client) {
  console.log('client connected', client.id);
});

// fired when a message is received
serverMQTT.on('published', function(packet, client) {
  console.log('Published', packet.payload.toString());
});

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}

serverMQTT.on('ready', setup);
