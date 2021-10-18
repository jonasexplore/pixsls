const { v4: uuid } = require("uuid");

class Costumer {
  id;
  name;
  birthdate;
  created_at;
  updated_at;

  constructor(name, birthdate) {
    if (!this.id) {
      this.id = uuid();
    }

    if (!this.created_at) {
      this.created_at = new Date().toISOString();
    }

    this.name = name;
    this.birthdate = birthdate;
    this.updated_at = new Date().toISOString();
  }
}

module.exports = Costumer;
