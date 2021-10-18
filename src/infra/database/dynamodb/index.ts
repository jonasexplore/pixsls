import * as AWS from "aws-sdk";

const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

export { dynamoDbClient };
