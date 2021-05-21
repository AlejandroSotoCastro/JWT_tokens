"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "Leo Messi",
          email: "leo@messi.com",
          password: bcrypt.hashSync("bla", 10),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Dan Abramov",
          email: "dan@redux.com",
          password: bcrypt.hashSync("bla", 10),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Manola Abramov",
          email: "dan@ssdfsfdredux.com",
          password: bcrypt.hashSync("bla", 10),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
