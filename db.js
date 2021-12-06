const Pool = require("pg").Pool;

const pool = new Pool({
  user: "",
  password: "",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
