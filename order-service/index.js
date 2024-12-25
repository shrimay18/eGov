const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World2!');
});

app.listen(3002, () => {
  console.log('Order Service running on port 3002');
});
