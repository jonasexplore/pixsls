import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

import { ok } from "../../../infra/http/adapters/HttpResponseAdapter";
import { costumerRepository } from "../../../infra/repositories/CostumerRepository";

module.exports.execute = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  let params = event?.queryStringParameters;

  if (params?.id) {
    return ok(await costumerRepository.listById(params.id));
  }

  if (params?.name) {
    return ok(await costumerRepository.listByName(params.name));
  }

  return ok(await costumerRepository.list());
};
