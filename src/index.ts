import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import v1 from "@/infrastructure/routes/v1";
import v2 from "@/infrastructure/routes/v2";

const app = new Hono();

app
  .use("/public/*", serveStatic({ root: "./" }))
  .route("/v1", v1)
  .route("/v2", v2);

const port = process.env.PORT ? parseInt(process.env.PORT) : 55015;

console.log(`Started server http://localhost:${port}`);

export default serve({
  port,
  fetch: app.fetch,
});
