import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import blind from "@/infrastructure/routes/blind.routes";
import blindSchema from "@/infrastructure/routes/blind-schema.routes";
import template from "@/infrastructure/routes/template.routes";

const app = new Hono();

app
  .use("/public/*", serveStatic({ root: "./" }))
  .route("/blind", blind)
  .route("/blind-schema", blindSchema)
  .route("/template", template);

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
