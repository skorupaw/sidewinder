import blindSchema from "@/infrastructure/routes/v2/blind-schema.routes";
import blind from "@/infrastructure/routes/v2/blind.routes";
import template from "@/infrastructure/routes/v2/template.routes";
import { Hono } from "hono";

const v2 = new Hono();

v2.route("/blind", blind)
  .route("/blind-schema", blindSchema)
  .route("/template", template);

export default v2;
