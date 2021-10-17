const database = require("../../../infra/database/index");

module.exports.execute = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(database.costumers, null, 2),
  };
};
