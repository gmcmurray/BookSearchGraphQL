const db = require('../config/connection');
const { User } = require('../models');
const UserSeeds = require('./UserSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});