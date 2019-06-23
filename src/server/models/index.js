const { pg } = require("../../../database/index");

const appointmentsByMonth = async (month, cb) => {
  month = month +1
  let nextMonth = month +1;
  if (month < 10) {
    month = "0" + month;
    nextMonth = '0' + nextMonth;
  } else {
    month = "" + month;
    nextMonth = '' + nextMonth;
  }
  
  let querystr =
    `SELECT * FROM appointments WHERE date BETWEEN ` +
    `'2019-${month}-01 00:00:00-07'` +
    ` AND ` +
    `'2019-${nextMonth}-01 00:00:00-07'`;
    console.log(querystr)
  await pg.query(querystr).then(res => {
    cb(res);
  });
};

module.exports = appointmentsByMonth;
