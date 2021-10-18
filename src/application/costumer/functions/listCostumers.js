const { ok } = require("../../../infra/http/adapters/HttpResponseAdapter");
const costumerRepository = require("../../../infra/repositories/CostumerRepository");

module.exports.execute = async (event) => {
  let params = event?.queryStringParameters;

  if (params?.id) {
    return ok(await costumerRepository.listById(params.id));
  }

  if (params?.name) {
    return ok(await costumerRepository.listByName(params.name));
  }

  return ok(await costumerRepository.list());
};
