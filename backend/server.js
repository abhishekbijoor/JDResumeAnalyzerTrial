// server.js
const Fastify = require("fastify");


const app = Fastify({
  logger: true
});

// Test route
app.get("/", async (request, reply) => {
  return { message: "Fastify API is running!" };
});

// Start server
const start = async () => {
  try {
    await app.listen({ port: 5000 });
    console.log("Server running on http://localhost:5000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
