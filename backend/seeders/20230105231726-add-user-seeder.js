'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Users', [{
      user_name: 'virenque97',
      email: 'virenque97@gmail.com',
      password: 'Virenque97',
      is_admin: false,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_name: 'grupetto6',
      email: 'grupetto6@gmail.com',
      password: 'Grupetto6',
      is_admin: false,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_name: 'saganbest',
      email: 'saganbest@gmail.com',
      password: 'saganBest0',
      is_admin: false,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_name: 'goldenclimber',
      email: 'goldenclimber@gmail.com',
      password: 'goldenClimber1',
      is_admin: true,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_name: 'admin',
      email: 'admin@gmail.com',
      password: 'Admin0',
      is_admin: true,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
