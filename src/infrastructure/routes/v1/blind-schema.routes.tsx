import { Type as T } from "@sinclair/typebox";
import { Hono } from "hono";
import { tbValidator } from "@hono/typebox-validator";
import TemplateView from "@/infrastructure/views/template.view";
import { getBlindTemplateById } from "@/repositories/blind-template.repository";

const blindSchema = new Hono();

blindSchema.get(
  "/:id/template",
  tbValidator("param", T.Object({ id: T.String() })),
  async (c) => {
    const { id } = await c.req.valid("param");
    const blindTemplate = await getBlindTemplateById(Number(id));
    if (blindTemplate) {
      return c.html(<TemplateView data={blindTemplate.template} />);
    }
    return c.text("404 Not Found", 404);
  },
);

export default blindSchema;
