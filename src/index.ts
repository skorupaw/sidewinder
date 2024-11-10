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

const port = 3000;

export default {
  port,
  fetch: app.fetch,
};
