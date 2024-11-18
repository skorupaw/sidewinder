import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import v1 from "@/infrastructure/routes/v1";
import v2 from "@/infrastructure/routes/v2";

const app = new Hono();

app
  .use("/public/*", serveStatic({ root: "./" }))
  .route("/v1", v1)
  .route("/v2", v2);

const args = Bun.argv;
const portIndex = args.indexOf("--port");

// Check for "--port" argument, `process.env.PORT`, or default to 55015
const port =
  portIndex !== -1 && args[portIndex + 1]
    ? parseInt(args[portIndex + 1])
    : process.env.PORT
      ? parseInt(process.env.PORT)
      : 55015;

console.log(`Started server http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
