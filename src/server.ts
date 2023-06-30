import Fastify from "fastify";
const server = Fastify();
const port = Number(process.env.PORT) || 3000;

server.get("/healthcheck", async () => {
  return { status: "ok" };
});

async function main() {
  try {
    server.get("/", async (request, response) => {
      return { hello: "world" };
    });

    await server.listen(3000, "0.0.0.0");
    console.log(`Server listening at ${port}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
