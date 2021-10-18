const AWS = require("aws-sdk");

const dynamoDbClientParams = {};

// if (process.env.IS_OFFLINE) {
//   dynamoDbClientParams.region = "localhost";
//   dynamoDbClientParams.endpoint = "http://localhost:8000";
// }

const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

module.exports = dynamoDbClient;
