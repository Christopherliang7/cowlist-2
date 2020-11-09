// Require database for Models to interact with
const db = require('../database/mysql.js').dbConnection;

module.exports = {
  getAll: function(callback) {
    const getQuery = 'SELECT * FROM cows;';
    db.query(getQuery, (err, result) => {
      if (err) {
        console.log('Error with GET request: ', err)
      } else {
        // console.log('Models reached')
        // console.log(result);
        callback(null, result);
      }
    })
  },
  create: function(params, callback) {
    const postQuery = 'INSERT INTO cows(cow_name, cow_description) VALUES (?, ?);'
    db.query(postQuery, params, (err, result) => {
      if (err) {
        console.log('Error with POST request: ', err);
      } else {
        // console.log('Models reached')
        // console.log('Models: ', result)
        callback(null, result);
      }
    })
  },
  update: function(params, callback) {
    // console.log('Got to update models')
    const putQuery = 'UPDATE cows SET cow_name = (?), cow_description = (?) WHERE id = (?);';
    db.query(putQuery, params, (err, result) => {
      if (err) {
        console.log('Error with PUT request: ', err);
      } else {
        console.log('reached models successfully');
        callback(null, result);
      }
    })
  },
  delete: function(params, callback) {
    const deleteQuery = 'DELETE FROM cows WHERE id = (?);';
    db.query(deleteQuery, params, (err, result) => {
      if (err) {
        console.log('Error with DELETE request: ', err);
      } else {
        callback(null, result);
      }
    })
  }
}
