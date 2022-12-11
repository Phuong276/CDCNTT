'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Teachers',
      [
        {
          username: 'teacher1',
          password: '123456',
          firstName: 'A',
          lastName: 'Nguyen Van',
          photo: 'xxx',
          phone: '0935123123',
          address: 'Hue',
          experience: 5,
          dregree: 'xxx',
          cetificate: 'xxx',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'teacher2',
          password: '123456',
          firstName: 'B',
          lastName: 'Nguyen Van',
          photo: 'xxx',
          phone: '0935123456',
          address: 'Da Nang',
          experience: 4,
          dregree: 'xxx',
          cetificate: 'xxx',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'teacher3',
          password: '123456',
          firstName: 'C',
          lastName: 'Nguyen Van',
          photo: 'xxx',
          phone: '0935123789',
          address: 'Quang Nam',
          experience: 3,
          dregree: 'xxx',
          cetificate: 'xxx',
          createdAt: new Date(),
          updatedAt: new Date()
        }
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
