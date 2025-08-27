const express = require('express');
const path = require('path');
const connectDB = require('./config');

connectDB();

const app = express();
app.use(express.json());

// Serve React static files
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api', (req, res) => {
  res.json({ message: 'API running...' });
});

// Serve React for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));