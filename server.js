const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();

// Middleware to parse JSON data in requests
app.use(bodyParser.json());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Abiram965',
  database: 'student_info',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Route to handle event data submission
app.post('/save-event', (req, res) => {
  const eventData = req.body;

  // Insert event data into the MySQL database
  pool.query(
    'INSERT INTO events (club, college, eventName, eventDate) VALUES (?, ?, ?, ?)',
    [eventData.club, eventData.college, eventData.eventName, eventData.eventDate],
    (error, results) => {
      if (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ message: 'Error saving data' });
      } else {
        console.log('Data saved successfully');
        res.json({ message: 'Data saved successfully' });
      }
    }
  );
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
