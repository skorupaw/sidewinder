import blindSchema from "@/infrastructure/routes/v1/blind-schema.routes";
import blind from "@/infrastructure/routes/v1/blind.routes";
import template from "@/infrastructure/routes/v1/template.routes";
import { Hono } from "hono";

const v1 = new Hono();

v1.route("/blind", blind)
  .route("/blind-schema", blindSchema)
  .route("/template", template);

export default v1;
