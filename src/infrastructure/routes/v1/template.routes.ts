import { TemplateV1Schema } from "@/model/v1/template.v1.model";
import { Hono } from "hono";

const template = new Hono();

template.get("/", (c) => {
  TemplateV1Schema.$schema = "http://json-schema.org/draft-07/schema#";
  return c.json(TemplateV1Schema);
});

export default template;
