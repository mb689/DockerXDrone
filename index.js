// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('👋 Finally done with drone using docker👋');
});

app.listen(80, '0.0.0.0', () => {
  console.log('🚀 Server is running on port 80');
});
