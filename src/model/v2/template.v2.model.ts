import { Template } from "@/model/template.model";
import { Static, Type as T } from "@sinclair/typebox";

export const ExperienceSchema = T.Object({
  position: T.String(),
  dates: T.String(),
  technologies: T.Array(T.String()),
  achievements: T.Array(T.String()),
  summary: T.String(),
});

export const EducationSchema = T.Object({
  school: T.String(),
  degree: T.String(),
});

export const CertificatesSchema = T.Object({
  name: T.String(),
  governingBody: T.String(),
});

export const TemplateV2Schema = T.Object(
  {
    version: T.Literal("2"),
    name: T.String(),
    position: T.String(),
    languages: T.Array(T.String()),
    skills: T.Array(T.String()),
    summary: T.String(),
    experience: T.Array(ExperienceSchema),
    education: T.Array(EducationSchema),
    certificates: T.Optional(T.Array(CertificatesSchema)),
  },
  { additionalProperties: false },
);

export type TemplateV2 = Static<typeof TemplateV2Schema>;

export const toBase = ({
  name,
  position,
  languages,
  skills,
  summary,
  experience,
  education,
  certificates,
}: TemplateV2): Template => {
  const template: Template = {
    name,
    position,
    languages,
    skills,
    sections: [],
  };

  template.sections.push({
    title: "Executive summary",
    segments: [{ text: summary }],
  });

  template.sections.push({
    title: "Experience",
    segments: experience.map((ex) => ({
      title: ex.position,
      subtitle: ex.dates,
      text: ex.summary,
      list: ex.achievements,
      tags: ex.technologies,
    })),
  });

  template.sections.push({
    title: "Education",
    segments: education.map((ed) => ({
      title: ed.school,
      subtitle: ed.degree,
    })),
  });

  if (certificates && certificates.length > 0) {
    template.sections.push({
      title: "Certificates",
      segments: certificates.map((ce) => ({
        title: ce.name,
        subtitle: ce.governingBody,
      })),
    });
  }

  return template;
};
