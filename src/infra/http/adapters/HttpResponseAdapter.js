function ok(data) {
  return {
    statusCode: 200,
    body: JSON.stringify(data, null, 2),
  };
}

module.exports = { ok };
