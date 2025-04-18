// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('👋 Hello from my Dockerized Node app!');
});

app.listen(80, () => {
  console.log('🚀 Server is running on port 80');
});
