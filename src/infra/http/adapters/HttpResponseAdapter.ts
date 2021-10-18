function common(statusCode: number, data: any) {
  return {
    statusCode,
    body: JSON.stringify(data, null, 2),
  };
}

function created(data: any) {
  return common(201, data);
}

function ok(data: any) {
  return common(200, data);
}

export { created, ok };
