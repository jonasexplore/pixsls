const Costumer = require("../../../domain/costumer/Costumer");
const database = require("../../../infra/database/index");

module.exports.execute = async (event) => {
  let data = JSON.parse(event.body);

  const { name, birthdate } = data;

  const costumer = new Costumer(name, birthdate);

  database.costumers.push(costumer);

  return {
    statusCode: 201,
    body: JSON.stringify(costumer, null, 2),
  };
};
