import { app } from "./app.js";
import { env } from "./lib/envconfig.js";

app.listen({port: env.PORT}, () =>{
    console.log(`🟢 HTTP server running on port ${env.PORT} in ${env.NODE_ENV} mode`);
})