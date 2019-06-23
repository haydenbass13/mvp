const { pg } = require("./index");
const { dropPostgres, createPostgres, seedPostgres } = require("./utils");


(async () => {
  try {
    console.time("db seeding");
    // await dropPostgres();
    // await createPostgres();
    await pg.sync({ force: false, logging: false });
    let date = new Date();
    let start = date.getMonth();
    for (let i = start; i <= 11; i++) {
      await seedPostgres(i);
    }
    process.exit();
    console.timeEnd("db seeding");
  } catch (err) {
    throw new Error(err);
  }
})();
