const express = require('express');
const db = require('../database/mysql.js').dbConnection;
const controller = require('./controllers.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('./client/dist'));

db.connect((err) => {
  if (err) {return console.log('Error connecting to database: ', err)}
  console.log('Connected to database!')
});

// Routes 
app.get('/api/cows', (req, res) => {
  controller.get(req, res);
});

app.post('/api/cows', (req, res) => {
  controller.post(req, res);
});

app.put('/api/cows/:id', (req, res) => {
  controller.put(req, res);
});

app.delete('/api/cows/:id', (req, res) => {
  controller.delete(req, res);
});

app.listen(port, () => console.log(`Connected to Localhost at Port ${port}!`));