const seedUsers = require('./userSeeds');
const seedBlogs = require('./blogSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedBlogs();
  console.log('\n----- BLOGSSEEDED -----\n');


  process.exit(0);
};

seedAll()