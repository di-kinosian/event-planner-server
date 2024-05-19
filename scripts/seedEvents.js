const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const Event = require('../models/event');
const connectDB = require('../config/db');

function generateEvent() {
  return {
    title: faker.lorem.words(2),
    description: faker.lorem.sentence(),
    eventDate: faker.date.future(),
    organizer: faker.company.name()
  };
}

function generateEvents(num) {
  const events = [];
  for (let i = 0; i < num; i++) {
    events.push(generateEvent());
  }
  return events;
}

const seedEvents = async () => {
  await connectDB();

  const events = generateEvents(150);

  try {
    await Event.deleteMany({});
    await Event.insertMany(events);
    console.log('Events seeded successfully');
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
};

seedEvents();
