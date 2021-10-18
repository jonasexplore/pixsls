import { v4 as uuid } from "uuid";

class Costumer {
  id: string;
  name: string;
  birthdate: string;
  created_at: string;
  updated_at: string;

  constructor(name: string, birthdate: string) {
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

export { Costumer };
