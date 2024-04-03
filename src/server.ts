import fastify from "fastify";
import { BrainController } from "./controller/brain.controller";

const app = fastify();

app.get("/compare", BrainController.compare);
app.get("/compare-inverse", BrainController.compareInverse);

app.listen({port: 3333}).then(() => {
    console.log('Server listening on port 3333');
});