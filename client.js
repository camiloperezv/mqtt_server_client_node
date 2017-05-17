'use strict';
const mqtt = require('mqtt')
const client = mqtt.connect({ port: 8443, host: 'localhost'});
//const client = mqtt.connect({ port: 8443, host: 'obras.pruebas.insite.com.co'});




let finalAction = {
	name:"camilo",
	lastName:"perez"
}
client.publish('1026', JSON.stringify(finalAction));
