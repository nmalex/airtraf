
# Testing Mosquitto MQTT Endpoints

This guide explains how to quickly test your Mosquitto MQTT broker endpoints over both TCP and WebSocket protocols.

---

## 1. Test MQTT over TCP (default port 1883)

### Using `mosquitto_sub` and `mosquitto_pub` (command-line)

Open two terminals:

- Terminal 1 (subscribe):
```bash
mosquitto_sub -h your-vps-ip -p 1883 -t test/topic
```

- Terminal 2 (publish):
```bash
mosquitto_pub -h your-vps-ip -p 1883 -t test/topic -m "Hello TCP MQTT"
```

You should see `Hello TCP MQTT` appear in terminal 1.

---

## 2. Test MQTT over WebSocket (e.g., port 9001)

### Option A: Using [MQTT.fx](https://mqttfx.jensd.de/) (GUI client)

- Download and install MQTT.fx
- Configure connection:
  - Host: `your-vps-ip`
  - Port: `9001`
  - Protocol: `WebSocket`
- Connect, subscribe to a topic, then publish to see messages.

---

### Option B: Using **web-based MQTT client** (browser)

Try online clients like:

- [MQTT Websocket Client](http://www.hivemq.com/demos/websocket-client/)

Steps:

- Connect to your broker’s WebSocket URL:  
  `ws://your-vps-ip:9001/mqtt` (sometimes just `ws://your-vps-ip:9001` works)
- Subscribe to a topic (e.g., `test/topic`)
- Publish messages to the topic and verify delivery

---

### Option C: Using **`wscat`** (CLI WebSocket client)

```bash
npm install -g wscat
```

Connect to WebSocket:

```bash
wscat -c ws://your-vps-ip:9001
```

> Note: `wscat` works for raw WebSocket but doesn’t implement MQTT protocol, so only use for testing if the connection itself opens.

---

## 3. Test with Node.js MQTT client (programmatic)

Install MQTT package:

```bash
npm install mqtt
```

Create a file `test-mqtt.js` with the following content:

```js
const mqtt = require('mqtt')
const client = mqtt.connect('ws://your-vps-ip:9001')

client.on('connect', () => {
  console.log('Connected')
  client.subscribe('test/topic')
  client.publish('test/topic', 'Hello from MQTT over WebSocket!')
})

client.on('message', (topic, message) => {
  console.log(topic, message.toString())
})
```

Run the script:

```bash
node test-mqtt.js
```

---

Feel free to modify the host, port, and topics as per your setup.

---

*Keep this file for your reference when testing Mosquitto MQTT endpoints.*
