const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON data in requests
app.use(bodyParser.json());

// Route to handle event data submission
app.post('/save-event', (req, res) => {
  const eventData = req.body;
  // Here, you would use a database connection to save the eventData to your database
  // Replace this with your actual database integration code

  // Respond with a success message or appropriate response
  res.json({ message: 'Event data saved successfully' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
