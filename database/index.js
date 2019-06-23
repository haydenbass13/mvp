const Sequelize = require("sequelize");

const pg = new Sequelize("appointments", "docker", "docker", {
  dialect: "postgres",
  host: "localhost",
  port: 3000,
  logging: false
});

const Appointments = pg.define("appointments", {
  storeName: Sequelize.STRING,
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  url: Sequelize.STRING,
  price: Sequelize.STRING,
  quantity: Sequelize.REAL,
  buyoptions: Sequelize.ARRAY(Sequelize.STRING),
  eta: Sequelize.ARRAY(Sequelize.STRING),
  shipprice: Sequelize.STRING,
  location: Sequelize.STRING,
  stars: Sequelize.REAL,
  numStars: Sequelize.REAL,
  peopleWantThis: Sequelize.STRING
});

const Employees = pg.define('employees', {
  employeeName: Sequelize.STRING,
})



module.exports = { pg, Appointments, Employees };