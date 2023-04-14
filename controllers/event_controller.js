// DEPENDENCIES
const event = require('express').Router();
const db = require('../models');
const { Event } = db;
const { Op } = require('sequelize');

// INDEX (GET findAll)
event.get('/', async (req, res) => {
  try {
    // this finds all events
    const foundEvents = await Event.findAll({
      order: [['event_id', 'ASC']],
      where: {
        name: {
          [Op.like]: `%${req.query.name ? req.query.name : ''}%`,
        },
      },
      limit: 10,
    });
    res.status(200).json(foundEvents);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Sever Error',
    });
  }
});

// SHOW (GET findOne)
event.get('/:name', async (req, res) => {
  try {
    const foundEvent = await Event.findOne({
      where: { name: req.params.name },
      include: [
      {
      model: MeetGreet,
      as: 'meet_greets',
      include: {
      model: Band,
      as: 'band'
        }
      },
    {
      model: SetTime,
      as: 'set_times',
      include: [
    {
      model: Band,
      as: 'band'
    },
  {
    model: Stage,
    as: 'stage'
        }
      ]
    },
  {
    model: Stage,
    as: 'stages',
    through:  { attributes: [] }
  }
]
})
    res.status(200).json(foundEvent)
  } catch (error) {
      console.log(error)
      res.status(500).json(error)
  }
})

// CREATE (POST)
event.post('/', async (req, res) => {
  try {
    // this creates a new event
    const newEvent = await Event.create(req.body);
    res.status(201).json({
      message: 'Event created',
      data: newEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Sever Error',
    });
  }
  /*
  example for POST request
  {
    "name": "ARC Techo Festival",
    "date": "2023-09-1",
    "start_time": "2023-09-1 12:00:00",
    "end_time": "2023-09-1 23:30:00" 
  }*/
});

// UPDATE (PUT)
event.put('/:id', async (req, res) => {
  try {
    // this updates an event
    const updatedEvent = await Event.update(req.body, {
      where: {
        event_id: req.params.id,
      },
    });
    res.status(202).json({
      message: `Successfully updated ${updatedEvent} event(s)`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Sever Error',
    });
  }
});

// DELETE (DELETE)
event.delete('/:id', async (req, res) => {
  try {
    // this deletes an event
    const deletedEvent = await Event.destroy({
      where: {
        event_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `${deletedEvent} event(s) deleted`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Sever Error',
    });
  }
});

// EXPORT
module.exports = event;