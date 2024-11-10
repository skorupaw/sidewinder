import { Static, Type as T } from "@sinclair/typebox";

export const BlindSchema = T.Object(
  {
    id: T.Integer({ minimum: 1 }),
    blindTemplateId: T.Integer({ minimum: 1 }),
    file: T.Uint8Array(),
    createdAt: T.String({ format: "date-time" }),
    updatedAt: T.String({ format: "date-time" }),
  },
  {
    additionalProperties: false,
  },
);

export type Blind = Static<typeof BlindSchema>;
