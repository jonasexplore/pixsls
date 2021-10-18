import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

import { created } from "../../../infra/http/adapters/HttpResponseAdapter";
import { costumerRepository } from "../../../infra/repositories/CostumerRepository";

module.exports.execute = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  let data = JSON.parse(String(event.body));

  const costumer = await costumerRepository.create(data);

  return created(costumer);
};
