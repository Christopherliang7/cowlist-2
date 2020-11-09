// Import models to use in your Controller functions. 
// Controllers will be communicating with models who communicate with the database.
const models = require('./models.js');

module.exports = {
  get: function(req, res) {
    models.getAll((err, result) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(result);
      }
    })
  },
  post: function(req, res) {
    // console.log(req.body);
    let params = [req.body.cow_name, req.body.cow_description]
    models.create(params, (err, result) => {
      if (err) {
        res.sendStatus(500);
      } else {
        // console.log('Success with POST request!');
        res.send();
      }
    })
  },
  put: function(req, res) {
    // console.log('Got to update controller')
    // console.log(req.body);
    // console.log(req.params);
    let params = [req.body.cow_name, req.body.cow_description, req.params.id]
    models.update(params, (err, result) => {
      if (err) {
        console.log('Error with PUT request: ', err);
      } else {
        res.send();
      }
    })
  },
  delete: function(req, res) {
    // console.log('params: ', req.params);
    let params = [req.params.id];
    models.delete(params, (err, result) => {
      if (err) {
        console.log('Error with DELETE request: ', err);
      } else {
        res.send();
      }
    })
  }
}