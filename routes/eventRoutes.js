const express = require('express');
const { getEvents, getEventWithParticipants, addParticipant } = require('../controllers/eventController');
const router = express.Router();

router.get('/events', getEvents);
router.get('/events/:eventId', getEventWithParticipants);
router.post('/events/:eventId/participant', addParticipant);

module.exports = router;
