// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const PG_URI = process.env.PG_URI;
const PG_PW = process.env.PG_PW;

// CONFIGURATION / MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
app.get('/', (req, res) => {
  try {
    res.status(200).json({
      message: 'Welcome to the server!',
    });
  } catch (err) {
    // 404 Page
    app.get('*', (req, res) => {
      res.send('404');
    });
  }
});

// CONTROLLERS
const bandsController = require('./controllers/bands_controller');
app.use('/bands', bandsController);

const eventController = require('./controllers/event_controller');
app.use('/events', eventController);

const stageController = require('./controllers/stage_controller');
app.use('/stages', stageController);

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})