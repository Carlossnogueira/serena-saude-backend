import type { FastifyInstance } from "fastify";
import { registerUserController } from "./controllers/user/registerUserController.js";

export async function routes(app: FastifyInstance) {

    /* User routes */
    app.post('/register', registerUserController)
    
}