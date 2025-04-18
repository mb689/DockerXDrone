// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('👋 We are now not using .env file. No secrets stored here for👋');
});

app.listen(80, '0.0.0.0', () => {
  console.log('🚀 Server is running on port 80');
});
