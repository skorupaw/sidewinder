import { TemplateSchema } from "@/model";
import { tbValidator } from "@hono/typebox-validator";
import { Hono } from "hono";
import { Type as T } from "@sinclair/typebox";
import { createBlind, getBlindById } from "@/repositories/blind.respository";
import { generatePDF } from "@/use-cases";
import { createBlindTemplate } from "@/repositories/blind-template.repository";

const blind = new Hono();

blind.get(
  ":id/file",
  tbValidator("param", T.Object({ id: T.String() })),
  async (c) => {
    const { id } = await c.req.valid("param");

    const blind = await getBlindById(Number(id));
    if (blind) {
      c.header(
        "Content-Disposition",
        `attachment; filename="blind_${blind.id}.pdf"`,
      );
      c.header("Content-Type", "application/pdf");
      return c.body(blind.file as any);
    }
    return c.text("404 Not Found", 404);
  },
);

blind.post("/", tbValidator("json", TemplateSchema), async (c) => {
  const template = await c.req.valid("json");
  const blindSchema = await createBlindTemplate({ template });
  const port = new URL(c.req.url).port;
  const file = await generatePDF({
    url: `http://localhost:${port}/blind-schema/${blindSchema.id}/template`,
  });
  const blind = await createBlind({ blindTemplateId: blindSchema.id, file });
  return c.json({
    ...blind,
    file: `http://localhost:${port}/blind/${blind.id}/file`,
  });
});

export default blind;
