import { Costumer } from "../../domain/costumer/Costumer";
import { dynamoDbClient as database } from "../../infra/database/dynamodb";

class CostumerRepository {
  tableName = process.env.COSTUMER_TABLE;

  async create(data) {
    const { name, birthdate } = data;

    const costumer = new Costumer(name, birthdate);

    await database
      .put({
        TableName: String(this.tableName),
        Item: { ...costumer },
      })
      .promise();

    return costumer;
  }

  async list() {
    return database.scan({ TableName: String(this.tableName) }).promise();
  }

  async listByName(name) {
    return database
      .get({
        TableName: String(this.tableName),
        Key: {
          name,
        },
      })
      .promise();
  }

  async listById(id) {
    return database
      .get({
        TableName: String(this.tableName),
        Key: {
          id,
        },
      })
      .promise();
  }
}

const costumerRepository = new CostumerRepository();

export { costumerRepository };
