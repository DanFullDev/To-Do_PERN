const pool = require("../db");

const Todo = {
  async loadAll() {},
  async loadOne(id) {},
  async editOne(description, status, id) {},
  async createOne(description, status) {},
  async deleteOne(id) {},
};

module.exports = Todo;
