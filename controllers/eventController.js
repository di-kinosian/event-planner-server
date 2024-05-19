const Event = require('../models/event');
const Participant = require('../models/participant');

const getEvents = async (req, res) => {
  const { page = 1, limit = 10, sortBy = 'eventDate', sortOrder = 'asc' } = req.query;

  // Create sort object for MongoDB
  const sortOptions = {};
  sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;

  try {
    const events = await Event.find()
      .sort(sortOptions)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await Event.countDocuments();

    res.json({
      events,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

const addParticipant = async (req, res) => {
  const { eventId } = req.params;
  const { name, email, dateOfBirth, source } = req.body;
  
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const newParticipant = new Participant({ name, email, dateOfBirth, source });
    const savedParticipant = await newParticipant.save();

    event.participants.push(savedParticipant._id);
    await event.save();

    res.status(201).json(savedParticipant);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getEventWithParticipants = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await Event.findById(eventId).populate('participants');
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getEvents,
  addParticipant,
  getEventWithParticipants
};
