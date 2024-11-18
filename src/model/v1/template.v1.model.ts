import { Template } from "@/model/template.model";
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

const SectionSchema = T.Object(
  {
    title: T.String(),
    segments: T.Array(SegmentSchema),
  },
  { additionalProperties: false },
);

export const TemplateV1Schema = T.Object(
  {
    version: T.Literal("1"),
    name: T.String(),
    position: T.String(),
    languages: T.Array(T.String()),
    skills: T.Array(T.String()),
    sections: T.Array(SectionSchema),
  },
  { additionalProperties: false },
);

export type TemplateV1 = Static<typeof TemplateV1Schema>;

export const toBase = ({
  name,
  languages,
  position,
  sections,
  skills,
}: TemplateV1): Template => {
  return { name, languages, position, sections, skills };
};
