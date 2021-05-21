"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "images",
      [
        {
          title: "Pic1",
          url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ugi6ka2-mACRREYtCh7KUAHaEK%26pid%3DApi&f=1",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pic2",
          url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.uzasBNwxum5G7YTfZZAFEQHaEK%26pid%3DApi&f=1",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pic3",
          url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vzUhlFJFR5akQnwy8tWSvAHaF7%26pid%3DApi&f=1",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pic4",
          url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.M5jFucSp3GpcvROrI-YmOgHaE8%26pid%3DApi&f=1",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("images", null, {});
  },
};
