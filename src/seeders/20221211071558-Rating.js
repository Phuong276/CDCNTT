'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Ratings',
      [
        {
          id_Teacher: 1,
          id_Student: 1,
          comment: 'Day tot',
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_Teacher: 1,
          id_Student: 2,
          comment: 'Day khong tot',
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_Teacher: 1,
          id_Student: 3,
          comment: 'Day tot',
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_Teacher: 2,
          id_Student: 1,
          comment: 'Day tot',
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_Teacher: 2,
          id_Student: 2,
          comment: 'Day khong tot',
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_Teacher: 2,
          id_Student: 3,
          comment: 'Day tot',
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_Teacher: 3,
          id_Student: 1,
          comment: 'Day kem',
          rating: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_Teacher: 3,
          id_Student: 2,
          comment: 'Day khong tot',
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_Teacher: 3,
          id_Student: 3,
          comment: 'Day buon ngu',
          rating: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};