"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = __importDefault(require("fastify"));
var lib_a_1 = require("lib_a");
var fastify = (0, fastify_1.default)({
    logger: true,
});
// Declare a route
fastify.get("/", function (_, reply) {
    (0, lib_a_1.helloWorld)();
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
