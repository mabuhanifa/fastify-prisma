import { FastifyInstance } from "fastify";
import { registerUserHandler } from "./user.controller";

export default async function userRoutes(server: FastifyInstance) {
  server.post("/", registerUserHandler);
}
