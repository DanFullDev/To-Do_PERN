const pool = require("../db");

const Todo = {
  async loadAll() {
    return await pool.query("SELECT * FROM todo ORDER BY todo_id DESC");
  },
  async loadAllActive() {
    return await pool.query(
      "SELECT * FROM todo WHERE status = $1 ORDER BY todo_id DESC",
      ["INCOMPLETE"]
    );
  },
  async loadAllCompleted() {
    return await pool.query(
      "SELECT * FROM todo WHERE status = $1 ORDER BY todo_id DESC",
      ["COMPLETE"]
    );
  },
  async loadOne(id) {
    return await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
  },
  async editOne(description, status, id) {
    return await pool.query(
      "UPDATE todo SET description = $1, status = $2 WHERE todo_id = $3",
      [description, status, id]
    );
  },
  async createOne(description, status) {
    return await pool.query(
      "INSERT INTO todo (description, status) VALUES ($1, $2)",
      [description, status]
    );
  },
  async deleteOne(id) {
    return await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
  },
};

module.exports = Todo;
