'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

options.tableName = 'Bookings';

const bookings = [
  {
    spotId: 3,
    userId: 2,
    startDate: '06-19-2023',
    endDate: '07-01-2023'
  },
  {
    spotId: 1,
    userId: 1,
    startDate: '06-27-2023',
    endDate: '07-05-2023'
  },
  {
    spotId: 5,
    userId: 3,
    startDate: '05-19-2023',
    endDate: '06-01-2023'
  },
]


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(options, bookings, {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {

    })
  }
};