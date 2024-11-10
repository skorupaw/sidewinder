import { Blind, Template } from "@/model";
import { createBlindTemplate } from "@/repositories/blind-template.repository";
import { createBlind } from "@/repositories/blind.respository";
import generatePDF from "@/use-cases/generate-pdf";

export const generateBlind = async (template: Template): Promise<Blind> => {
  const blindSchema = await createBlindTemplate({ template });
  const file = await generatePDF({
    url: `http://localhost:3000/blind-schema/${blindSchema.id}/template`,
  });
  return createBlind({ blindTemplateId: blindSchema.id, file });
};
