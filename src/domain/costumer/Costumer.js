const { v4: uuid } = require("uuid");

class Costumer {
  id;
  name;
  birthdate;

  constructor(name, birthdate) {
    if (!this.id) {
      this.id = uuid();
    }

    this.name = name;
    this.birthdate = birthdate;
  }
}

module.exports = Costumer;
