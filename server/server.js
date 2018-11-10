// express for server-side methods
const express = require('express');
const bodyParser = require('body-parser');

// creates the application
const app = express();
// sets the port for the application
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

const whirlydoos = [];

app.get('/api/whirlydoos', (req, res) => {
  /* Implement API Call */
  res.status(501).send();
});

app.post('/api/whirlydoos', (req, res) => {
  /* Implement API Call */
  res.status(501).send();
});

app.put('/api/whirlydoos/update/{id}', (req, res) => {
  /* Implement API Call */
  res.status(501).send();
});

// listen for requests made to get /api/hello and post /api/world
app.listen(port, () => console.log(`Listening on port ${port}`));
