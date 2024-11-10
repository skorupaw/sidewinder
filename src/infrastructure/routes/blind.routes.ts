import { TemplateSchema } from "@/model";
import { generateBlind } from "@/use-cases/generate-blind";
import { tbValidator } from "@hono/typebox-validator";
import { Hono } from "hono";
import { Type as T } from "@sinclair/typebox";
import { getBlindById } from "@/repositories/blind.respository";

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
  const template = c.req.valid("json");
  const blind = await generateBlind(template);
  return c.json({
    ...blind,
    file: `http://localhost:3000/${blind.id}/file`,
  });
});

export default blind;
