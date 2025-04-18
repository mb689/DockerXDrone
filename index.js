// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('👋 Hello from my Dockerized Node app! My name is Mohamed Boudjatat and I am a DevOps Engieer');
});

app.listen(80, '0.0.0.0', () => {
  console.log('🚀 Server is running on port 80');
});
