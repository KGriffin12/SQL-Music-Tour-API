'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bands', [
      {
        name: 'Artic Monkeys',
        genre: 'Indie Rock',
        available_start_time: '2023-04-07 11:00:00',
        end_time: '2023-04-07 23:00:00',
      },
      {
        name: 'Paramore',
        genre: 'Pop Rock',
        available_start_time: '2023-04-07 11:00:00',
        end_time: '2023-04-07 23:00:00',
      },
      {
        name: 'Three Days Grace',
        genre: 'Alternative Hard Rock',
        available_start_time: '2023-04-07 11:00:00',
        end_time: '2023-04-07 23:00:00',
      },
      {
        name: 'The Beatles',
        genre: 'Rock',
        available_start_time: '2023-04-07 11:00:00',
        end_time: '2023-04-07 23:00:00',
      },
      {
        name: 'The Rolling Stones',
        genre: 'Rock',
        available_start_time: '2023-04-07 11:00:00',
        end_time: '2023-04-07 23:00:00',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('bands', null, {});
  },
};