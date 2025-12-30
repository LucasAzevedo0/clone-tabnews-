test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const reponseBody = await response.json();
  expect(reponseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(reponseBody.updated_at).toISOString();
  expect(reponseBody.updated_at).toEqual(parsedUpdatedAt);

  const dependencies = reponseBody.dependencies;
  expect(dependencies.database.version).toEqual("16.0");
  expect(dependencies.database.max_connections).toBe(100);
  expect(dependencies.database.opened_connections).toBe(1);
});
