// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('👋 Setting https for express web page👋');
});

app.listen(80, '0.0.0.0', () => {
  console.log('🚀 Server is running on port 80');
});
