import Fastify from "fastify";
import userRoutes from "./modules/user/user.route";
const server = Fastify();
const port = Number(process.env.PORT) || 3000;

server.get("/healthcheck", async () => {
  return { status: "ok" };
});

async function main() {
  // routes
  server.register(userRoutes, { prefix: "api/users" });

  try {
    server.get("/", async (request, response) => {
      return { hello: "world" };
    });

    await server.listen({ port: port });
    console.log(`Server listening at ${port}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
