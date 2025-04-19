// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('👋 Launches my drone server on a ec2 Everything is going to the bloody cloud port 80 !!!!!!!👋');
});

app.listen(80, '0.0.0.0', () => {
  console.log('🚀 Server is running on port 80');
});
