const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');


// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Submit Form Endpoint
app.post('/submit-form', (req, res) => {
  const formData = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  };

});

// Start Server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
