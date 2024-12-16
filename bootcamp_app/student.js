const { Pool } = require("pg");
const args = process.argv.slice(2);

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx"
});

const cohortName = args[0];
const limit = parseInt(args[1], 10);

pool
  .query(
    `
SELECT students.id as id, students.name as name, cohorts.name as cohort
FROM  students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
    `,
    [`${cohortName}%`, limit]
  )
  .then((res) => {
    res.rows.forEach((row) => {
      console.log(`${row.name} has an id of ${row.id} and is in the ${row.cohort} cohort`);
    });
  })

  .catch((err) => console.error("query error", err.stack));