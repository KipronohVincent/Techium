 // Store Form Data in MySQL
 connection.query('INSERT INTO submissions SET ?', formData, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error storing form data in database');
    } else {
      res.status(200).send('Form data stored in database');
    }
  });