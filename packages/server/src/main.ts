import Fastify from "fastify";
import { helloWorld } from "lib_a";

const fastify = Fastify({
  logger: true,
});
// Declare a route
fastify.get("/", function (_, reply) {
  helloWorld();
  reply.send({ hello: "world" });
});

// Run the server!
fastify.listen({ port: 3000 }, function (err) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
