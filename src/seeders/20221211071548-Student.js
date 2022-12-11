'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Students',
      [
        {
          username: 'student1',
          password: '123456',
          firstName: 'D',
          lastName: 'Tran Thi',
          phone: '077123123',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'student2',
          password: '123456',
          firstName: 'E',
          lastName: 'Tran Thi',
          phone: '077123456',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'student3',
          password: '123456',
          firstName: 'F',
          lastName: 'Tran Thi',
          phone: '077123789',
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