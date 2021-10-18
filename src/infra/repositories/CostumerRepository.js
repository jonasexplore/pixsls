const Costumer = require("../../domain/costumer/Costumer");
const database = require("../../infra/database/dynamodb");

class CostumerRepository {
  tableName = process.env.COSTUMER_TABLE;

  async create(data) {
    const { name, birthdate } = data;

    const costumer = new Costumer(name, birthdate);

    const propsTable = {
      TableName: this.tableName,
      Item: costumer,
    };

    await database.put(propsTable).promise();

    return costumer;
  }

  async list() {
    return database.scan({ TableName: this.tableName }).promise();
  }

  async listByName(name) {
    return database
      .get({
        TableName: this.tableName,
        Key: {
          name,
        },
      })
      .promise();
  }

  async listById(id) {
    return database
      .get({
        TableName: this.tableName,
        Key: {
          id,
        },
      })
      .promise();
  }
}

module.exports = new CostumerRepository();
