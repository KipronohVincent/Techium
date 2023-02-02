const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');


// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/submit-form', function (request, res) {
    // Render login template
    res.render('index', { title: 'Info' });
});

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'forms'
  });

// Submit Form Endpoint
app.post('/submit-form', (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let message = req.body.number;
 
    //TODO Validate the incoming data 

    if (
        !email ||
        !name ||
        !message
    ) {
        throw Error('Invalid details')
    }

    // store the information

    var sql = `INSERT INTO primashops (email, name, message) VALUES ("${email}", "${name}", "${message}", NOW())`;
    //using the connection we initialzed here we execute the above sql
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log('record inserted');
        req.flash('success', 'Data added successfully!');
        res.redirect('index');
    });
});
  

// Start Server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
