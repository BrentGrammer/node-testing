//You have to do a let here for rewire to be able to reassign this variable in tests
let db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // Check if email exists
  db.saveUser({ email, password });
  // Send welcome email
};