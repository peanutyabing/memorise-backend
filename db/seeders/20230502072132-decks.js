"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "decks",
      [
        {
          user_id: 1,
          author_id: 1,
          language_id: 1,
          difficulty_level_id: 3,
          public: true,
          ai_generated: false,
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
        {
          user_id: 2,
          author_id: 1, // User 2 fored this deck from user 1
          language_id: 1,
          difficulty_level_id: 2, // User 2 edited this deck to make it easier
          public: true,
          ai_generated: false,
          created_at: new Date("2023-05-01"),
          updated_at: new Date("2023-05-01"),
        },
        {
          user_id: 1,
          author_id: 1,
          language_id: 5,
          difficulty_level_id: 1,
          public: true,
          ai_generated: false,
          created_at: new Date("2023-04-01"),
          updated_at: new Date("2023-04-01"),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("decks", null, {});
  },
};
