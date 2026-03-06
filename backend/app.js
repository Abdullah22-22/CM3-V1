const express = require('express');
const path = require('path');
const vehicleRentalRouter = require('./routes/vehicleRentalRouter');
const { unknownEndpoint, errorHandler, requestLogger } = require('./middleware/customMiddleware');

const app = express();

app.use(express.json());
app.use(requestLogger);

// API routes
app.use('/api/vehicleRentals', vehicleRentalRouter);

// Serve React build
app.use(express.static(path.join(__dirname, 'view')));

// API error handling
app.use('/api', unknownEndpoint);
app.use(errorHandler);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
});


module.exports = app;