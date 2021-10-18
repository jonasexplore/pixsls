const costumerRepository = require("../../../infra/repositories/CostumerRepository");

module.exports.execute = async (event) => {
  let data = JSON.parse(event.body);

  const costumer = await costumerRepository.create(data);

  return {
    statusCode: 201,
    body: JSON.stringify(costumer, null, 2),
  };
};
