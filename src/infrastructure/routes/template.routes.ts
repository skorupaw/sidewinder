import { TemplateSchema } from "@/model";
import { Hono } from "hono";

const template = new Hono();

template.get("/", (c) => {
  TemplateSchema.$schema = "http://json-schema.org/draft-07/schema#";
  return c.json(TemplateSchema);
});

export default template;
