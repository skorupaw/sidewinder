import { TemplateV2Schema } from "@/model/v2/template.v2.model";
import { Hono } from "hono";

const template = new Hono();

template.get("/", (c) => {
  TemplateV2Schema.$schema = "http://json-schema.org/draft-07/schema#";
  return c.json(TemplateV2Schema);
});

export default template;
