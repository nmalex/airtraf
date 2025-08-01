const mqtt = require('mqtt')
const client = mqtt.connect('ws://localhost:9001');

client.on('connect', () => {
  console.log('Connected')
  client.subscribe('test/topic')
  client.publish('test/topic', 'Hello from MQTT over WebSocket!')
});

client.on('message', (topic, message) => {
  console.log(topic, message.toString())
});

