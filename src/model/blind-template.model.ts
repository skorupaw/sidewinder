import { Static, Type as T } from "@sinclair/typebox";
import { TemplateSchema } from "@/model";

export const BlindTemplateSchema = T.Object(
  {
    id: T.Integer({ minimum: 1 }),
    template: TemplateSchema,
    createdAt: T.String({ format: "date-time" }),
    updatedAt: T.String({ format: "date-time" }),
  },
  {
    additionalProperties: false,
  },
);

export type BlindTemplate = Static<typeof BlindTemplateSchema>;
