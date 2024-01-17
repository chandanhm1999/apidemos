const express = require('express');
const app = express();

app.get('/example', (req, res) => {
  // Access query string parameters
  const name = req.query.name;
  const age = req.query.age;

  // Process the parameters as needed
  res.send(`Hello, ${name}! You are ${age} years old.`);
});

app.listen(8080, () => {
  console.log('Server is running on port 3000');
});