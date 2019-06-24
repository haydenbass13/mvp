const pgtools = require("pgtools");

const config = {
  user: "docker",
  host: "localhost",
  port: 5432,
  password: "docker"
};

const dropPostgres = () => pgtools.dropdb(config, "appointments");

const createPostgres = () => pgtools.createdb(config, "appointments");

const { Appointments } = require("./index");

const randomizer = () => {
  let num = Math.floor(Math.random() * Math.floor(2));
  return num === 1 ? true : false;
};

const seedPostgres = async i => {
  let date = new Date();
  let year = date.getFullYear();
  let month = i;
  let daysInMonth = new Date(year, month, 0).getDate();
  let days = [];
  for (var j = 0; j <= daysInMonth; j++) {
    for (var time = 9; time < 22; time++) {
      let day = {
        date: await new Date(year, month, j, time),
        booked: randomizer(),
        firstName: null,
        lastName: null,
        phone: null,
      };

      days.push(day);
    }
  }
  return Appointments.bulkCreate(days);
};

module.exports = {
  seedPostgres,
  createPostgres,
  dropPostgres
};
/*
take the month and day as the paramaters

create a start time
  //find the day month and year
start the following day
  //for the day
    //start the time at opening (10:00am)
    //while time < 8
      //increase one hour with every iteration
      add the same date with new time for each day iteration

      */
