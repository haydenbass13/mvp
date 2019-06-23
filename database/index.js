const Sequelize = require("sequelize");

const pg = new Sequelize("appointments", "docker", "docker", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  logging: false
});

const Appointments = pg.define("appointments", {
  date: Sequelize.DATE,
  booked: Sequelize.BOOLEAN,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
});

// const Employees = pg.define('employees', {
//   employeeName: Sequelize.STRING,
// })



module.exports = { pg, Appointments};