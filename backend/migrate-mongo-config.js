require('dotenv').config();

const config = {
  mongodb: {
    url: process.env.MONGODB_CONNECTION_STRING,
    databaseName: "hotel-booking",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".ts",
};

module.exports = config;
