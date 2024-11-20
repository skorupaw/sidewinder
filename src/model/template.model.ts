import { Static, Type as T } from "@sinclair/typebox";

const SegmentSchema = T.Object(
  {
    title: T.Optional(T.String()),
    subtitle: T.Optional(T.String()),
    text: T.Optional(T.String()),
    list: T.Optional(T.Array(T.String())),
    tags: T.Optional(T.Array(T.String())),
  },
  { additionalProperties: false },
);

export type Segment = Static<typeof SegmentSchema>;

const SectionSchema = T.Object(
  {
    title: T.String(),
    segments: T.Array(SegmentSchema),
  },
  { additionalProperties: false },
);

export type Section = Static<typeof SectionSchema>;

export const TemplateSchema = T.Object(
  {
    name: T.String(),
    position: T.String(),
    languages: T.Optional(T.Array(T.String())),
    skills: T.Array(T.String()),
    sections: T.Array(SectionSchema),
  },
  { additionalProperties: false },
);

export type Template = Static<typeof TemplateSchema>;
