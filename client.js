'use strict';
var  mqtt = require('mqtt')
var client = mqtt.connect({ port: 8443, host: 'localhost'});




var finalAction = {
	name:"camilo",
	lastName:"perez"
}
client.publish('1026', JSON.stringify(finalAction));
